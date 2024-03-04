function solved(text){

    regex = /(?=[A-Z])/g

    /* 
        Spilit where find a Capital letter!
        
        A lookahead assertion "looks ahead": 
        it attempts to match the subsequent input with the given pattern, 
        but it does not consume any of the input 
    */
    console.log(text.split(regex).join(', '))
}

solved('SplitMeIfYouCanHaHaYouCantOrYouCan')

function lookahead(text){

    /*  
        The syntax is: X(?=Y), it means "look for X, but match only if followed by Y". 
        There may be any pattern instead of X and Y. 

        For an integer number followed by €, the regexp will be \d+(?=€):
    */
    
    //30, the number 1 is ignored, as it's not followed by €
    console.log( text.match(/\d+(?=€)/) ); 
}


lookahead("1 turkey costs 30€;")