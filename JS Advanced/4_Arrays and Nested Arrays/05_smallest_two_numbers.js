function smallestTwoNumbers(array){
    const sortedArray = array
        .sort((a, b) => a - b)
        .slice(0,2)

        console.log(sortedArray.join(' '));
}

smallestTwoNumbers([30, 15, 50, 5])
smallestTwoNumbers([3, 0, 10, 4, 7, 3])