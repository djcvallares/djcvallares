document.getElementById('calculateTaxBtn').addEventListener('click', function () {
  const income = parseFloat(document.getElementById('income').value);
  const taxBracket = parseInt(document.getElementById('taxBracket').value);
  const taxResult = document.getElementById('taxResult').querySelector('span');
  let taxAmount;

  if (isNaN(income) || income < 0) {
    taxResult.textContent = "Please enter a valid income.";
    return;
  }

  switch (taxBracket) {
    case 10:
      taxAmount = income * 0.10;
      break;

    case 20:
      taxAmount = income * 0.20;
      break;

    case 30:
      taxAmount = income * 0.30;
      break;

    default:
      taxAmount = 0;
  }

  taxResult.textContent = `$${taxAmount.toFixed(2)}`;
});
