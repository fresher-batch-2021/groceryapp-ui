function register()
{
    event.preventDefault();

    const username = document.querySelector("#username").value;
    const phoneno = document.querySelector("#phoneno").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    let registerobj = 
    {
        "username" : username,
        "phoneno" : phoneno,
        "email" : email,
        "password" : password
    };

    console.log(registerobj);
    alert("Registration Successfull");
    window.location.href = "login.html";
}