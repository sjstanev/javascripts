function solved(...numbers){

    let bigestNumber = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] > bigestNumber) {
            bigestNumber =numbers[i]
        }

    }

    console.log(`The largest number is ${bigestNumber}.`)
}

solved(5, -3, 16)
solved(-3, -5, -22.5)