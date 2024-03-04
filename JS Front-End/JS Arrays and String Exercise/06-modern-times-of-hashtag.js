function solved(text){
    let pattern = /(?<year>#([A-Za-z]+))/g;

    //find matches and create array from results
    let hashTag = [...text.matchAll(pattern)]

    for (const tag of hashTag) {
        console.log(tag[2]);    
    }
    

}

solved('Nowadays everyone uses # to tag a #special word in #socialMedia')