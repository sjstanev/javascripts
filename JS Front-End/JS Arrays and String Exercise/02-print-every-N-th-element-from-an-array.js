function solved(arr, nthElement) {
    let step = nthElement
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
            newArr.push(arr[i]);
        }

        if (i == nthElement) {
            nthElement += step;
            newArr.push(arr[i]);
        }
    }
    return newArr
}

console.log(solved([
    '5',
    '20',
    '31',
    '4',
    '20'],
    3
));

function quicksolved(array, step) {
    let result = []
    for (let i = 0; i < array.length; i += step) {
        result.push(array[i]);

    }
    return result;
}

console.log(quicksolved([
    '5',
    '20',
    '31',
    '4',
    '20'],
    3
));

function quicksolved1(array, step) {

    let result = array.filter((element, index) => index % step === 0)
    return result;
}



console.log(quicksolved1([
    '5',
    '20',
    '31',
    '4',
    '20'],
    2
));