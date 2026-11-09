const currency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export const formatPrice = (value: number) => currency.format(value);

/**
 * O JSON só traz o preço atual. O layout mostra também um preço antigo
 * riscado, então ele é simulado aqui (10% acima). Remova se não quiser.
 */
export const getOldPrice = (price: number) => Math.round(price * 1.1);








/** verificar valor depois!!! */
export const getInstallment = (price: number, times = 2) => price / times;