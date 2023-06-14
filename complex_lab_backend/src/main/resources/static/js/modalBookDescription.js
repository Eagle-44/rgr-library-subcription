document.addEventListener("DOMContentLoaded", function() {
  const bookDescriptionModal = document.getElementById("bookDescriptionModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalContent = document.getElementById("modalContent");

  // Event listener for book description buttons
  document.addEventListener("click", function(event) {
    if (event.target.classList.contains("bookDescriptionButton")) {
      const bookId = event.target.dataset.id;
      fetch(`http://localhost:8080/books/${bookId}`)
          .then(response => response.json())
          .then(data => {
            renderBookDescriptionModal(data);
          })
          .catch(error => {
            console.error("Error fetching book description:", error);
          });
    }
  });

  // Function to open the book description modal
  function openBookDescriptionModal() {
    bookDescriptionModal.style.display = "block";
  }

  // Function to close the book description modal
  function closeBookDescriptionModal() {
    bookDescriptionModal.style.display = "none";
  }

  // Function to render the book description modal
  function renderBookDescriptionModal(book) {
    modalTitle.textContent = book.name;
    modalContent.innerHTML = `
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Pages:</strong> ${book.pages}</p>
      <p><strong>Genre:</strong> ${book.genre}</p>
      <p><strong>Pledge Cost:</strong> ${book.pledgeCost} Uah</p>
      <p><strong>Rental Default Cost:</strong> ${book.rentalDefaultCost} Uah</p>
      <p><strong>Rental Extra Day Price:</strong> ${book.rentalExtraDayPrice} Uah</p>
      <p><strong>In Service Since:</strong> ${book.inServiceSince}</p>
      <p><strong>Is Rented:</strong> ${book.isRented}</p>
      <p><strong>Return Date:</strong> ${book.returnDate}</p>
    `;

    openBookDescriptionModal();
  }

  // Event listener for closing the book description modal
  document.addEventListener("click", function(event) {
    if (event.target.classList.contains("close")) {
      closeBookDescriptionModal();
    }
  });
});
