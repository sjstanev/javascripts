function addAndSubstract(a, b, c){

    //arrow function to sum first two elements
    let sum = (num1, num2) => num1 + num2;

    // substract sumOfFirstTwoElements and third numbers
    let substract = (sumOfNumbers, y) => sumOfNumbers - y;

    console.log(substract(sum(a, b), c));

}

addAndSubstract(23,
    6,
    10)
addAndSubstract(1,
    17,
    30)
addAndSubstract(42,
    58,
    100)