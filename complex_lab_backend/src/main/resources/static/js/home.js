document.addEventListener("DOMContentLoaded", function() {

    const loginButton = document.getElementById("loginButton");
    const loginFormContainer = document.getElementById("loginFormContainer");
    const closeLoginForm = document.getElementById("closeLoginForm");
    const loginSubmitButton = document.getElementById("loginSubmitButton");
    const registrationButton = document.getElementById("registrationButton");
    const userPageButton = document.getElementById("userPageButton");
    const adminPageButton = document.getElementById("adminPageButton");
    const logOutButton = document.getElementById("logOutButton");

    if (localStorage.getItem('user')) {
        loginButton.style.display = 'none';
        registrationButton.style.display = 'none';
        userPageButton.style.display = 'inline';
        adminPageButton.style.display = 'inline';
        logOutButton.style.display = 'inline';
    }else {
        loginButton.style.display = 'inline';
        registrationButton.style.display = 'inline';
        userPageButton.style.display = 'none';
        adminPageButton.style.display = 'none';
        logOutButton.style.display = 'none';
    }

    loginSubmitButton.addEventListener("click", function(event) {
        event.preventDefault();

        loginFormContainer.style.display = "block";

        const userEmail = document.getElementById("userLoginEmail").value;
        const userPass = document.getElementById("userLoginPass").value;
        const requestData = {
            email: userEmail,
            password: userPass
        };

        fetch('http://localhost:8080/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        })
            .then(response => response.json())
            .then(data => {
                // Handle the response data
                console.log(data);
                localStorage.setItem('user', JSON.stringify(data));
            })
            .catch(error => {
                // Handle any errors
                console.error(error);
            });
    });

    loginButton.addEventListener("click", function() {
      loginFormContainer.style.display = "block";


    });
  
    closeLoginForm.addEventListener("click", function() {
      loginFormContainer.style.display = "none";
    });

    logOutButton.addEventListener("click", function() {
        localStorage.removeItem('user');
        location.reload();
    });
  });

  