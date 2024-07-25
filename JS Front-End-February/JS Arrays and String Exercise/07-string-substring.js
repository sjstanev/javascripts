function solved(word, text){
    let textArr = text.split(' ')

    for (const subString of textArr) {
        if (subString.toLowerCase() == word.toLowerCase()){
            return console.log(subString.toLowerCase());
        }

        
    }
    console.log(`${word.toLowerCase()} not found!`)
}

solved('javascript','JavaScript is the best programming language')
solved('python', 'JavaScript is the best programming language')