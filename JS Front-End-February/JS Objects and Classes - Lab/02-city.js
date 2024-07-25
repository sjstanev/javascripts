function solve(input){

    for (const key in input) {
        console.log(`${key} -> ${input[key]}`)
    }

    // Alternative method using Object.keys methods

    // Object
    // .keys(city)
    // .forEach(propName => console.log(`${propName} -> ${city[propName]}`))
}

solve({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})