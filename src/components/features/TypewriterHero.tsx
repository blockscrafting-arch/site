/**
 * Hero: печатающийся главный заголовок (TypeIt).
 * Циклически печатает и стирает цепляющие фразы — выгода и результат.
 */

import { useEffect, useRef } from "react";
// @ts-expect-error — пакет typeit не экспортирует типы в @types
import TypeIt from "typeit";

/** Фразы для главного экрана: конкретные результаты из реальных кейсов. */
const PHRASES = [
  "Личный AI-ассистент",
  "Контент-завод 24/7",
  "Бот вместо саппорта",
  "Автоматизация рутины",
  "Парсер без выходных",
  "ИИ-аналитик за вас",
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
      className={`min-h-[1.2em] inline-block ${className ?? "text-[var(--color-accent)] font-black"}`}
      aria-live="polite"
      aria-label="Разработка на заказ: личный AI-ассистент, контент-завод, боты, автоматизация, парсеры, ИИ-аналитика"
    />
  );
}
