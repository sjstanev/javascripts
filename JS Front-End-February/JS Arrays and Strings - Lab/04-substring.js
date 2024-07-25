function subStrings(text, startIndex, count){

    let arr =  text.split('');
    let newString = "";

    for(let i = startIndex; i <= count; i ++){
        newString += arr[i]
    }

    console.log(newString);
}

// USING LAB HINTS
function solved(text, startIndex, count){
    let result;
    result = text.slice(startIndex, count + 1 )
    
    console.log(result)
}

// USING VIDEO FROM LAB
function solved1 (text, start, count){
    let result = text.substring(start, start + count)
    console.log(result);
}

solved('ASentence', 1, 8)
solved('SkipWord', 4, 7)

solved1('ASentence', 1, 8)
solved1('SkipWord', 4, 7)

subStrings('ASentence', 1, 8)
subStrings('SkipWord', 4, 7)