function diffBetweenEvenAndOdd(arr){
    let evenSum = 0;
    let oddSum = 0;

    arr.forEach(element => {
        // if (element % 2 == 0){
        //     evenSum += element;
        // } else {
        //     oddSum += element;
        // }

        // USING ARROW FUNCTIONS
        (element % 2 == 0 )? 
        evenSum += element : 
        oddSum += element;
    });
    
    console.log(evenSum - oddSum)
}

diffBetweenEvenAndOdd([1,2,3,4,5,6])
diffBetweenEvenAndOdd([3,5,7,9])
diffBetweenEvenAndOdd([2,4,6,8,10])