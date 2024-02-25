function solved(startNumber, endNumber){
    let result = ''; 
    let sum = 0;

    for (let i = startNumber; i <= endNumber; i++) {
        
        result += i.toString() + " ";
        sum += i;       
    }

    console.log(result.trim());
    console.log(`Sum: ${sum}`);
}

solved(5, 10)
solved(0, 26)
solved(50, 60)
