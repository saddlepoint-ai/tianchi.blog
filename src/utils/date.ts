export function formatDate(date: Date, style: 'short' | 'long' = 'short') {
  return new Intl.DateTimeFormat('en', {
    month: style === 'long' ? 'long' : 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}
