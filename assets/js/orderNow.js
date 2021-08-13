$("#header").load("_header.html");
let emailadd = localStorage.getItem("emailaddress");
document.querySelector("#email").innerHTML = emailadd;

function tabledatas() {
    let addcart = JSON.parse(localStorage.getItem("CART_ITEMS")) || [];
    console.log("addcart", addcart);

    let tablearr = "";

    let i = 0;

    for (let addcartobj of addcart) {
        if (addcartobj.product != null && addcartobj.qty != null && addcartobj.price != null) {
            let deleteBtn = '';
            tablearr = tablearr + `<tr><td>${++i}</td><td>${addcartobj.product}</td><td><input min="1" id = "qty_${addcartobj.sno}" type="number" maxlength="5" onchange="addItemToCart('${addcartobj.sno}',${addcartobj.price})" value="${addcartobj.qty}"></td><td>${addcartobj.price}</td><td>${addcartobj.totalPrice}</td><td><a href="#" onclick="removeItem('${addcartobj.product}')">Delete</a><td></tr>`;
        }
    }

    document.querySelector("#table").innerHTML = tablearr;
}
tabledatas();


function addItemToCart(sno, price) {
    let qty = parseInt(document.querySelector("#qty_" + sno).value);
    console.log("Entered qty:" + qty);
    if (qty > 0) {
        cartObj.addItem(sno, price, qty);
        tabledatas();
    }
    else {
        alert("Invalid Qty");
    }
}

function removeItem(product)
{
    cartObj.removeItem(product);
    document.location.reload();            
}

function emptyCart()
{
    cartObj.emptyCart();
}

function confirmOrder()
{
    
    if (emailadd === "" || emailadd === null || emailadd === undefined) {
                alert("Please Register or Login");
                window.location.href = "register.html";
            }
            else {
                alert("Ordered Successfully");
                document.location.reload();
                window.localStorage.clear();
            }

    let items = JSON.parse(localStorage.getItem("CART_ITEMS")) || [];

    let confirmOrderObj = {
       itemList : items,
       orderedDate: new Date().toJSON()
    }
    console.log("confirm", confirmOrderObj);
}