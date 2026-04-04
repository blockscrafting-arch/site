---
title: "HVAC AI — ИИ-мониторинг микроклимата цеха нитроаммофоски"
description: "n8n + AI Agent: 15+ датчиков MQTT → пороги СанПиН/ГОСТ → GPT-4o-mini классифицирует отклонения → Telegram-алерты (critical/warning/info) → MQTT-команды управления. TimescaleDB + Grafana real-time."
result: "Полный цикл: датчик → MQTT → n8n → AI-анализ → Telegram-алерт + MQTT-команда + Grafana — без участия оператора."
stack:
  [
    "n8n",
    "Python",
    "MQTT",
    "TimescaleDB",
    "Grafana",
    "OpenAI API",
    "Telegram Bot API",
    "Docker",
  ]
date: 2026-04-04
duration: "1 неделя"
categories: ["automation", "ai-agent"]
accentColor: "#06b6d4"
heroImage: "/images/cases/hvac-ai-grafana.webp"
screenshots:
  - "/images/cases/hvac-ai-grafana.webp"
  - "/images/cases/hvac-ai-chiller.webp"
  - "/images/cases/hvac-ai-n8n-workflow.png"
productName: "HVAC AI System"
testimonial:
  text: "Заказывал автоматизацию системы ОВК на базе n8n. Работа выполнена на наивысшую оценку. Владислав полностью проконсультировал и ответил на все интересующие вопросы полностью бесплатно. После 50% оплаты работа была сделана в кратчайшие сроки. На все вопросы ответы были быстро и очень развернутыми. Рекомендую"
  author: "Александр Петушкевич"
draft: false
metrics:
  - { label: "Мониторинг HVAC", before: "вручную", after: "AI + автоалерты" }
  - { value: "15+", label: "датчиков в реальном времени (MQTT → TimescaleDB)" }
  - { value: "3", label: "уровня алертов: critical → warning → info" }
---

## Задача

Производственный цех нитроаммофоски (NPK) — категория IIб (повышенная опасность) по СанПиН 1.2.3685-21. Основное оборудование: чиллер KULTEK CTK CH SL34M Ex (холодопроизводительность 1000 кВт, хладагент R22, 2200 кг, маркировка взрывозащиты 1 Ex d IIB T4). Хладоноситель — 20% водный раствор аммиака.

Оператор следит за параметрами вручную: температура, влажность, CO2, давления компрессора, расход хладоносителя. При 15+ параметрах и жёстких нормативных порогах человек неизбежно пропустит критическое отклонение — особенно ночью или в выходные. Нужна полностью автоматическая система: сбор данных, анализ через AI, мгновенные алерты в Telegram, управляющие команды на оборудование.

## Решение

### MQTT + сбор данных с датчиков

Mosquitto Broker принимает JSON-снимки каждые 30 секунд на топик `hvac/snapshot`. В каждом снимке — 15+ параметров, сгруппированных по зонам:

- **Микроклимат цеха** — температура (°C), влажность (%), CO2 (ppm), скорость воздуха (м/с)
- **Чиллер R22** — T испарителя, P всасывания/нагнетания (бар абс.), перегрев (K), T нагнетания, T масла, ΔP масла
- **Хладоноситель NH3 20%** — T вход/выход, расход (м³/ч), давление (МПа)
- **Конденсатор** — T вход/выход охлаждающей воды

### n8n Workflow — 14 нодов

**MQTT Trigger** слушает `hvac/*` и запускает цепочку обработки:

**Разбор MQTT + пороги** — Code Node (500+ строк). Функция `evaluateRuleSeverity()` проверяет каждый параметр против порогов из СанПиН 1.2.3685-21, ГОСТ 30494-2011 и паспорта оборудования KULTEK. Возвращает: `ruleSeverity` (normal / warning / critical), массив `ruleIssues[]` и текстовую сводку `ruleSummary`.

Примеры порогов:

| Параметр | Warning | Critical | Источник |
| :--- | :--- | :--- | :--- |
| T помещения | <16 или >26 °C | <14 или >30 °C | СанПиН IIб |
| CO2 | >1400 ppm | >2000 ppm | ГОСТ 30494 |
| P нагнетания | >20 бар | >25 бар | Паспорт KULTEK |
| T нагнетания | >120 °C | >135 °C | Паспорт KULTEK |
| T масла | >65 °C | >75 °C | Паспорт KULTEK |

Далее поток разделяется на две параллельные ветки:

**Ветка 1 — запись в БД:** развернуть сенсоры в строки → PostgreSQL `sensor_readings` (каждый датчик — отдельная запись с `sensor_id`, `value`, `unit`, `equipment`).

**Ветка 2 — AI-анализ:** Gate (пропускает только warning/critical) → Throttle (окно 120 секунд — экономия API) → AI Agent HVAC.

### AI Agent HVAC (LangChain + GPT-4o-mini)

AI Agent реализован через n8n LangChain integration:

- **System prompt** — контроллер ОВК цеха NPK, категория IIб. Знает номиналы оборудования KULTEK, пороги по СанПиН и ГОСТ, типичные аварийные сценарии
- **Input** — текущий снимок всех датчиков + таблица порогов + meta оборудования + pre-оценка правилами (`ruleSeverity` + `ruleSummary`)
- **Output JSON** — `{status, severity, problem, details, action, message}`
- **Temperature 0.2** — детерминированность критична для промышленного применения

Поле `action` содержит целевое оборудование (`chiller`, `ventilation`, `alarm`) и команду (`reduce_compressor_load`, `increase_airflow`, `shutdown`), которая отправляется обратно через MQTT.

**Rate limiting:** Gate пропускает ~20% снимков (только отклонения), Throttle разрешает 1 вызов AI каждые 120 секунд. Результат: ~12 вызовов/день вместо 2880 — экономия ~99% на API.

### Маршрутизация severity

Switch Node направляет ответ AI по трём веткам:

- **critical** → Telegram CRITICAL (со звуком, красная метка) + MQTT команда + PostgreSQL `ai_decisions`
- **warning** → Telegram WARNING (со звуком, оранжевая метка) + MQTT команда + PostgreSQL `ai_decisions`
- **info (fallback)** → Telegram INFO (silent, зелёная метка) + MQTT команда

Telegram-сообщения в HTML: проблема, детали, ссылка на Grafana-дашборд.

MQTT output публикует на `hvac/control/command` — JSON с полем `action` для PLC или другого контроллера.

### TimescaleDB + Grafana

**TimescaleDB** (PostgreSQL 16 + расширение):

- `sensor_readings` — hypertable с chunk interval 1 день, retention policy 90 дней. Автоудаление старых данных
- `ai_decisions` — история всех решений AI (input_data, ai_response, status, model, latency)
- `control_commands` — журнал управляющих команд
- `alerts` — хроника алертов

**Grafana** (auto-provisioning через YAML):

- Dashboard UID: `hvac`, refresh каждые 5 секунд
- 15+ панелей в 4 группах: Микроклимат цеха, Чиллер KULTEK / R22, Хладоноситель NH3 20%, Конденсатор
- SQL-запросы к TimescaleDB через datasource `tsdb-hvac`
- Dashboard JSON генерируется скриптом `generate_grafana_hvac_dashboard.py` (346 строк)

### Docker + HTTPS

**Docker Compose** — 6 сервисов:

1. **timescaledb** — PostgreSQL 16 + TimescaleDB, инициализация из `sql/init.sql`
2. **mosquitto** — MQTT Broker (anonymous access, persistent storage)
3. **n8n** — workflow engine с LangChain и OpenAI integration
4. **grafana** — auto-provisioning datasources + dashboards
5. **caddy** — reverse proxy + Let's Encrypt HTTPS
6. **simulator** — Python-скрипт, генерирует синтетические данные с аномалиями (20% вероятность, 11 типов аномалий)

**Caddy** обеспечивает HTTPS:

- `n8n.petushkevich.ru` → n8n:5678
- `grafana.petushkevich.ru` → grafana:3000

Запуск — одна команда: `docker compose up -d`.

### Тестирование

pytest без Docker: валидация пороговой логики (6 мутаций), структура workflow JSON (14 ассертов), docker-compose.yml, Grafana dashboard.

Три зеркала пороговой логики (n8n JS, Python, JS-патчер) синхронизированы — тесты гарантируют паритет.

## Результат

| Показатель | До | После |
| :--- | :--- | :--- |
| Мониторинг 15+ датчиков | Вручную, оператор | Автоматически (MQTT → n8n → AI) |
| Время реакции на отклонение | Минуты–часы | Секунды (Telegram-алерт) |
| Анализ ситуации | На глаз оператора | AI Agent + нормативные пороги (СанПиН, ГОСТ) |
| Визуализация | Нет | Grafana (15+ панелей, 5 сек refresh) |
| API-экономия | — | ~99% (Gate + Throttle: 12 вызовов/день) |
| Развёртывание | — | `docker compose up -d` (6 сервисов, HTTPS) |

---

Нужна автоматизация мониторинга, IoT или HVAC? [Напишите](/contact) — спроектируем систему.
