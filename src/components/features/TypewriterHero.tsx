/**
 * HeroRotator — ротация ключевых услуг внутри H1.
 * Framer Motion AnimatePresence mode="wait": fade+slide, ~3.5 сек/слово.
 * Первое слово видно мгновенно (initial={false}), ноль пустого экрана.
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/** Услуги в винительном падеже — каждая ЦА видит своё. */
const SERVICES = ["бота", "AI-агента", "парсер", "автоматизацию"] as const;

const CYCLE_MS = 3500;

/** Определяет prefers-reduced-motion без зависимости от framer-motion internals. */
function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

export default function HeroRotator() {
  const [index, setIndex] = useState(0);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % SERVICES.length),
      CYCLE_MS,
    );
    return () => clearInterval(id);
  }, [reduced]);

  if (reduced) {
    return (
      <span className="text-[var(--color-accent)]">{SERVICES[0]}</span>
    );
  }

  const word = SERVICES[index];

  return (
    <span className="inline-block align-baseline" aria-live="polite">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={word}
          className="inline-block text-[var(--color-accent)]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {word}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
