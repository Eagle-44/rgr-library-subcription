document.addEventListener("DOMContentLoaded", function() {
    const bookSelect = document.getElementById("bookSelect");
    const damageFineInput = document.getElementById("damageFine");
    const confirmButton = document.getElementById("confirmButton");


    // Populate the book selection dropdown
    fetch("http://localhost:8080/loans")
        .then(response => response.json())
        .then(loans => {
            loans.forEach(loan => {
                const option = document.createElement("option");
                option.value = loan.id;
                option.textContent = `Issue Date: ${loan.issueDate}, Return Date: ${loan.returnDate}, User Deduction: ${loan.userBalanceDeduction}, User ID: ${loan.userId}, Book ID: ${loan.bookId}`;


                bookSelect.appendChild(option);
            });
        })
        .catch(error => {
            console.error("Error fetching books:", error);
        });

    confirmButton.addEventListener("click", function() {
        const selectedLoanId = bookSelect.value;
        const loanInfo = bookSelect.textContent;
        const damageFine = parseFloat(damageFineInput.value) || 0;
        const userId = parseInt(loanInfo.match(/User ID: (.+),/)[1]);
        const bookId = parseInt(loanInfo.match(/Book ID: (.+)/)[1]);
        const userBalanceDeduction = parseFloat(loanInfo.match(/User Deduction: (.+),/)[1])+damageFine;
        // Get the loan data
        const loanUpdateData = {
            userBalanceDeduction: userBalanceDeduction,
            userId: userId,
            bookId: bookId,
        };

        updateLoan(selectedLoanId, loanUpdateData);
    });

    function updateLoan(loanId, loanUpdateData) {
        fetch(`http://localhost:8080/loans/${loanId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loanUpdateData)
        })
            .then(response => {
                if (response.ok) {
                    console.log("Loan updated successfully");
                } else {
                    console.error("Error updating loan");
                }
            })
            .catch(error => {
                console.error("Error updating loan:", error);
            });
    }
});
