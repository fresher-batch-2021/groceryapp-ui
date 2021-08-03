    function register()
    {
        event.preventDefault();

        const username = document.querySelector("#username").value;
        const phoneno = document.querySelector("#phoneno").value;
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        if(username == null || username == "" || username.trim == "" || username == undefined)
        {
            alert("Invalid Username");
        }
        if(phoneno == null || phoneno == "" || phoneno.trim == "" || phoneno == undefined)
        {
            alert("Invalid Phone number");
        }
        if(email == null || email == "" || email.trim == "" || email == undefined)
        {
            alert("Invalid E-mail address");
        }
        if(password == null || password == "" || password.trim == "" || password == undefined)
        {
            alert("Invalid password");
        }
        if(password.length >= 6 || password.length <= 8)
        {
            alert("Password minimum 6 to 8 digits");
        }

        let registerobj = 
        {
            "username" : username,
            "phoneno" : phoneno,
            "email" : email.toLowerCase(),
            "password" : password
        };

        console.log(registerobj);
        alert("Registration Successfull");
        window.location.href = "login.html";
    }