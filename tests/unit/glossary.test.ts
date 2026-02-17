/**
 * Юнит-тесты утилит глоссария.
 */
import { describe, it, expect } from 'vitest';
import {
  sortTermsByLength,
  escapeHtml,
  type GlossaryEntry,
} from '../../src/utils/glossary';

describe('sortTermsByLength', () => {
  it('сортирует термины по длине (длинные первыми)', () => {
    const entries: GlossaryEntry[] = [
      { term: 'API', description: '...' },
      { term: 'Telegram Mini App', description: '...' },
      { term: 'n8n', description: '...' },
    ];
    const sorted = sortTermsByLength(entries);
    expect(sorted[0].term).toBe('Telegram Mini App');
    expect(sorted[0].term.length).toBeGreaterThan(sorted[1].term.length);
    expect(sorted[1].term.length).toBe(sorted[2].term.length);
  });

  it('не мутирует исходный массив', () => {
    const entries: GlossaryEntry[] = [
      { term: 'a', description: '...' },
      { term: 'ab', description: '...' },
    ];
    sortTermsByLength(entries);
    expect(entries[0].term).toBe('a');
  });
});

describe('escapeHtml', () => {
  it('экранирует опасные символы', () => {
    expect(escapeHtml('<script>')).toBe('&lt;script&gt;');
    expect(escapeHtml('"quoted"')).toBe('&quot;quoted&quot;');
    expect(escapeHtml("'apos'")).toBe('&#39;apos&#39;');
    expect(escapeHtml('a & b')).toBe('a &amp; b');
  });

  it('оставляет безопасный текст без изменений', () => {
    expect(escapeHtml('n8n')).toBe('n8n');
    expect(escapeHtml('Python')).toBe('Python');
  });
});
