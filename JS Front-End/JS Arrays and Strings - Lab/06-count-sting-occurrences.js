function solved(text, word){

    let arr = text.split(" ")

    let count = 0;
    for (const element of arr) {

        if (element === word) {count ++}
    }
    console.log(count)
}



solved('This is a word and it also is a sentence','is')
solved('softuni is great place for learning new programming languages','softuni')


// USING VIDEO LAB
function solved1(text, word){
    let result = text
        .split(' ')
        .filter(element => element === word)
        .length;
        
    console.log(result)
}



solved1('This is a word and it also is a sentence','is')
solved1('softuni is great place for learning new programming languages','softuni')