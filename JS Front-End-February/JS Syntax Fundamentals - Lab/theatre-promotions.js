function solved (days, age) {

    let price;

    if (age >=0 && age <= 18){
        switch (days) {
            case 'Weekday':
                price = 12
                break;
            case 'Weekend':
                price = 15
                break;
            case 'Holiday':
                price = 5
                break;
        }
    } else if (age > 18 && age <= 64){
        switch (days) {
            case 'Weekday':
                price = 18
                break;
            case 'Weekend':
                price = 20
                break;
            case 'Holiday':
                price = 12
                break;
        }
    } else if (age > 64 && age <= 122){
        switch (days) {
            case 'Weekday':
                price = 12
                break;
            case 'Weekend':
                price = 15
                break;
            case 'Holiday':
                price = 10
                break;
        }
    } else {
        console.log("Error!")
    }
    
    if (price) {
        console.log(`${price}$`)
    }

}

solved('Weekday', 42)
solved('Holiday', -12)
solved('Holiday', 15)