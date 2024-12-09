document.getElementById('calculateBtn').addEventListener('click', function () {
  const n = parseInt(document.getElementById('inputNumber').value);
  const operationType = document.getElementById('operationType').value;
  const output = document.getElementById('output').querySelector('span');
  let result;

  if (isNaN(n) || n <= 0) {
    output.textContent = "Please enter a valid positive number.";
    return;
  }

  switch (operationType) {
    case 'factorial':
      result = 1;
      let i = 1;
      while (i <= n) {
        result *= i;
        i++;
      }
      break;

    case 'sum':
      result = 0;
      let j = 1;
      do {
        result += j;
        j++;
      } while (j <= n);
      break;

    case 'average':
      let sum = 0;
      for (let k = 1; k <= n; k++) {
        sum += k;
      }
      result = sum / n;
      break;

    default:
      result = "Invalid operation.";
  }

  output.textContent = result;
});
