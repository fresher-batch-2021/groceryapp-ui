const dbUsername = "apikey-v2-1xzbb618xtgfg14nm7uasm9coajsc9dzzpg8p57atbtg";
const dbPassword = "f56766c5716a7b37a531aaa7bdb53315";
const basicAuth = "Basic " + btoa(dbUsername + ":" + dbPassword);

const url = "https://8ca8138b-1aac-430a-8325-3a686242a515-bluemix.cloudantnosqldb.appdomain.cloud/grocerystoreapp_users";


class authService{


     static userLogin(email, password)
     {
        const logindata =
        {
            selector: {
                email: email.toLowerCase(),
                password: password,
              },
              fields: ["_id", "_rev","email"]        
        }

            return axios.post(url+"/_find",logindata ,{ headers: { Authorization: basicAuth } })
     }
}