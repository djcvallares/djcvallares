document.getElementById('convertBtn').addEventListener('click', function () {
  const inputValue = parseFloat(document.getElementById('inputValue').value);
  const conversionType = document.getElementById('conversionType').value;
  const resultDisplay = document.getElementById('result').querySelector('span');
  let result;

  if (isNaN(inputValue)) {
    resultDisplay.textContent = "Please enter a valid number.";
    return;
  }

  switch (conversionType) {
    case 'cToF':
      result = (inputValue * 9/5) + 32;
      break;
    case 'fToC':
      result = (inputValue - 32) * 5/9;
      break;
    case 'mToFt':
      result = inputValue * 3.28084;
      break;
    case 'ftToM':
      result = inputValue / 3.28084;
      break;
    default:
      result = "Invalid conversion.";
  }

  resultDisplay.textContent = result.toFixed(2);
});
