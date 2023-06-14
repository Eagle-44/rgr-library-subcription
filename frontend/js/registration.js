document.addEventListener("DOMContentLoaded", function() {
  const registrationButton = document.getElementById("registrationButton");
  const registrationFormContainer = document.getElementById("registrationFormContainer");
  const cancelButton = document.getElementById("cancelButton");

  registrationButton.addEventListener("click", function() {
    registrationFormContainer.style.display = "block";
  });

  cancelButton.addEventListener("click", function() {
    registrationFormContainer.style.display = "none";
  });
});
