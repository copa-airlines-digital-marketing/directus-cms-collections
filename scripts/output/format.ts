/**
 * Simple code formatter for stable output
 * Uses basic indentation and line breaks
 */
export function formatTypeScript(code: string): string {
  // Ensure consistent line endings
  let formatted = code.replace(/\r\n/g, '\n');

  // Remove trailing whitespace
  formatted = formatted
    .split('\n')
    .map((line) => line.trimEnd())
    .join('\n');

  // Ensure file ends with single newline
  formatted = formatted.trim() + '\n';

  return formatted;
}
