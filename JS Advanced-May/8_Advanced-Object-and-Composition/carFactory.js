function carFactory(order){

    // const car = {
    //     model: 'VW Golf II',
    //     engine: { power: 90,volume: 1800 },
    //     carriage: { type: 'hatchback', color: 'blue' },
    //     wheels: [13, 13, 13, 13]
    // }
    const car = {
        model: order.model,
        engine: null,
        carriage: null,
        wheels: null
    };

    carEngine = {
        smallEngine: { power: 90, volume: 1800 },
        normalEngine: { power: 120, volume: 2400 },
        monsterEngine: { power: 200, volume: 3500 },
    };

    // Choice the smallest engine form available carEngine
    if (order.power <= 90 ){
        car.engine = carEngine.smallEngine;
    } else if (order.power <= 120 ){
        car.engine = carEngine.normalEngine;
    } else {
        car.engine = carEngine.monsterEngine;
    }

    // f carrige{} is used to pickup the right type and color
    function carriage(type, color) {
        return {
            type,
            color
        }
    }

    car.carriage = carriage(order.carriage, order.color);

    // the wheels are epresented by an array of 4 numbers, each number represents the diameter of the wheel in inches. 
    // The size can only be an odd number. Round down any requirements you receive to the nearest odd number. 
    const wheelSize = order.wheelsize % 2 == 0 ? order.wheelsize - 1 : order.wheelsize;
    car.wheels = new Array(4).fill(wheelSize)

    return car;
}

const result = carFactory({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 })

console.log(result);