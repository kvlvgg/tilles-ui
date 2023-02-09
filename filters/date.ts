export default function date(value: string /* yyyy-MM-dd */) {
  return new Date(value).toLocaleDateString('ru-RU');
}
