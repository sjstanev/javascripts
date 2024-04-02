function solve(input) {
    employees = {}

    input.forEach( x => {
        employees["name"] = x;
        employees["num"] = x.length; 
        console.log(`Name: ${employees.name} -- Personal Number: ${employees.num}`);
    })

}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])

solve([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
    ])