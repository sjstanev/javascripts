function solved(speed, town) {
    let speedLimit;
    let difference;
    let status;

    switch (town) {
        case "motorway":
            speedLimit = 130
            break;
        case "interstate":
            speedLimit = 90
            break;
        case "city":
            speedLimit = 50
            break;
        case "residential":
            speedLimit = 20
            break;
    }

    if (speed <= speedLimit){
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
    } else {
        difference = speed - speedLimit

        if (difference <= 20 ){
            status = "speeding";
        } else if (difference <= 40 ){
            status = "excessive speeding";
        } else {
            status = "reckless driving"
        }

        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
    }

}

solved(40, 'city')
solved(21, 'residential')
solved(120, 'interstate')
solved(200, 'motorway')