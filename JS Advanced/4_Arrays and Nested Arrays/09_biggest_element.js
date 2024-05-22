function biggestElement(matrix){
    let biggestElement = Number.MIN_VALUE;

    for(let i = 0; i < matrix.length; i++){
        for (let j = 0; j < matrix[i].length; j++) {
            if(matrix[i][j] > biggestElement){
                biggestElement = matrix[i][j];
            }     
        }
    }
    return biggestElement;
}

// console.log(biggestElement([[3, 5, 7, 12],
//     [-1, 4, 33, 2],
//     [8, 3, 0, 4]]));
console.log(biggestElement([[0]]));