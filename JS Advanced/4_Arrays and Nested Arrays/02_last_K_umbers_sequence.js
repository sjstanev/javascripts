function lastKNumbers(n, k) {

    let array = [1, ]

    for (let i = 0; i < n; i++) {

        let sum = 0;

        startIndex = Math.max(0, i - k)

        for (let j = +startIndex; j < i; j++) {

            sum += array[j]
            array[i] = sum;

        }
    }
    return array
}

// 1, 1, 2, 3, 5, 8, 13, 21]
// lastKNumbers(6, 3)
let result = lastKNumbers(8, 2)
console.log(result);