function solve(array){

    sortedArray = [];
    
    for (element of array){

        if (element < 0) {
            sortedArray.unshift(element);
        } else{
            sortedArray.push(element);
        }
    }
    console.log(sortedArray.join('\n'));
}

solve([7, -2, 8, 9])