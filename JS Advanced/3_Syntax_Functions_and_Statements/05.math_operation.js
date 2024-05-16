function solve(num1, num2, oper){
    switch (oper) {
        case '+': console.log(num1 + num2)            
            break;
        case '-': console.log(num1 - num2)            
            break;
        case '*': console.log(num1 * num2)            
            break;
        case '/': console.log(num1 / num2)            
            break;
        case '%': console.log(num1 % num2)            
            break;
        case '**': console.log(num1 ** num2)            
            break;
    }
}

solve(5, 6, '+')
solve(3, 5.5, '*')