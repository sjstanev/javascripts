function solved (number){

    let numberAsString = String(number)
    let isSame = true;
    let firstDigit = numberAsString[0];
    let sum = Number(firstDigit);

    for (i = 1; i < numberAsString.length; i++ ){
        if (numberAsString[i] == firstDigit ){
            sum += Number(numberAsString[i]);
        } else {
            sum += Number(numberAsString[i]);
            isSame=false;
        }
    }

    console.log(isSame)
    console.log(sum)
}

solved(2222222)
solved(1234)