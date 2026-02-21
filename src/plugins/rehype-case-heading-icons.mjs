/**
 * Rehype-плагин: добавляет data-section-icon к h2 в контенте кейсов.
 * Иконки рисуются в CSS макета кейса через ::before + data-URI SVG.
 * Только для файлов из content/cases/.
 */
function isCaseContent(file) {
  if (!file) return false;
  const path = file.path ?? file.history?.[0] ?? "";
  return String(path).includes("cases");
}

function visit(node, h2IndexRef) {
  if (!node || typeof node !== "object") return;
  if (node.type === "element" && node.tagName === "h2") {
    node.properties = node.properties || {};
    node.properties["data-section-icon"] = String(h2IndexRef.current % 6);
    h2IndexRef.current += 1;
  }
  if (Array.isArray(node.children)) {
    for (const child of node.children) visit(child, h2IndexRef);
  }
}

export default function rehypeCaseHeadingIcons() {
  return (tree, file) => {
    if (!isCaseContent(file)) return;
    const h2Index = { current: 0 };
    visit(tree, h2Index);
  };
}
