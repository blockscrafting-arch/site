/**
 * Кнопка «Скопировать»: копирует value в буфер обмена, показывает «Скопировано» 2 сек.
 * Режим iconOnly — только иконка (копировать/галочка), подсказка через title.
 */
import { useState, useCallback } from "react";

export interface CopyButtonProps {
  /** Что копировать в буфер. */
  value: string;
  /** Текст на кнопке по умолчанию. */
  label?: string;
  /** Текст после успешного копирования. */
  copiedLabel?: string;
  /** Показывать только иконку (компактно для узких блоков). */
  iconOnly?: boolean;
  className?: string;
}

const CopyIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-2m-6 12a2 2 0 01-2-2V6a2 2 0 012-2h2a2 2 0 012 2v10a2 2 0 01-2 2z"
    />
  </svg>
);

const CheckIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

export default function CopyButton({
  value,
  label = "Скопировать",
  copiedLabel = "Скопировано!",
  iconOnly = false,
  className = "",
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleClick = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      const t = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(t);
    } catch (err) {
      console.warn("[CopyButton] Clipboard write failed:", err);
      setCopied(false);
    }
  }, [value]);

  const labelText = copied ? copiedLabel : label;

  return (
    <button
      type="button"
      onClick={handleClick}
      title={labelText}
      aria-label={labelText}
      className={
        "inline-flex items-center justify-center rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] " +
        (iconOnly
          ? "p-2 min-w-[2.25rem] min-h-[2.25rem]"
          : "px-3 py-1.5 text-sm font-medium") +
        " " +
        (copied
          ? "text-[var(--color-accent)]"
          : "text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:bg-[var(--color-surface-muted)]") +
        " " +
        className
      }
      aria-live="polite"
    >
      {iconOnly ? copied ? <CheckIcon /> : <CopyIcon /> : labelText}
    </button>
  );
}
