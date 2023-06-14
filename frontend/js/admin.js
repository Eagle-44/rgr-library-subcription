document.addEventListener("DOMContentLoaded", function() {
    const addBookButton = document.getElementById("addBookButton");
    const deleteBookButton = document.getElementById("deleteBookButton");
    const monthlyReportButton = document.getElementById("monthlyReportButton");
    const returnBookButton = document.getElementById("returnBookButton");
    const catalogSelect = document.getElementById("catalogSelect");
    const catalogTable = document.getElementById("catalogTable");
  
    // Add book button click event handler
    addBookButton.addEventListener("click", function() {
      // Logic for adding a book
    });
  
    // Delete book button click event handler
    deleteBookButton.addEventListener("click", function() {
      // Logic for deleting a book
    });
  
    // Monthly report button click event handler
    monthlyReportButton.addEventListener("click", function() {
      
      // Redirect to the monthly report page
      window.location.href = "monthly_report.html";
    });

    
    returnBookButton.addEventListener("click", function() {
      
      // Redirect to the return book page
      window.location.href = "return_book_page.html";
    });
  
    // Catalog select change event handler
    catalogSelect.addEventListener("change", function() {
      const selectedOption = catalogSelect.value;
  
      // Logic for updating the table based on selected option
      if (selectedOption === "users") {
        // Display table with list of users
        catalogTable.innerHTML = "<thead><tr><th>User ID</th><th>Name</th></tr></thead><tbody><tr><td>1</td><td>John Doe</td></tr><tr><td>2</td><td>Jane Smith</td></tr></tbody>";
      } else if (selectedOption === "rentedBooks") {
        // Display table with users who have rented books
        catalogTable.innerHTML = "<thead><tr><th>User ID</th><th>Name</th><th>Rented Books</th></tr></thead><tbody><tr><td>1</td><td>John Doe</td><td>Book 1, Book 2</td></tr><tr><td>2</td><td>Jane Smith</td><td>Book 3</td></tr></tbody>";
      } else if (selectedOption === "overdueBooks") {
        // Display table with users who have overdue books
        catalogTable.innerHTML = "<thead><tr><th>User ID</th><th>Name</th><th>Overdue Books</th></tr></thead><tbody><tr><td>1</td><td>John Doe</td><td>Book 1</td></tr><tr><td>2</td><td>Jane Smith</td><td>Book 3</td></tr></tbody>";
      }
    });

  });
  