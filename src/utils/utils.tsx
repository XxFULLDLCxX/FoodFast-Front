export const formatedPrice = (price: number) => (price / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
