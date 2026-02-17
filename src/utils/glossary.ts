/**
 * Утилиты для глоссария терминов (тултипы).
 */

export interface GlossaryEntry {
  term: string;
  description: string;
}

/**
 * Сортирует термины по длине (длинные первыми), чтобы не оборачивать
 * короткое вхождение внутри длинного термина.
 */
export function sortTermsByLength(entries: GlossaryEntry[]): GlossaryEntry[] {
  return [...entries].sort((a, b) => b.term.length - a.term.length);
}

/**
 * Экранирует HTML в строке (для безопасной вставки в разметку).
 */
export function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  return text.replace(/[&<>"']/g, (ch) => map[ch] ?? ch);
}
