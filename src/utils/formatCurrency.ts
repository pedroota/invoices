export function formatCurrency(currency: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'USD'
  }).format(currency);
}
