$("#header").load("_header.html");
$("#footer").load("_footer.html");

let emailadd = localStorage.getItem("emailaddress");
document.querySelector("#email").innerHTML = emailadd;

function tabledatas()
{
    let addcart = JSON.parse(localStorage.getItem("CART_ITEMS"))  || [];

let tablearr = "";

let i=0;

for(let addcartobj of addcart)
{
    tablearr =tablearr +  "<tr><td>"+ (++i) +"</td><td>"+addcartobj.product +"</td><td>"+ addcartobj.qty +"</td><td>"+ addcartobj.price +"</td></tr>";
}

document.querySelector("#table").innerHTML = tablearr;

console.table(tablearr);
}




console.log("url", window.location.search);

const params = new URLSearchParams(window.location.search.substr(1));
let addpro = params.get("productName");
let addQty = params.get("Kg") || params.get("Ltr");
let addPrice = params.get("price");
console.log(addpro);
console.log(addQty)
console.log(addPrice);

if(addpro != null && addQty != null && addPrice != null)
{
    let addtablearray =  { product: addpro, qty: addQty, price: addPrice};
    console.log(addtablearray);
    cartItems.push(addtablearray);
    const cartItems = JSON.parse(localStorage.getItem("CART_ITEMS")) || [];
    localStorage.setItem("CART_ITEMS", JSON.stringify(cartItems));
    tabledatas();
    alert("if");
}
else
{
    alert("else");
}



function confirmOrder()
{
 if(emailadd === "" || emailadd === null || emailadd === undefined)
 {
    alert("Please Register or Login");
    window.location.href = "register.html";
 }   
 else
 {
    alert("Ordered Successfully");
    window.localStorage.clear(true);
 }
}