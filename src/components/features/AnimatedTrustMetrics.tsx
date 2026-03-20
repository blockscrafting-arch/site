/**
 * Анимированные карточки метрик блока доверия: появление при скролле (Framer Motion).
 * Стили согласованы с темой сайта (CSS-переменные).
 */
import { motion } from "framer-motion";

export type TrustMetricIcon = "clock" | "chart" | "zap";

export interface TrustMetric {
  value: string;
  label: string;
  icon: TrustMetricIcon;
}

interface Props {
  metrics: TrustMetric[];
}

const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

function Icon({ type }: { type: TrustMetricIcon }) {
  const cls = "h-6 w-6 svg-icon-reveal";
  if (type === "clock") {
    return (
      <svg
        className={cls}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    );
  }
  if (type === "chart") {
    return (
      <svg
        className={cls}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    );
  }
  return (
    <svg
      className={cls}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  );
}

export default function AnimatedTrustMetrics({ metrics }: Props) {
  return (
    <motion.ul
      className="mt-14 grid gap-6 sm:grid-cols-3"
      role="list"
      variants={listVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {metrics.map((m, i) => (
        <motion.li
          key={`${m.value}-${i}`}
          variants={itemVariants}
          className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 text-center"
        >
          <span
            className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-accent-muted)] text-[var(--color-accent)] animate-float-icon"
            aria-hidden
          >
            <Icon type={m.icon} />
          </span>
          <span className="mt-5 block font-display text-4xl font-black text-[var(--color-accent)] sm:text-5xl tracking-tight">
            {m.value}
          </span>
          <span className="mt-3 block text-sm text-[var(--color-text-muted)] leading-relaxed">
            {m.label}
          </span>
        </motion.li>
      ))}
    </motion.ul>
  );
}
