// $("#demo").carousel({ interval: 1500 });
// $("#demo").carousel("cycle");

$("#header").load("_header.html");
$("#footer").load("_footer.html");

var productlist = [];
function getProducts()
{
    const url = "assets/js/products.json";
    axios.get(url).then((res) => {
        // console.log("res", res.data);
        productlist = res.data;
        let productkeys = Object.keys(productlist);
        // console.log("keys", productkeys);

        let content = "";
        for(let category of productkeys)
        {
            let productsDetails = productlist[category];
            // console.table("details", productsDetails);
            
            
            content = content + `
            <hr/>
            
            <h3 class="text-center">${category}</h3>
            <div class="row">`;

            for(let products of productsDetails)
            {
                // console.log("pro", products);

           
                content = content + `
            
            
                <div class="col-lg-2">
                    <img class="im" src="assets/images/${products.imgUrl}" alt="Apple" width="150px" height="150px">
                    <br>
                    <h6>${products.productName}</h6>
                    <p>${products.unit} ${products.type} -
                        <i class="fas fa-rupee-sign" aria-hidden="true"></i> ${products.price}
                        </p>
                    <a class="add" onclick="addToCart('${products.productName}', ${products.price})" >Add</a>
                </div>`;
            
            


            
            
            }
            content = content + `</div>`;
            document.querySelector("#produdtsArray").innerHTML = content;
            
        }
       
    })
}
getProducts();

function addToCart(productName, price){
    //alert(productName + "-" + price);
    let itemObj =  { product: productName, qty: 1, price: price};
        console.log(itemObj);
        const cartItems = JSON.parse(localStorage.getItem("CART_ITEMS")) || [];
        console.log(cartItems);
        cartItems.push(itemObj);
        localStorage.setItem("CART_ITEMS", JSON.stringify(cartItems));
  //  window.location.href="ordernow.html";
}


