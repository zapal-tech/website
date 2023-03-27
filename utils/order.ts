export const sortByOrder = <T extends { order: number }>(a: T, b: T) => a.order - b.order;
