export const createTimeString = (timeZone: string) =>
  new Intl.DateTimeFormat('default', { timeStyle: 'short', timeZone }).format(new Date());
