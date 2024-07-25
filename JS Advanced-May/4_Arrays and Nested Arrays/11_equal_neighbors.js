function equalNeighbors(arrays) {

    let matches = 0;

    for (let row = 0; row < arrays.length - 1; row++) {

        for (let col = 0; col < arrays[row].length; col++) {

            let currentElement = arrays[row][col];
            if (currentElement == arrays[row + 1][col]) {
                matches++;
            }

            if (currentElement == arrays[row][col + 1]) {
                matches++;
            }
        }
    }

    const row = arrays.length - 1

    for (let col = 0; col < arrays[row].length; col++) {

        let currentElement = arrays[row][col];

        if (currentElement == arrays[row][col + 1]) {
            matches++;
        }
    }
    

    return matches
}

// equalNeighbors([['2', '3', '4', '7', '0'],
// ['4', '0', '5', '3', '4'],
// ['2', '3', '5', '4', '2'],
// ['9', '8', '7', '5', '4']])
// console.log(equalNeighbors([['test', 'yes', 'yo', 'ho'],
// ['well', 'done', 'yo', '6'],
// ['not', 'done', 'yet', '5']]
// ))
console.log(equalNeighbors([[2, 2, 5, 7, 4],
                            [4, 0, 5, 3, 4],
                            [2, 5, 5, 4, 2]]))