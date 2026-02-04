import { useEffect } from 'react';
import tippy, { type Props as TippyProps } from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light-border.css';

interface GlossaryItem {
  term: string;
  description: string;
}

function getGlossaryData(): GlossaryItem[] {
  const el = document.getElementById('glossary-data');
  if (!el?.textContent) return [];
  try {
    return JSON.parse(el.textContent) as GlossaryItem[];
  } catch {
    return [];
  }
}

export default function GlossaryActivator() {
  useEffect(() => {
    const items = getGlossaryData();
    if (items.length === 0) return;

    const container = document.querySelector('[data-glossary]');
    if (!container) return;

    const wordBoundary = (s: string) =>
      s.replace(/\s+/g, '\\s+').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const pattern = new RegExp(
      `\\b(${items.map((i) => wordBoundary(i.term)).join('|')})\\b`,
      'gi'
    );

    const walk = (node: Node) => {
      if (node.nodeType === Node.TEXT_NODE && node.textContent) {
        const text = node.textContent;
        const match = text.match(pattern);
        if (!match) return;
        const frag = document.createDocumentFragment();
        let last = 0;
        const parts = text.split(pattern);
        parts.forEach((part, i) => {
          if (i % 2 === 0) {
            if (part) frag.appendChild(document.createTextNode(part));
            return;
          }
          const term = items.find(
            (t) => t.term.toLowerCase() === part.toLowerCase()
          );
          if (!term) {
            frag.appendChild(document.createTextNode(part));
            return;
          }
          const span = document.createElement('span');
          span.className = 'glossary-term cursor-help border-b border-dotted border-emerald-600 dark:border-emerald-400';
          span.setAttribute('data-term', term.term);
          span.setAttribute('data-description', term.description);
          span.textContent = part;
          frag.appendChild(span);
        });
        (node.parentNode as Element).replaceChild(frag, node);
        return;
      }
      if (node.nodeType === Node.ELEMENT_NODE) {
        const el = node as Element;
        if (el.closest('a, button, script, style, [data-glossary-ignore]'))
          return;
        let child: Node | null;
        const toProcess: Node[] = [];
        for (child = node.firstChild; child; child = child.nextSibling)
          toProcess.push(child);
        toProcess.forEach(walk);
      }
    };

    walk(container);

    const terms = container.querySelectorAll('.glossary-term');
    const opts: Partial<TippyProps> = {
      theme: 'light-border',
      placement: 'top',
      allowHTML: true,
      interactive: true,
    };
    terms.forEach((el) => {
      const term = el.getAttribute('data-term');
      const desc = el.getAttribute('data-description');
      if (term && desc)
        tippy(el, {
          ...opts,
          content: `<strong>${term}</strong><br/>${desc}`,
        });
    });

    return () => {
      terms.forEach((el) => {
        const inst = (el as HTMLElement & { _tippy?: { destroy: () => void } })._tippy;
        inst?.destroy();
      });
    };
  }, []);

  return null;
}
