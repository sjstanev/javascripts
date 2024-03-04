function solved(arr) {

    let newArr = [];
    let minItem;
    let maxItem;
    let index;

    while (arr.length > 0) {

        //find min and max Item
        minItem = Math.min(...arr)
        maxItem = Math.max(...arr)

        if (minItem && maxItem && minItem !== maxItem) {
            // Create Array from min and max item
            newArr.push(minItem);
            newArr.push(maxItem);
        } else {
            newArr.push(minItem);
        }


        // find element's index to remove from arr
        index = arr.indexOf(minItem)
        arr.splice(index, 1)

        index = arr.indexOf(maxItem)
        arr.splice(index, 1)

    }

    // console.log(newArr);
    return newArr

}

// solved([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])
console.log(solved([1, 65, 3]))