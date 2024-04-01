class Cats{

    constructor(name, age){
        this.name = name;
        this.age = age;

    }

    // Method
    meow(){
        console.log(`${this.name}, age ${this.age} says Meow`)
    }
}

function solve(input){
    for (const line of input) {
        const [name, age] = line.split(' ')
        let cat = new Cats(name, age)
        cat.meow()
    }


}

solve(['Mellow 2', 'Tom 5'])