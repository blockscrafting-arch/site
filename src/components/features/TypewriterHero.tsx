/**
 * Hero: печатающийся главный заголовок (TypeIt).
 * Циклически печатает и стирает цепляющие фразы — выгода и результат.
 */

import { useEffect, useRef } from "react";
// @ts-expect-error — пакет typeit не экспортирует типы в @types
import TypeIt from "typeit";

/** Фразы для главного экрана: выгода и результат, без воды. */
const PHRASES = [
  "Рутину — в ноль",
  "Боты, которые работают за вас",
  "10+ часов в неделю — обратно вам",
  "AI вместо трёх менеджеров",
  "От заявки до сделки — на автопилоте",
  "Автоматизирую. Вы растёте.",
];

const OPTIONS = {
  strings: PHRASES,
  speed: 70,
  deleteSpeed: 45,
  lifeLike: true,
  cursor: true,
  cursorChar: "|",
  breakLines: false,
  nextStringDelay: [1400, 900],
  loop: true,
  loopDelay: [1200, 600],
};

interface TypewriterHeroProps {
  /** Классы для обёртки (например цвет и размер под Hero). */
  className?: string;
}

export default function TypewriterHero({ className }: TypewriterHeroProps) {
  const elRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!elRef.current) return;
    const instance = new TypeIt(elRef.current, OPTIONS).go();
    return () => instance.destroy();
  }, []);

  return (
    <span
      ref={elRef}
      className={`min-h-[1.2em] inline-block ${className ?? "text-[var(--color-accent)] font-semibold"}`}
      aria-live="polite"
      aria-label="Главный заголовок: рутина в ноль, боты за вас, экономия времени, AI вместо менеджеров, автопилот заявок"
    />
  );
}
