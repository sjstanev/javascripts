function solved(fruit, weightInGrams, priceInKg){
    let money;
    let weight;

    weight = weightInGrams / 1000;
    money = weight * priceInKg;


    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}

solved('orange', 2500, 1.80)
solved('apple', 1563, 2.35)