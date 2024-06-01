arr = [
  { 'Appricot ': ' 20.4' },
  { 'Apple ': ' 1.25' },
  { 'Anti-Bug Spray ': ' 15' },
]


/* 
  RESULT:
    Anti-Bug Spray: 15
    Apple: 1.25
    Appricot: 20.4

*/

console.log(arr);

function sortArr(arr){
  /*
    Use this function when you have array containing objects,
    but the keys are different for every one of them!!!
    example:
    arr = [
      { 'Asspricot ': ' 20.4' },
      { 'Apple ': ' 1.25' },
      { 'Anti-Bug Spray ': ' 15' },
      { 'Abug Spray ': ' 135' }
        ]
  */

  // a and b are objects
  arr.sort((a, b) => {

    // this return the array containing keys
    let keyB = Object.keys(b)[0];
    let keyA = Object.keys(a)[0];

    // compare by the object values
    // return Number(a[keyA]) - Number(b[keyB])
    
    // compare by the object keys
    return keyA.localeCompare(keyB);

  });
  // return sorted Array
  return arr
}

    
console.log(sortArr(arr));


// const items = [
//     { name: "Edward", 'value': 21 },
//     { name: "Sharpe", 'value': 37 },
//     { name: "And", 'value': 45 },
//     { name: "The", 'value': -12 },
//     { name: "Magnetic", 'value': 13 },
//     { name: "Zeros", 'value': 37 },
//   ];
  
// //sort by 'value'

// items.sort((a, b) =>  {
//     return a.value - b.value
// });

// console.log(items);