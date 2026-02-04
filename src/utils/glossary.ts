/**
 * Экранирует </script> в JSON для безопасной вставки в тег script (защита от XSS).
 */
export function escapeScriptTagInJson(json: string): string {
  return json.replace(/<\/script/gi, '\\u003c/script');
}
