class CartService
{   

    getItems(){
        let itemsStr = localStorage.getItem("CART_ITEMS");
        let items = itemsStr !=null ?JSON.parse(itemsStr):[];
        return items;
    }

    removeItem(productName){
        let cartItems = this.getItems();
        let index = cartItems.findIndex(obj => obj.product == productName);
        console.log(index);
        if (index != -1){
            cartItems.splice(index,1);

        }
        localStorage.setItem("CART_ITEMS", JSON.stringify(cartItems));
    }

    addItem(productName, price, qty=1){
        console.log("Adding item :" + productName);
        let cartItems = this.getItems();
        let index = cartItems.findIndex(obj => obj.product == productName);
        console.log(index);
        let productObj ;

        // adding existing item in cart
        if (index != -1){
            productObj = cartItems[index];
            productObj.qty=parseInt(qty);    
            productObj.totalPrice = productObj.price * productObj.qty;
            cartItems[index] = productObj;        

        }
        else{
            //new product item added to cart
            let qty = 1;
            let totalPrice = qty * price;
            productObj = {product: productName, qty: qty, price: price, totalPrice : totalPrice};
            cartItems.push(productObj);
        }
        
        localStorage.setItem("CART_ITEMS", JSON.stringify(cartItems));
        tabledatas();

    }

    emptyCart(){
        localStorage.removeItem("CART_ITEMS");
    }

    getTotalAmount(){
        let totalAmount = 0;
        let items = this.getItems();
        for(let item of items){
            totalAmount +=  item.qty* item.price;
        }
        return totalAmount;
    }
    
    static addQty(productName, productQty, productPrice)
    {
       
    }


}

cartObj = new CartService();
