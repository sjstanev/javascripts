function charRange(ch1, ch2){

    const firstNumber = ch1.charCodeAt(0);
    const secondNumber = ch2.charCodeAt(0);
    let a , b;

    if ((firstNumber - secondNumber) <  0 ) {
         a = firstNumber, b = secondNumber
    } else {
         a = secondNumber, b = firstNumber
    }

    let charachers = "";
    for (let i = a + 1; i < b; i++) {
        charachers += String.fromCharCode(i) + " ";
        
    }
    console.log(charachers)
}

charRange('a','d')
charRange('#',':')
charRange('C','#')