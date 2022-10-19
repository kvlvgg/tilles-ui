export default function filter(value: number | string | null | undefined, config?: { decimal: boolean }): string {
  let result = '0';
  if (typeof value === 'number') result = value.toFixed(config?.decimal ? 2 : 0);
  if (typeof value === 'string') result = Number.parseFloat(value).toFixed(config?.decimal ? 2 : 0);
  return result.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
}
