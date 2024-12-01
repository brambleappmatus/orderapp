export const formatPrice = (price: number): string => {
  return `€${price.toFixed(2)}`;
};

export const generateId = (): string => {
  return Date.now().toString();
};