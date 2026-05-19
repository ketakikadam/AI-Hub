const signupForm =
document.getElementById("signupForm");

signupForm.addEventListener("submit", function(e) {

    e.preventDefault();

    const name =
    document.getElementById("name").value;

    const email =
    document.getElementById("email").value;

    const password =
    document.getElementById("password").value;


    if(name && email && password) {

        alert("Signup Successful!");

        window.location.href = "login.html";
    }
    else {

        alert("Please fill all fields");
    }
});