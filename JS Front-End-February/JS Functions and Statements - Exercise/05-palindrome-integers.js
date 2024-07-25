function solved(array){

    function palindrome(number){
        // convert input to array
        strArray = String(number).split('');
        // convert string array to array from numbers
        numArray = strArray.map(x => Number(x))

        let isPalindrome = true;

        while (numArray.length > 1 ){

            let firstElement = numArray.shift();
            let lastElement = numArray.pop()

            if (firstElement != lastElement){
                isPalindrome = false;
                break;
            }
        }

        return isPalindrome
    }

    for (const iterator of array) {
        console.log(palindrome(iterator));
    }
}

solved([123,323,421,121])
solved([32,2,232,1010])