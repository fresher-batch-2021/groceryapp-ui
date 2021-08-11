function register() {
    event.preventDefault();
    const username = document.querySelector("#username").value;
    const phoneno = document.querySelector("#phoneno").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    if (username === null || username === "" || username.trim()() === "" || username === undefined) {
        alert("Enter Username");
    }
    else if (phoneno === null || phoneno === "" || phoneno.trim() === "" || phoneno === undefined) {
        alert("Enter Phone number");
    }
    else if (email === null || email === "" || email.trim() === "" || email === undefined) {
        alert("Enter E-mail address");
    }
    else if (password === null || password === "" || password.trim() === "" || password === undefined) {
        alert("Enter password");
    }
    else if (!(password.length >= 6 && password.length <= 8)) {
        alert("Password minimum length 6 to 8 digits");
    }
    else {



        alert("Valid details");
        let registerobj =
        {
            "name": username,
            "phoneno": phoneno,
            "email": email.toLowerCase(),
            "password": password
        };

        let url = "https://product-mock-api.herokuapp.com/groceryapp/api/v1/auth/register";
        axios.post(url, registerobj).then(res => {
            console.log("res", res);
            const userRegister = res;
            console.log("userRegister", userRegister);

            console.log(registerobj);
            alert("Registration Successfull");
            window.location.href = "login.html";
        }).catch(err => {
            console.log("error", err);
            alert("Unable to register");
        })

    }
}