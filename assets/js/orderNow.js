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





window.location.search;
window.location.search.substr(1);
const params = new URLSearchParams(window.location.search.substr(1));
let addpro = params.get("productName");
let addQty = params.get("Kg") || params.get("Ltr");
let addPrice = params.get("price");
console.log(addpro);
console.log(addQty)
console.log(addPrice);

let addtablearray =  { product: addpro, qty: addQty, price: addPrice};
console.log(addtablearray);
const cartItems = JSON.parse(localStorage.getItem("CART_ITEMS")) || [];
cartItems.push(addtablearray);
localStorage.setItem("CART_ITEMS", JSON.stringify(cartItems));
tabledatas();


function confirmOrder()
{
 if(emailadd === "" || emailadd === null || emailadd === undefined)
 {
    alert("Please Register or Login");
 }   
 else
 {
    alert("Ordered Successfully");
    window.localStorage.clear(true);
 }
}