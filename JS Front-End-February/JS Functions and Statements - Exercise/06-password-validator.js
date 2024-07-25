function solved(password){

    function passLengthCheck(passwd){
        if (passwd.length >= 6 && passwd.length <= 10){
            return true;
        } else {
            console.log("Password must be between 6 and 10 characters");
        }

    }

    function lettersAndDigitsOnly(passwd){
        const regex = /[A-Za-z0-9]/g;

        const found = passwd.match(regex);
        if (found.length == passwd.length){
            return true;
        } else {
            console.log("Password must consist only of letters and digits")
        }


    }

    function atLeastTwoDigitsCheck(passwd){

        const regex = /[0-9]/g;

        const found = passwd.match(regex);
        if (found && found.length >= 2){
            return true;
        } else {
            console.log("Password must have at least 2 digits")
        }

    }

    const passwordLengthCheck = passLengthCheck(password);
    const isAlphabatic = lettersAndDigitsOnly(password);
    const digitsCheck = atLeastTwoDigitsCheck(password);

    if( passwordLengthCheck === true && 
        isAlphabatic === true && 
        digitsCheck === true ) {
            console.log("Password is valid");
        }
}

solved('logIn')
solved('MyPass123')
solved('Pa$s$s')