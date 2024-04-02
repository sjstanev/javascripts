function solve(words) {
    
    const wordsToMatch = words.shift().split(' ');
    const wordOccurs = {};

    for (const i of wordsToMatch) {
        wordOccurs[i] = 0
    
    }

    for (const word of words){

        if (wordsToMatch.includes(word)){
            
            if (word in wordOccurs){
                wordOccurs[word] += 1
            }
        }
    }
    
    // Sort object by count in descending word occurrences
    const sortedWords = Object.fromEntries(
        // create array from objects
        Object.entries(wordOccurs).sort(([keyA, valueA],[keyB, valueB]) => valueB - valueA )
    );

    Object.keys(sortedWords)
        .forEach(key => console.log(`${key} - ${wordOccurs[key]}`));
}

solve([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ])
solve(
    [
        'is the', 
        'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
)