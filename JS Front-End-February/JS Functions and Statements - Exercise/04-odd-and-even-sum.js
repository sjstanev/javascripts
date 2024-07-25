function solved(num){
    let strArray = String(num).split('');
    numArray = strArray.map(x => Number(x))

    // the same result in one row
    // const numArray = num
        // .toString()
        // .split('')
        // .map(digit => Number(digit)); // also can be : .map(Number)


    let sumEven = 0;
    let sumOdd = 0;

    function sum(x){
        return (x % 2 == 0) ? sumEven += x : sumOdd += x;
    } 

    // iterate over array, calling func sum and find sumOdd or sumEven
    for (let i of numArray) { 
            sum(i)        
    }
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`)
}

solved(1000435)
solved(3495892137259234)