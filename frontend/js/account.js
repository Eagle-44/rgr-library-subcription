// Get elements
const depositButton = document.getElementById('depositButton');
const depositWindow = document.getElementById('depositWindow');
const depositForm = document.getElementById('depositForm');

// Add event listener to the deposit button
depositButton.addEventListener('click', () => {
  depositWindow.style.display = 'block';
});

// Add event listener to the deposit form
depositForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const amount = parseFloat(depositForm.querySelector('input').value);
  if (isNaN(amount) || amount <= 0) {
    alert('Please enter a valid amount.');
    return;
  }
  
  // Perform deposit operation using your backend logic here
  // For example, you can make an AJAX request to the server to update the account balance

  // Clear the input field and hide the deposit window
  depositForm.reset();
  depositWindow.style.display = 'none';
});
