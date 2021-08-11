$("#header").load("_header.html");
$("#footer").load("_footer.html");

// var productlist = [];
// function getProducts() {
//     const url = "assets/js/products.json";
//     axios.get(url).then((res) => {
//         // console.log("res", res.data);
//         productlist = res.data;
//         let productkeys = Object.keys(productlist);
//         // console.log("keys", productkeys);

//         let content = "";
//         for (let category of productkeys) {
//             let productsDetails = productlist[category];
//             // console.table("details", productsDetails);


//             content = content + `
//             <hr/>

//             <h3 class="text-center">${category}</h3>
//             <div class="row">`;

//             for (let products of productsDetails) {
//                 // console.log("pro", products);


//                 content = content + `


//                 <div class="col-lg-2">
//                     <img class="im" src="assets/images/${products.imgUrl}" alt="Apple" width="150px" height="150px">
//                     <br>
//                     <h6>${products.productName}</h6>
//                     <p>${products.unit} ${products.type} -
//                         <i class="fas fa-rupee-sign" aria-hidden="true"></i> ${products.price}
//                         </p>
//                     <a class="add" onclick="addToCart('${products.productName}', ${products.price})" >Add</a>
//                 </div>`;






//             }
//             content = content + `</div>`;
//             document.querySelector("#produdtsArray").innerHTML = content;

//         }

//     })
// }
// getProducts();

function addToCart(productName, price, qty = 1) {
    alert("product added");
    //alert(productName + "-" + price);
    let totalPrice = qty * price;
    let itemObj = { product: productName, qty: qty, price: price, totalPrice: totalPrice };
    console.log(itemObj);
    const cartItems = JSON.parse(localStorage.getItem("CART_ITEMS")) || [];
    console.log(cartItems);
    cartItems.push(itemObj);
    localStorage.setItem("CART_ITEMS", JSON.stringify(cartItems));
    //  window.location.href="ordernow.html";
}

function loadProducts() {
    const loadProductsUrl = "https://product-mock-api.herokuapp.com/groceryapp/api/v1/products";

    axios.get(loadProductsUrl).then((result) => {
        // console.log("result", result.data);

        let products = result.data;
        // console.log(products);

        let categories = _.groupBy(products, 'category');
        console.log(categories);

        let content = "";

        let category = Object.keys(categories);
        console.log("cate", category);



        for (let cate of category) {
            const items = categories[cate];
            console.log("items", items);

            content = content + `
                <hr/>
                
                <h3 class="text-center">${cate}</h3>

                <div class="row">`;

            for (let item of items) {
                content = content + `
            
            
                    <div class="col-lg-2">
                        <img class="im" src="assets/images/${item.imageUrl}" alt="Apple" width="150px" height="150px">
                        <br>
                        <h6>${item.productName}</h6>
                        <p>${item.unit} ${item.type} -
                            <i class="fas fa-rupee-sign" aria-hidden="true"></i> ${item.price}
                            </p>
                        <a class="add" onclick="addToCart('${item.productName}', ${item.price})" >Add</a>
                    </div>`;
            }

            content = content + `</div>`;
            document.querySelector("#produdtsArray").innerHTML = content;

        }

    }).catch(err => {
        console.log("error", err);
    })
}
loadProducts();