$("#header").load("_header.html");
$("#footer").load("_footer.html");

function addToCart(productName, price, qty = 1) {
    alert("product added");
    let totalPrice = qty * price;
    let itemObj = { product: productName, qty: qty, price: price, totalPrice: totalPrice };
    console.log(itemObj);
    const cartItems = JSON.parse(localStorage.getItem("CART_ITEMS")) || [];
    console.log(cartItems);
    cartItems.push(itemObj);
    localStorage.setItem("CART_ITEMS", JSON.stringify(cartItems));
}

function loadProducts() {
    const loadProductsUrl = "https://product-mock-api.herokuapp.com/groceryapp/api/v1/products";

    axios.get(loadProductsUrl).then((result) => {

        let products = result.data;

        let categories = _.groupBy(products, 'category');

        let content = "";

        let category = Object.keys(categories);

        for (let cate of category) {
            const items = categories[cate];

            content = content + `
                <hr/>
                
                <h3 class="text-center">${cate}</h3>

                <div class="row">`;

            for (let item of items) {
                content = content + `
            
            
                    <div class="col-lg-2 col-xl-2 col-md-4 col-sm-6">
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