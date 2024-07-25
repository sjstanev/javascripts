function signCheck( a, b, c){

    let negativCounter = 0; 
    let countNegativeNumbers = (x) => {if (x < 0) {negativCounter++}}; 

    array = [a, b, c]
    for (const x of array) {
        countNegativeNumbers(x)
    }

    if (negativCounter % 2 == 0){
        console.log("Positive");
    } else {
        console.log("Negative");
    }

}

signCheck( 5,
    12,
   -15)
signCheck(-6,
    -12,
     14)
signCheck(-1,
    -2,
    -3)