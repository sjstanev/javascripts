function solved(numbers){
    // console.log(typeof numbers);
    firstItem = numbers.shift()
    lastItem = numbers.pop()

    console.log(firstItem + lastItem);

}

solved([20, 30, 40])
solved([10, 17, 22, 33])
solved([11, 58, 69])