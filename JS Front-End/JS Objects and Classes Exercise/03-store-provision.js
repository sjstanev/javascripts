function solve(arrayOne, arrayTwo){

    function createObj(array){
        store = {}
        for (let i = 0; i < array.length - 1; i++) {

            if (i % 2 == 0){
                store[array[i]] = array[i + 1]
            }
        }
        return store;
    }


    productOnStock = createObj(arrayOne);
    productOrdered = createObj(arrayTwo);


    Object.keys(productOrdered).forEach(element => {

        if (element in productOnStock){
            productOnStock[element] = Number(productOnStock[element]) + Number(productOrdered[element])
        }else {
            productOnStock[element] = productOrdered[element]
        }
    })

    for (const key in productOnStock) {
        console.log(`${key} -> ${productOnStock[key]}`);
    }

}

solve(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],[
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])

solve([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
    'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ])