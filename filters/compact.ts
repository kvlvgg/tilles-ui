const formatter = Intl.NumberFormat('en-US', { notation: 'compact' });

export default function compact(value: number) {
  return formatter.format(value);
}
