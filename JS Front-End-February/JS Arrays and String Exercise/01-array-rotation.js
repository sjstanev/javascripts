function solved(arr, rotation) {
    for (let i = 0; i < rotation; i++) {
        let item = arr.shift();
        arr.push(item)

    }
    console.log(arr.join(' '));
}

solved([51, 47, 32, 61, 21], 2)
solved([2, 4, 15, 31], 5)