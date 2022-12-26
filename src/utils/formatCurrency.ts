export function formatCurrency(currency: number | undefined) {
  return currency
    ? new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'USD'
      }).format(currency)
    : 0;
}
