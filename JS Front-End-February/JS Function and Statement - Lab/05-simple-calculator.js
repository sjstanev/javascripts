function calc(a, b, operator){

    let result;

    switch (operator) {
        case "multiply":
            result = a * b;
            break;
        case "divide":
            result = a / b;
            break;
        case "add":
            result = a + b;
            break;
        case "subtract":
            result = a - b;
            break;
    }
    console.log(result);
}

calc(5,
    5,
    'multiply')

calc(40,
    8,
    'divide')

calc(12,
    19,
    'add')
calc(50,
    13,
    'subtract')