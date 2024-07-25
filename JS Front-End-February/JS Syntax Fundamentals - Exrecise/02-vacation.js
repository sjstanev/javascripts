function solved(groupOfPeple, typeOfGroup, dayOfWeek) {
    let price;
    let totalPrice;
    
    switch (dayOfWeek) {
        // Students Group
        case "Friday":
            if (typeOfGroup == "Students"){
                price = 8.45
                totalPrice = groupOfPeple * price
            }
            else if (typeOfGroup == "Business"){
                price = 10.90
                totalPrice = groupOfPeple * price
            } else if (typeOfGroup == "Regular"){
                price = 15
                totalPrice = groupOfPeple * price
            } 

            break;
        case "Saturday":
            if (typeOfGroup == "Students"){
                price = 9.80
                totalPrice = groupOfPeple * price
            }
            else if (typeOfGroup == "Business"){
                price = 15.60
                totalPrice = groupOfPeple * price
            } else if (typeOfGroup == "Regular"){
                price = 20
                totalPrice = groupOfPeple * price
            } 
            break;
        case "Sunday":
            if (typeOfGroup == "Students"){
                price = 10.46
                totalPrice = groupOfPeple * price
            }
            else if (typeOfGroup == "Business"){
                price = 16
                totalPrice = groupOfPeple * price
            } else if (typeOfGroup == "Regular"){
                price = 22.50
                totalPrice = groupOfPeple * price
            }        
            break;
    }

    if (typeOfGroup == "Students" && groupOfPeple >= 30){
        totalPrice -=  totalPrice * 0.15
    }

    if (typeOfGroup == "Business" && groupOfPeple >= 100) {
        totalPrice -= 10 * price
    }

    if (typeOfGroup == "Regular" && groupOfPeple >= 10 && groupOfPeple <= 20) {
        totalPrice -=  totalPrice * 0.05
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

solved(30,
    "Students",
    "Sunday")

solved(40,
    "Regular",
    "Saturday")