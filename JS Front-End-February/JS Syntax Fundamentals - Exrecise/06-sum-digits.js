function solved(number){
    let sum = 0;
    numberAsString = number.toString();

    for (let i = 0; i < numberAsString.length; i++) {
       
        sum += Number(numberAsString[i])

    }
    console.log(sum)
}

solved(245678)
solved(97561)
solved(543)