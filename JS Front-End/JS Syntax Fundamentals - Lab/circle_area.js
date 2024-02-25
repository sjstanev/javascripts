function solved(arg){

    if (typeof arg === "number") {
        console.log((arg * arg * Math.PI).toFixed(2))
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof arg}.`)
    }
       
}

solved(5)
solved('name')