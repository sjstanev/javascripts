function solve(input)
 {
    phoneBook = {}
    for (const person of input) {
        const [name, phone] = person.split(' ');
        phoneBook[name] = phone
    
    }
   
    Object.keys(phoneBook)
        .forEach(name => console.log(`${name} -> ${phoneBook[name]}`))

}

solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)