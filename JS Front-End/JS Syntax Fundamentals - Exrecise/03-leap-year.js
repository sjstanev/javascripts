function solved(year){
    if(year % 4 == 0 && (year % 400 == 0 || year % 100 != 0)) {
        console.log('yes')
    } else {
        console.log('no')
    }
}

solved(1984)
solved(2003)
solved(4)