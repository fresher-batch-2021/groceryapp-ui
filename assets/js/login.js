function login()
{
    event.preventDefault();

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    let rem = document.querySelector("#remember").checked;

    console.log("rem",rem);                  
    console.log(email);
    console.log(password);

    if(email === null || email === "" || email.trim === "" || email === undefined )
    {
        alert("Enter email address");
    }
    else if(password === null || password === "" || password.trim === "" || password === undefined)
    {
        alert("Enter password");
    }
    else if(password === "Pass@123" && email === "tamil@123")
    {
      window.location.href = "home.html";
      alert("Login Successfully");
      localStorage.setItem("emailaddress",email.toLowerCase());
      const logindata = 
    {
        "email" : email.toLowerCase(),
        "password" : password,
        "remember" : rem
    }
    console.log("login data", logindata);
    }
    else
    {
      alert("Invalid email or password");
    }    
}