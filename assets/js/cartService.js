class CartService {

    getItems() {
        let itemsStr = localStorage.getItem("CART_ITEMS");
        let items = itemsStr != null ? JSON.parse(itemsStr) : [];
        return items;
    }

    removeItem(productName) {
        let cartItems = this.getItems();
        let index = cartItems.findIndex(obj => obj.product == productName);
        console.log(index);
        if (index != -1) {
            cartItems.splice(index, 1);

        }
        localStorage.setItem("CART_ITEMS", JSON.stringify(cartItems));
    }

    addItem(sno, price, qty = 1) {
        console.log("Adding item :" + sno);
        let cartItems = this.getItems();
        let index = cartItems.findIndex(obj => obj.sno == sno);
        console.log(index);
        let productObj;

        // adding existing item in cart
        if (index != -1) {
            productObj = cartItems[index];
            productObj.qty = parseInt(qty);
            productObj.totalPrice = productObj.price * productObj.qty;
            cartItems[index] = productObj;

        }
        else {
            //new product item added to cart
            let qty = 1;
            let totalPrice = qty * price;
            productObj = { productPrice : productPrice, productName : productName, productQty : productQty, productPrice : productPrice, totalPrice : totalPrice };
            cartItems.push(productObj);
        }

        localStorage.setItem("CART_ITEMS", JSON.stringify(cartItems));
        tabledatas();

    }

    emptyCart() {
        localStorage.removeItem("CART_ITEMS");
        document.location.reload();
    }

    getTotalAmount() {
        let totalAmount = 0;
        let items = this.getItems();
        for (let item of items) {
            totalAmount += item.qty * item.price;
        }
        return totalAmount;
    }

    static addQty(productName, productQty, productPrice) {
    }
}


cartObj = new CartService();
