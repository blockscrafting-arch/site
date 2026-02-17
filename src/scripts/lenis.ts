/**
 * Инициализация Lenis smooth scroll.
 * Вызывается из BaseLayout после загрузки DOM.
 */
import Lenis from 'lenis';

export function initLenis(): Lenis | null {
  if (typeof document === 'undefined' || typeof window === 'undefined') return null;
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    smoothWheel: true,
  });
  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  return lenis;
}
