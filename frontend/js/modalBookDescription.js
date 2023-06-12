const bookDescriptionData = {
    1: {
      title: "Book 1",
      author: "Author 1",
      pages: 200,
      genre: "Genre 1",
      pledgeCost: 10.0,
      rentalDefaultCost: 5.0,
      rentalExtraDayPrice: 1.0,
      inServiceSince: "2021-01-01",
      isRented: false,
      returnDate: null,
    },
    2: {
      title: "Book 2",
      author: "Author 2",
      pages: 300,
      genre: "Genre 2",
      pledgeCost: 15.0,
      rentalDefaultCost: 6.0,
      rentalExtraDayPrice: 1.5,
      inServiceSince: "2021-02-01",
      isRented: true,
      returnDate: "2021-06-01",
    },
  };
  
  document.addEventListener("DOMContentLoaded", function() {
    const bookTable = document.getElementById("bookTable");
  
    // Event listener for book description buttons
    bookTable.addEventListener("click", function(event) {
      if (event.target.classList.contains("bookDescriptionButton")) {
        const bookId = event.target.dataset.id;
        openBookDescriptionModal(bookId);
      }
    });
  });
  
  function openBookDescriptionModal(bookId) {
    const bookDescription = bookDescriptionData[bookId];
  
    /*
    fetch(`/api/book/${bookId}`)
      .then(response => response.json())
      .then(data => {
        const bookDescription = data;
        populateBookDescriptionModal(bookDescription);
      })
      .catch(error => {
        console.error("Error fetching book description:", error);
      });
    */
  
    // Simulated fetch data from JSON object
    populateBookDescriptionModal(bookDescription);
  
    // Open the modal window
    const modal = document.getElementById("bookDescriptionModal");
    modal.style.display = "block";
  }
  
  function closeBookDescriptionModal() {
    // Close the modal window
    const modal = document.getElementById("bookDescriptionModal");
    modal.style.display = "none";
  }
  
  function populateBookDescriptionModal(bookDescription) {
    // Populate the book description modal with the retrieved data
    const modalTitle = document.getElementById("modalTitle");
    const modalContent = document.getElementById("modalContent");
  
    modalTitle.textContent = bookDescription.title;
    modalContent.innerHTML = `
      <p><strong>Author:</strong> ${bookDescription.author}</p>
      <p><strong>Pages:</strong> ${bookDescription.pages}</p>
      <p><strong>Genre:</strong> ${bookDescription.genre}</p>
      <p><strong>Pledge Cost:</strong> ${bookDescription.pledgeCost}</p>
      <p><strong>Rental Default Cost:</strong> ${bookDescription.rentalDefaultCost}</p>
      <p><strong>Rental Extra Day Price:</strong> ${bookDescription.rentalExtraDayPrice}</p>
      <p><strong>In Service Since:</strong> ${bookDescription.inServiceSince}</p>
      <p><strong>Is Rented:</strong> ${bookDescription.isRented}</p>
      <p><strong>Return Date:</strong> ${bookDescription.returnDate}</p>
    `;
  }