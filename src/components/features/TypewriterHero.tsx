import { useEffect, useRef } from 'react';
import TypeIt from 'typeit';

const PHRASES = [
  'автоматизирую рутину',
  'делаю AI-агентов',
  'пишу Telegram-ботов',
  'настраиваю n8n',
  'пишу на Python',
  'экономлю ваше время',
];

export default function TypewriterHero() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const instance = new (TypeIt as unknown as { new (el: HTMLElement, opts?: object): { type: (s: string) => unknown; pause: (n: number) => unknown; delete: (n?: number) => unknown; go: () => unknown } })(el, {
      speed: 80,
      lifeLike: true,
      loop: true,
      breakLines: false,
    });
    PHRASES.forEach((phrase, i) => {
      instance.type(phrase);
      if (i < PHRASES.length - 1) {
        instance.pause(1500).delete(phrase.length);
      } else {
        instance.pause(2000).delete(phrase.length);
      }
    });
    instance.go();
    return () => instance.destroy?.();
  }, []);

  return (
    <span
      ref={ref}
      className="min-h-[1.5em] inline-block text-emerald-600 dark:text-emerald-400 font-semibold"
      aria-live="polite"
      aria-label={`Услуги: ${PHRASES.join(', ')}`}
    />
  );
}
