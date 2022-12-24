function generateRandomNumberForInvoiceCode() {
  let randomNumber = Math.floor(Math.random() * (99 - 0 + 1) + 0);

  if (randomNumber < 10) {
    randomNumber = parseInt('0' + randomNumber.toString());
  }
  return randomNumber;
}

export function generateInvoiceCode() {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const charactersLength = characters.length;
  for (let i = 0; i < 5; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  result = `#${generateRandomNumberForInvoiceCode()}` + result;

  return result;
}
