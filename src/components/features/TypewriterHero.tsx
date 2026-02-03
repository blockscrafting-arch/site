/**
 * Hero-блок с эффектом печатающегося текста (TypeIt).
 * Циклически печатает и стирает фразы про услуги.
 */

import { useEffect, useRef } from 'react';
// @ts-expect-error — пакет typeit не экспортирует типы в @types
import TypeIt from 'typeit';

const PHRASES = [
  'Автоматизирую рутину',
  'Создаю AI-агентов',
  'Делаю Telegram ботов',
  'Настраиваю n8n',
  'Пишу Python-скрипты',
  'Экономлю ваше время',
];

const OPTIONS = {
  strings: PHRASES,
  speed: 80,
  deleteSpeed: 50,
  lifeLike: true,
  cursor: true,
  cursorChar: '|',
  breakLines: false,
  nextStringDelay: [1200, 800],
  loop: true,
  loopDelay: [1500, 500],
};

export default function TypewriterHero() {
  const elRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!elRef.current) return;
    const instance = new TypeIt(elRef.current, OPTIONS).go();
    return () => instance.destroy();
  }, []);

  return (
    <span
      ref={elRef}
      className="min-h-[1.5em] inline-block text-emerald-600 dark:text-emerald-400 font-semibold"
      aria-live="polite"
      aria-label="Услуги: автоматизация, AI-агенты, Telegram боты, n8n, Python, экономия времени"
    />
  );
}
