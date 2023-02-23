export const createTimeString = (timeZone: string) =>
  new Intl.DateTimeFormat('en-GB', { timeStyle: 'short', timeZone }).format(new Date());
