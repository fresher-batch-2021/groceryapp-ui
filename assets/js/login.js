function login() {
  event.preventDefault();

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  let rem = document.querySelector("#remember").checked;

  console.log("rem", rem);
  console.log(email);
  console.log(password);

  if (email === null || email === "" || email.trim() === "" || email === undefined) {
    alert("Enter email address");
  }
  else if (password === null || password === "" || password.trim() === "" || password === undefined) {
    alert("Enter password");
  }
  else if (password.length <= 8 && password.length >= 6) {


    // console.log("login data", logindata);

    // const url = "https://product-mock-api.herokuapp.com/groceryapp/api/v1/auth/login";
    authService.userLogin(email, password).then( res => {
    // axios.post(url, logindata).then(res => {
      console.log("res", res);
      const userLogin = res.data.docs;
      console.log("userlogin", userLogin);

      if(userLogin.length == 1)
      {
      window.location.href = "home.html";
      alert("Login Successfully");
      localStorage.setItem("emailaddress", email.toLowerCase());
      }
      else
      {
        alert("Invalid Email or Password");
      }

    }).catch(err => {
      console.log("error", err);
      let errorMessage = err.response.data.errorMessage;
      alert("Invalid email or password");
    })
  }
  else {
    alert("Invalid email or password");
  }
}