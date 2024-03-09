function solve(loadingNumber){
    const number = loadingNumber / 10;

    function createLoadingBar (number){

        let bar;
        loadingOfBar = "%".repeat(number)
        remainingOfBar = ".".repeat(10 - number)
        bar = `[${loadingOfBar}${remainingOfBar}]`;

        return `${loadingNumber}% ${bar}`;
    }
    if (loadingNumber == 100){

        result = createLoadingBar(number)
        array = result.split(' ')
        loadingBar = array[0] + " Complete!";
        console.log(loadingBar);
        console.log(array[1])
    } else {
        result = createLoadingBar(number)
        loadingBar = result;
        console.log(loadingBar);
        console.log("Still loading...");
    }

}

solve(30)
solve(50)
solve(100)