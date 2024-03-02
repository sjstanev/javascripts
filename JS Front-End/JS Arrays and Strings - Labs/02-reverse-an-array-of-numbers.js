function solved(n, array){
    newArray = array.slice(0,n).reverse()
    console.log(newArray.join(" "));
}


solved(3, [10, 20, 30, 40, 50])
solved(4, [-1, 20, 99, 5])
solved(2, [66, 43, 75, 89, 47])


// USING HINTS IN PRACTICE LAB
function reverse(n, inputArr){
   
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(inputArr[i])         
    }

    let output = "";
    for (let i = arr.length -1; i >= 0; i--) {
        output += arr[i] + " "
        
    }


    console.log(output)
}

reverse(3, [10, 20, 30, 40, 50])
reverse(4, [-1, 20, 99, 5])
reverse(2, [66, 43, 75, 89, 47])