/**
 * Регистрация GSAP и плагинов для использования в компонентах.
 * Импортировать в компонентах: import { gsap } from 'gsap'; import { ScrollTrigger } from 'gsap/ScrollTrigger';
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };
