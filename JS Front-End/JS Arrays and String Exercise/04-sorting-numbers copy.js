function solved(array) {
    let result = []

    let sortedArray = array.sort((a, b) => (a - b))

    while (sortedArray.length > 0) {

        fistNumber = sortedArray.shift()
        lastNumber = sortedArray.pop()

        result.push(fistNumber);

        if (lastNumber) {
            result.push(lastNumber)
        }
    }
    return result
}

console.log(solved([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));