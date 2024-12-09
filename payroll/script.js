function calculatePayroll() {
  // Retrieve input values
  const hoursWorked = parseFloat(document.getElementById('hoursWorked').value);
  const hourlyRate = parseFloat(document.getElementById('hourlyRate').value);
  const deductions = parseFloat(document.getElementById('deductions').value);

  // Validate inputs
  if (isNaN(hoursWorked) || isNaN(hourlyRate) || isNaN(deductions) || hoursWorked < 0 || hourlyRate < 0 || deductions < 0) {
    alert('Please enter valid non-negative numbers for all fields.');
    return;
  }

  // Calculate payroll
  const grossPay = hoursWorked * hourlyRate;
  const netPay = grossPay - deductions;

  // Display results
  document.getElementById('grossPay').innerHTML = `<strong>Gross Pay:</strong> PHP ${grossPay.toFixed(2)}`;
  document.getElementById('totalDeductions').innerHTML = `<strong>Total Deductions:</strong> PHP ${deductions.toFixed(2)}`;
  document.getElementById('netPay').innerHTML = `<strong>Net Pay:</strong> PHP ${netPay.toFixed(2)}`;

  // Show results box
  document.getElementById('results').style.display = 'block';
}
