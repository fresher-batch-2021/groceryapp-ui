    function register()
    {
        event.preventDefault();

        const username = document.querySelector("#username").value;
        const phoneno = document.querySelector("#phoneno").value;
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        if(username === null || username === "" || username.trim === "" || username === undefined)
        {
            alert("Enter Username");
        }
        else if(phoneno === null || phoneno === "" || phoneno.trim === "" || phoneno === undefined)
        {
            alert("Enter Phone number");
        }
        else if(email === null || email === "" || email.trim === "" || email === undefined)
        {
            alert("Enter E-mail address");
        }
        else if(password =7== null || password === "" || password.trim === "" || password === undefined)
        {
            alert("Enter password");
        }
        else if(password.length >= 6 && password.length <= 8 )
        {
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
        else
        {
            alert("Password minimum length 6 to 8 digits");
        }
    }