document.addEventListener("DOMContentLoaded", function() {
    const bookSelect = document.getElementById("bookSelect");
    const rentalCost = document.getElementById("rentalCost");
    const damageFine = document.getElementById("damageFine");
    const totalCost = document.getElementById("totalCost");
    const confirmButton = document.getElementById("confirmButton");
  
    // Fetch the book data from the backend and populate the book select dropdown
    fetch("my-backend-api-endpoint")
      .then(response => response.json())
      .then(data => {
        // Populate the book select dropdown with book options
        data.forEach(book => {
          const option = document.createElement("option");
          option.value = book.id;
          option.textContent = book.title;
          bookSelect.appendChild(option);
        });
      })
      .catch(error => {
        console.error("Error fetching book data:", error);
      });
  
    // Calculate the total cost when the rental cost or damage fine value changes
    function calculateTotalCost() {
      const selectedBookId = bookSelect.value;
      const selectedRentalCost = parseFloat(rentalCost.textContent);
      const selectedDamageFine = parseFloat(damageFine.value);
  
      // Call the backend endpoint to calculate the total cost
      fetch(`my-backend-api-endpoint?bookId=${selectedBookId}&rentalCost=${selectedRentalCost}&damageFine=${selectedDamageFine}`)
        .then(response => response.json())
        .then(data => {
          totalCost.textContent = data.totalCost;
        })
        .catch(error => {
          console.error("Error calculating total cost:", error);
        });
    }
  
    // Event listeners for value changes
    bookSelect.addEventListener("change", calculateTotalCost);
    damageFine.addEventListener("input", calculateTotalCost);
  
    // Event listener for the confirm button click
    confirmButton.addEventListener("click", function() {
      const selectedBookId = bookSelect.value;
      const selectedDamageFine = parseFloat(damageFine.value);
      const selectedTotalCost = parseFloat(totalCost.textContent);
  
      // Call the backend endpoint to process the return and handle the payment
      // Replace the URL with your actual backend endpoint
      fetch("my-backend-api-endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          bookId: selectedBookId,
          damageFine: selectedDamageFine,
          totalCost: selectedTotalCost
        })
      })
        .then(response => response.json())
        .then(data => {
          // Handle the response from the backend
          console.log("Return processed:", data);
        })
        .catch(error => {
          console.error("Error processing return:", error);
        });
    });
  });
  