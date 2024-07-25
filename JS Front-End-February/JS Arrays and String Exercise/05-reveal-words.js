function solved(...arr) {

    //separate the word from the expression
    text = arr.pop()
    searchWordsArray = arr.shift().split(',')
    let wordLength

    for (let word of searchWordsArray) {
        // remove space around the word
        word = word.trim()

        wordLength = word.length;
        findStr = "*".repeat(wordLength);

        // replace the ****** with word
        text = text.replace(findStr, word);
    }
    console.log(text);

}

solved('great', 'softuni is ***** place for learning new programming languages')
solved('great, learning', 'softuni is ***** place for ******** new programming languages')


// USING VIDEO LAB EXERCISES
function arraySolved(wordsInput, template) {

    let words = wordsInput.split(', ');
    let templateWords = template.split(' ');

    let result = templateWords
        .map(tWords => tWords.includes('*')
            ? words.find(w => w.length == tWords.length)
            : tWords)
        .join(' ')

    console.log(result)
}

arraySolved('great, learning', 'softuni is ***** place for ******** new programming languages')
