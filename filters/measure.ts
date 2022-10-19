export default function filter(value: string | number, measure: string, config?: { spacing: boolean }) {
  return `${value}${config?.spacing ? ' ' : ''}${measure}`;
}
