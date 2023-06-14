document.addEventListener("DOMContentLoaded", function() {
    const bookSelect = document.getElementById("bookSelect");
    const damageFineInput = document.getElementById("damageFine");
    const confirmButton = document.getElementById("confirmButton");

    // Load books into the select dropdown
    fetch("http://localhost:8080/books")
        .then(response => response.json())
        .then(books => {
            books.forEach(book => {
                if (book.isRented) {
                    const option = document.createElement("option");
                    option.value = book.id;
                    option.textContent = book.name;
                    bookSelect.appendChild(option);
                }
            });
        })
        .catch(error => {
            console.error("Error fetching books:", error);
        });

    // Handle confirm button click event
    confirmButton.addEventListener("click", function() {
        const selectedBookId = bookSelect.value;
        const damageFine = parseFloat(damageFineInput.value) || 0;

        // Send return book request to the server
        fetch(`http://localhost:8080/loans/${selectedBookId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ damageFine })
        })
            .then(response => response.json())
            .then(data => {
                console.log("Book returned successfully:", data);
                // Handle success response, e.g., show a success message to the user
            })
            .catch(error => {
                console.error("Error returning book:", error);
                // Handle error response, e.g., show an error message to the user
            });
    });
});