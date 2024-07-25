function createMatrix(n){



    for (let i = 0; i < n; i++) {
        let row = "";

        for(let j = 0; j < n; j++){
            row += n + " "
        }
        console.log(row)    
    }

}

createMatrix(3)
createMatrix(7)
createMatrix(2)