function solve(cars) {

    carsInPark = []
    for (const car of cars){

        const [direction, carNumber] = car.split(', ');
        if (direction == "IN"){
            carsInPark.push(carNumber)
        }else {
            index = carsInPark.indexOf(carNumber)
            carsInPark.splice(index, 1)
        }
    }
    carsInPark.sort((a, b) => a.localeCompare(b));

    if (!carsInPark.length){
        console.log("Parking Lot is Empty");
    }else{        
        for( const car of carsInPark){
            console.log(car);
        }
    }
}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)