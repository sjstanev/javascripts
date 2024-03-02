function solved(text, word){

    const regex = new RegExp(word, "ig")

    function countCharacters(word){
        let strLength = word.length;
        return strLength;
    }

    function repeatString(n){
       
        let newString = "*".repeat(n);
        return newString;
    }

    

    console.log(text.replaceAll(regex, repeatString(countCharacters(word))))
}

solved('A small sentence with some words', 'small')
solved('Find the hidden word', 'hidden')
solved('A small sentence with some small words', 'small')


function solved1(text, word) {
    let index = text.indexOf(word);

    while (index >= 0) {
        text = text.replace(word, '*'.repeat(word.length))

        index = text.indexOf(word);
    }
    console.log(text);
}


solved1('A small sentence with some words', 'small')
solved1('Find the hidden word', 'hidden')