function solve(input) {

    const addressBook = {}
    for (const records of input) {
        const [person, address] = records.split(':')

        addressBook[person] = address    
    }

    // Create Array from Objects property and then sort it
    sortAddressBook = Object.entries(addressBook)
        .sort((a, b) => a[0].localeCompare(b[0]))
        
    // Create Object from sorted Array
    sortedBook = Object.fromEntries(sortAddressBook)

    for (const key in sortedBook) {
        console.log(`${key} -> ${sortedBook[key]}`)   
    }

    // Another method to reslove the task 
    // Object
    // .entries(addressBook)
    // .sort((a, b) => a[0].localeCompare(b[0]))
    // .forEach(([name, address]) => console.log(`${name} -> ${address}`))

}

solve(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])