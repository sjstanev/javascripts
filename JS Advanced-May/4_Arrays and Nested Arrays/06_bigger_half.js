function biggerHalf(array){
    let sortedArray = [];
    array.sort((a, b) => a - b)

    if (array.length % 2 == 0){
        sortedArray = array.slice(array.length / 2);
    } else{
        sortedArray = array.slice(Math.floor(array.length / 2));
    }
    return sortedArray;
} 

console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]))