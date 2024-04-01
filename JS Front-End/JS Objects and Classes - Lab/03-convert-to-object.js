function solve(jsonString){
    const result = JSON.parse(jsonString)

    Object.keys(result)
    .forEach(key => console.log(`${key}: ${result[key]}`))
}

solve('{"name": "George", "age": 40, "town": "Sofia"}')