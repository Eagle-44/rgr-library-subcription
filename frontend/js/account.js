


// Account page for refactoring (For Musya)
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



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
  
  
  // Clear the input field and hide the deposit window
  depositForm.reset();
  depositWindow.style.display = 'none';
});
