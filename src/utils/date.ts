/** Format a date for display. */
export function formatDate(date: Date, includeDay = false): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    ...(includeDay && { day: 'numeric' }),
  };
  return date.toLocaleDateString('en-US', options);
}
