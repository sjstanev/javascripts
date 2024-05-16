function solve(array) {
    
    // • Sum(ai) - calculates the sum of all elements from the input array
    sumOfElem = array.reduce((acc, curn) => {
        return acc += curn
    }, 0) 
    console.log(sumOfElem);
    // • Sum(1/ai) - calculates the sum of the inverse values (1/ai) of all elements from the array
    inverseSumOfElem = array.reduce((acc, curn) => {
        return acc += 1/curn
    }, 0) 
    console.log(inverseSumOfElem);
    // • Concat(ai) - concatenates the string representations of all elements from the array
    let text = '';
    conCat = array.map(element => text += element.toString())
    console.log(text);
}

solve([1, 2, 3])
solve([2, 4, 8, 16])

