export default function filter(value: number) {
  if (value > 0) return `+${value}%`;
  else return `${value}%`;
}
