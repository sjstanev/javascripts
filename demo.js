
// Just Demo file

let a = 3
console.log(a);
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
    for (let i = 2; num > i; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

console.log(array.filter(isPrime));


let text = 'Today is 2015-05-11';
let regexp = /\d{4}-\d{2}-\d{2}/g;
let containsValidDate = regexp.test(text);
console.log(containsValidDate); // true


let arr = [1, 4, 7, 2]
console.log(arr)
console.log(Math.min(...arr));
console.log(Math.max(...arr));