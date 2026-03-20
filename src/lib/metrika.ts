/**
 * Достижение целей Яндекс.Метрики (тип «JavaScript-событие»).
 * @see https://yandex.ru/support/metrica/objects/reachgoal.html
 *
 * Номер счётчика задаётся в {@link ../utils/site.ts} и пробрасывается в
 * `window.__YM_COUNTER_ID__` из {@link ../layouts/BaseLayout.astro}.
 */
declare global {
  interface Window {
    ym?: (id: number, method: string, ...args: unknown[]) => void;
    /** Пробрасывается из BaseLayout при подключённом счётчике. */
    __YM_COUNTER_ID__?: number;
  }
}

/**
 * Отправляет достижение цели в Метрику, если счётчик уже инициализирован.
 *
 * @param target — идентификатор цели (как в интерфейсе Метрики)
 * @param params — опциональные параметры визита (например order_price)
 */
export function reachYandexMetrikaGoal(
  target: string,
  params?: Record<string, unknown>,
): void {
  if (typeof window === "undefined") return;
  const id = window.__YM_COUNTER_ID__;
  if (typeof id !== "number" || typeof window.ym !== "function") return;
  try {
    if (params && Object.keys(params).length > 0) {
      window.ym(id, "reachGoal", target, params);
    } else {
      window.ym(id, "reachGoal", target);
    }
  } catch (err) {
    console.warn("[metrika] reachGoal failed:", err);
  }
}
