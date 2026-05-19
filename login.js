const loginForm =
document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e) {

    e.preventDefault();

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;


    if(email && password) {

        alert("Login Successful!");

        window.location.href = "home.html";
    }
    else {

        alert("Please fill all fields");
    }
});