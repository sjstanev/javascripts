function solve(number){


    let sum = 0;
    let i = 1;
    let isPerfectNumber = true;

    while (true) {

        if (sum > number){
            isPerfectNumber = false;
            break;
        }
        
        if ( sum == number){
            break;
        }

        if (number % i == 0 ){
            sum += i

        }
        i++;
    }

    if (isPerfectNumber){
        console.log("We have a perfect number!");
    }
    else{
        console.log("It's not so perfect.");
    }



}
solve(5)
solve(6)
solve(28)
solve(29)
solve(1236498)