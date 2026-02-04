import { useRef, useEffect, useState } from 'react';

interface Metric {
  value: string;
  label: string;
}

interface Props {
  metrics: Metric[];
}

function isNumeric(s: string): boolean {
  return /^\d+$/.test(s.trim()) || /^[\d\s/]+$/.test(s.trim());
}

export default function AnimatedTrustMetrics({ metrics }: Props) {
  const ref = useRef<HTMLUListElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          const key = 'trust-metrics-animated';
          try {
            if (typeof sessionStorage !== 'undefined' && sessionStorage.getItem(key)) {
              setAnimated(true);
              return;
            }
            setAnimated(true);
            sessionStorage.setItem(key, '1');
          } catch {
            setAnimated(true);
          }
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [animated]);

  return (
    <ul ref={ref} className="grid gap-8 sm:grid-cols-3 mt-12" role="list">
      {metrics.map((m, i) => (
        <li
          key={`${m.value}-${i}`}
          className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 text-center shadow-sm"
        >
          <span className="block text-2xl font-bold text-emerald-600 dark:text-emerald-400 sm:text-3xl">
            {m.value}
          </span>
          <span className="mt-2 block text-sm text-gray-600 dark:text-gray-400">
            {m.label}
          </span>
        </li>
      ))}
    </ul>
  );
}
