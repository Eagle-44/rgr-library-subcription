document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById("loginButton");
    const loginFormContainer = document.getElementById("loginFormContainer");
    const closeLoginForm = document.getElementById("closeLoginForm");
  
    loginButton.addEventListener("click", function() {
      loginFormContainer.style.display = "block";
    });
  
    closeLoginForm.addEventListener("click", function() {
      loginFormContainer.style.display = "none";
    });
  });
  