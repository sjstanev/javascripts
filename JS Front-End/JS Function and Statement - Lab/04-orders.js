function orders(product, quantity){

    function totalPrice (price, quantity){
        return price * quantity
    }

    function formattedPrice (totalPrice) {
        return totalPrice.toFixed(2);
    }

    price = ""
    switch (product) {
        case "water":
            price = 1.00
            break;
        case "coffee":
            price = 1.50
            break;
        case "coke":
            price = 1.40
            break;
        case "snacks":
            price = 2.00
            break;
    }
    totalPrice = totalPrice(price,quantity)
    console.log(formattedPrice(totalPrice));
}

orders("water", 5)
orders("coffee", 2)