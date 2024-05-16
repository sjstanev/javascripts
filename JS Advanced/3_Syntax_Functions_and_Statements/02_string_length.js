function solve(firstString, secondString, thirdString){
    const totalLength = firstString.length + secondString.length + thirdString.length
    const averageLength = Math.floor(totalLength / 3)
    console.log(totalLength);
    console.log(averageLength);
}

solve('chocolate', 'ice cream', 'cake')