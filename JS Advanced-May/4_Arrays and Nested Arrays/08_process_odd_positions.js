function oddPositions(array){

    const filteredArray = array
        .filter((element, index) => index % 2 !== 0)
        .map(element => element * 2)
        .reverse()
        .join(' ')

    return filteredArray;
}

console.log(oddPositions([10, 15, 20, 25]));
console.log(oddPositions([3, 0, 10, 4, 7, 3]));