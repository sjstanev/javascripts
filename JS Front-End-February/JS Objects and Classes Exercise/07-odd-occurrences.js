function solve(params) {
    const elements = params.toLowerCase().split(' ');

    const wordOccurs = {};
    const wordOddOccur = []
    
    for (const element of elements) {
        if (!wordOccurs.hasOwnProperty(element)){
            wordOccurs[element] = 0
        }
        wordOccurs[element] += 1
        
    }

    for ( word in wordOccurs){
        if (wordOccurs[word] % 2 != 0){
            wordOddOccur.push(word);
        }
    }

    console.log(wordOddOccur.join(' '));
}

//solve('Cake IS SWEET is Soft CAKE sweet Food')
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
