function solve(array){
    const sum = Number(array.pop()) + Number(array.shift());
    return sum;
}

console.log(solve(['20', '30', '40']))