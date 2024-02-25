function solved(number, op1, op2, op3, op4, op5) {
    let elements;
    let result = 0;
    elements = op1[0] + op2[0] + op3[0] + op4[0] + op5[0]


    for (i = 0; i < elements.length; i++) {
        switch (elements[i]) {
            case "c":
                result = number / 2
                break;
            case "d":
                result = Math.sqrt(number)
                break;
            case "s":
                result = number + 1
                break;
            case "b":
                result = number * 3
                break;
            case "f":
                result = number - number * 0.20
                break;

        }

        number = result
        console.log(result)
    }

}

solved('32', 'chop', 'chop', 'chop', 'chop', 'chop')
solved('9', 'dice', 'spice', 'chop', 'bake', 'fillet')