function sum(arrays){

    let mainDiagonal = 0;
    let secondDiagonal = 0;

    for(let i = 0; i < arrays.length; i++){

        mainDiagonal += arrays[i][i];
        secondDiagonal += arrays[arrays.length - 1 - i][i];
    }
    console.log(mainDiagonal, secondDiagonal);
}

sum([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]
   )

   /*
    0 2 (0, 0)
    1 1  (1, 1) => 1 2
    2 0  (2,0) => 2, 0

   */