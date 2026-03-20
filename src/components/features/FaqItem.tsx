import { useState, useId } from "react";

interface Props {
  question: string;
  answer: string;
  /** Категория вопроса: отображается как бейдж над вопросом */
  category: string;
  /** Порядковый номер (0-based) */
  index: number;
}

/**
 * Интерактивный элемент FAQ-аккордеона.
 * Анимация раскрытия через grid-rows (плавнее max-height).
 * При раскрытии показывает левый акцентный бордер.
 */
export default function FaqItem({ question, answer, category, index }: Props) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const answerId = `faq-answer-${id}`;
  const buttonId = `faq-button-${id}`;
  const num = String(index + 1).padStart(2, "0");

  return (
    <div
      className={`border-b border-[var(--color-border)] last:border-b-0 transition-colors duration-200 ${
        open ? "bg-[var(--color-surface-muted,var(--color-surface))]" : ""
      }`}
    >
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={answerId}
          onClick={() => setOpen((v) => !v)}
          className="group flex w-full items-start gap-4 px-5 py-5 sm:px-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-inset"
        >
          {/* Порядковый номер */}
          <span
            className="shrink-0 w-7 pt-0.5 font-mono text-xs font-semibold text-[var(--color-text-muted)] opacity-50 select-none"
            aria-hidden="true"
          >
            {num}
          </span>

          {/* Категория + вопрос */}
          <span className="flex-1 min-w-0">
            <span className="block mb-1 text-[10px] font-semibold uppercase tracking-widest text-[var(--color-accent)] opacity-70">
              {category}
            </span>
            <span className="block text-[0.9375rem] font-medium leading-snug text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors duration-150">
              {question}
            </span>
          </span>

          {/* Шеврон */}
          <span
            className={`shrink-0 mt-1 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            aria-hidden="true"
          >
            <svg
              className="h-5 w-5 text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors duration-150"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
      </h3>

      {/* Ответ: grid-rows анимация для плавного открытия */}
      <div
        id={answerId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pl-[2.75rem] pr-5 pb-5 sm:pl-[3.25rem] sm:pr-6">
            {/* Левый акцентный бордер — как у quote */}
            <div className="border-l-2 border-[var(--color-accent)] pl-4 opacity-90">
              <p className="text-sm leading-relaxed text-[var(--color-text-muted)]">
                {answer}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
