document.addEventListener("DOMContentLoaded", function() {
    const registrationButton = document.getElementById("registrationButton");
    const registrationForm = document.getElementById("userRegistrationForm");
    const cancelButton = document.getElementById("cancelButton");
  
    registrationButton.addEventListener("click", function() {
      registrationButton.style.display = "none";
      registrationForm.classList.remove("hidden");
    });
  
    cancelButton.addEventListener("click", function() {
      registrationForm.reset();
      registrationForm.classList.add("hidden");
      registrationButton.style.display = "block";
    });
  
    registrationForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      // Reset the form and hide it
      registrationForm.reset();
      registrationForm.classList.add("hidden");
      registrationButton.style.display = "block";
    });
  });