/**
 * Активирует тултипы глоссария для контейнеров с data-glossary.
 * Обходит текстовые узлы, оборачивает термины в <span>, инициализирует Tippy.
 */

import { useEffect } from 'react';
import tippy, { type Props as TippyProps } from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light-border.css';

export interface GlossaryEntry {
  term: string;
  description: string;
}

const TIPPY_OPTIONS: Partial<TippyProps> = {
  theme: 'light-border',
  placement: 'top',
  trigger: 'mouseenter focus',
  interactive: false,
  maxWidth: 320,
  allowHTML: false,
};

/**
 * Находит в тексте все вхождения терминов (целиком) и возвращает массив отрезков.
 * Термины должны быть отсортированы по длине (длинные первыми).
 */
function findTermRanges(
  text: string,
  terms: GlossaryEntry[]
): Array<{ start: number; end: number; entry: GlossaryEntry }> {
  const ranges: Array<{ start: number; end: number; entry: GlossaryEntry }> = [];
  const used = new Set<number>(); // индексы символов, уже входящие в какой-то диапазон

  for (const entry of terms) {
    const term = entry.term;
    if (!term) continue;
    let pos = 0;
    while (true) {
      const idx = text.indexOf(term, pos);
      if (idx === -1) break;
      let overlap = false;
      for (let i = idx; i < idx + term.length; i++) {
        if (used.has(i)) {
          overlap = true;
          break;
        }
      }
      if (!overlap) {
        for (let i = idx; i < idx + term.length; i++) used.add(i);
        ranges.push({ start: idx, end: idx + term.length, entry });
      }
      pos = idx + 1;
    }
  }
  ranges.sort((a, b) => a.start - b.start);
  return ranges;
}

function wrapTextNode(
  textNode: Text,
  terms: GlossaryEntry[]
): HTMLSpanElement[] {
  const text = textNode.textContent ?? '';
  const sorted = [...terms].sort((a, b) => b.term.length - a.term.length);
  const ranges = findTermRanges(text, sorted);
  if (ranges.length === 0) return [];

  const parent = textNode.parentNode;
  if (!parent) return [];

  const spans: HTMLSpanElement[] = [];
  let lastEnd = 0;

  for (const { start, end, entry } of ranges) {
    if (start > lastEnd) {
      parent.insertBefore(
        document.createTextNode(text.slice(lastEnd, start)),
        textNode
      );
    }
    const span = document.createElement('span');
    span.setAttribute('data-term', entry.term);
    span.setAttribute('data-description', entry.description);
    span.className =
      'border-b border-dotted border-emerald-500 dark:border-emerald-400 cursor-help';
    span.textContent = text.slice(start, end);
    parent.insertBefore(span, textNode);
    spans.push(span);
    lastEnd = end;
  }
  if (lastEnd < text.length) {
    parent.insertBefore(document.createTextNode(text.slice(lastEnd)), textNode);
  }
  parent.removeChild(textNode);
  return spans;
}

const EXCLUDE_TAG_NAMES = new Set([
  'CODE', 'PRE', 'A', 'BUTTON', 'INPUT', 'TEXTAREA', 'SELECT', 'OPTION', 'SCRIPT', 'STYLE',
]);

/**
 * Возвращает true, если узел находится внутри элемента, где глоссарий отключён.
 */
function isInsideExcluded(node: Node): boolean {
  let el: Node | null = node.parentElement;
  while (el && el.nodeType === Node.ELEMENT_NODE) {
    const tag = (el as Element).tagName;
    if (EXCLUDE_TAG_NAMES.has(tag)) return true;
    if ((el as Element).getAttribute?.('data-glossary') === 'false') return true;
    el = el.parentElement;
  }
  return false;
}

function processContainer(container: Element, glossary: GlossaryEntry[]): void {
  if (container.getAttribute('data-glossary-processed') === 'true') return;
  container.setAttribute('data-glossary-processed', 'true');

  const walker = document.createTreeWalker(
    container,
    NodeFilter.SHOW_TEXT,
    null
  );
  const textNodes: Text[] = [];
  let n: Text | null;
  while ((n = walker.nextNode() as Text | null)) {
    if (n && n.textContent && n.textContent.trim().length > 0 && !isInsideExcluded(n))
      textNodes.push(n);
  }

  const allSpans: HTMLSpanElement[] = [];
  for (const textNode of textNodes) {
    const spans = wrapTextNode(textNode, glossary);
    allSpans.push(...spans);
  }

  allSpans.forEach((el) => {
    const desc = el.getAttribute('data-description');
    if (desc) {
      tippy(el, {
        ...TIPPY_OPTIONS,
        content: desc,
      });
    }
  });
}

export default function GlossaryActivator() {
  useEffect(() => {
    const el = document.getElementById('glossary-data');
    let glossary: GlossaryEntry[] | undefined;
    if (el?.tagName === 'SCRIPT' && el.textContent) {
      try {
        glossary = JSON.parse(el.textContent) as GlossaryEntry[];
      } catch {
        glossary = undefined;
      }
    }
    if (!glossary || !Array.isArray(glossary) || glossary.length === 0) return;

    const containers = document.querySelectorAll('[data-glossary]');
    containers.forEach((el) => processContainer(el, glossary));

    return () => {
      document.querySelectorAll('[data-term]').forEach((el) => {
        const instance = (el as HTMLElement & { _tippy?: { destroy: () => void } })._tippy;
        if (instance) instance.destroy();
      });
    };
  }, []);

  return null;
}
