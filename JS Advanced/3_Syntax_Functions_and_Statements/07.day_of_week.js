function solve(day){
    const dayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    dayOfWeek.indexOf(day) != -1 ? console.log(dayOfWeek.indexOf(day) + 1) : console.log('error');
    
}

solve('Tuesday')
solve('Monday')
solve('Invalid')