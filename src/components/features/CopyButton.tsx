/**
 * Кнопка «Скопировать»: копирует value в буфер обмена, показывает «Скопировано» 2 сек.
 */
import { useState, useCallback } from 'react';

export interface CopyButtonProps {
  /** Что копировать в буфер. */
  value: string;
  /** Текст на кнопке по умолчанию. */
  label?: string;
  /** Текст после успешного копирования. */
  copiedLabel?: string;
  className?: string;
}

export default function CopyButton({
  value,
  label = 'Скопировать',
  copiedLabel = 'Скопировано!',
  className = '',
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleClick = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      const t = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(t);
    } catch {
      setCopied(false);
    }
  }, [value]);

  return (
    <button
      type="button"
      onClick={handleClick}
      className={
        'inline-flex items-center rounded-lg px-3 py-1.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] ' +
        (copied
          ? 'text-[var(--color-accent)]'
          : 'text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:bg-[var(--color-surface-muted)]') +
        ' ' +
        className
      }
      aria-live="polite"
    >
      {copied ? copiedLabel : label}
    </button>
  );
}
