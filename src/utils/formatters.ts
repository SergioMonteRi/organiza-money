export function DateFormatter(date: string) {
  const dateType = new Date(date);
  const year = dateType.getFullYear();
  const month = (dateType.getMonth() + 1).toString().padStart(2, '0');
  const day = dateType.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
}
