function solve(input) {

    meetings = {}
    for (const records of input) {
        const [day, person] = records.split(' ')

        if (!meetings[day]){
            console.log(`Scheduled for ${day}`)
            meetings[day] = person      

        } else {
            console.log(`Conflict on ${day}!`)
        }
  
    }

    for (const key in meetings) {
        console.log(`${key} -> ${meetings[key]}`)   
    }
}

solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])