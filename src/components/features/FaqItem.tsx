import { useState, useId } from "react";

interface Props {
  question: string;
  answer: string;
}

export default function FaqItem({ question, answer }: Props) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const answerId = `faq-answer-${id}`;
  const buttonId = `faq-button-${id}`;

  return (
    <div className="border-b border-[var(--color-border)] last:border-b-0">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={answerId}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between py-4 text-left text-base font-medium text-[var(--color-text)] hover:text-[var(--color-accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] rounded"
        >
          {question}
          <span
            className={`ml-2 shrink-0 transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
            aria-hidden
          >
            <svg
              className="h-5 w-5 shrink-0 svg-icon-reveal text-[var(--color-text-muted)]"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden
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
      <div
        id={answerId}
        role="region"
        aria-labelledby={buttonId}
        className={`overflow-hidden transition-all duration-200 ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="pb-4 text-sm text-[var(--color-text-muted)]">{answer}</p>
      </div>
    </div>
  );
}
