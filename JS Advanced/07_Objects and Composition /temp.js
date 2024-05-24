
// Desctructuring Syntax
console.log('\nDesctructuring Syntax');
const department = {
    name: 'Engineering',
    director: 'Ted Thompson',
    employeeCount: 25
}

const {name, employeeCount} = department;
console.log(name, employeeCount);

const obj = {a: 1, b: 2, c: 3};
const {d, ...props} = obj;

const modifiedObj = {
    ...props,
    d: 12,
}

console.log(obj);
console.log(modifiedObj);

/*****************************/

// Deleting Properties
console.log('\nDeleting Properties');

delete modifiedObj.a
console.log(modifiedObj);


// Associative Arrays
console.log('\nAssociative Arrays');
const phonebook = {
    'Tim': '444-111',
    'Bill': '555-111',
    'Peter': '555-777'
};

const keys = Object.keys(phonebook)
console.log(keys);

const values = Object.values(phonebook)
console.log(values);

// Used this method to sort the contents
const entries = Object.entries(phonebook)
console.log(entries);

// Function Library also known as `helper`
const compareNumbers = {
    ascending: (a, b) => a - b,
    descending: (a, b) => b - a
} // this technique is also used to expose public API in a module


// Object as switch replacement

let count = 5;
const command = 'increment'

const parser = {
    increment() {count++;},
    decrement() {count--;},
    reset() {count = 0;}
}

parser[command]();

// the same using switch methods

// let count = 5;
//  switch (command) {
    // case 'increment':
        // count++;
        // break;
    // case 'decrement':
        // count--;
        // break;
    // case 'reset':
        // count = 0;
        // break;
//  }

console.log('\nObject Composition');
let student = {
    firstName: 'Maria',
    lastName: 'Lopez',
    age: 22,
    location: {lat: 42.698, lng:23.322}
}

console.log(student);
console.log(student.location.lat);


// Composing Objects with behavior
function print(){
    return console.log(`${this.name} is printing a page`);
}

function scan(){
    return console.log(`${this.name} is scanning a document`);
}

const printer = {name: 'ACME Printer', print}
console.log(printer.name, printer.print)
printer.print();

const scanner = {name: 'Initech Scanner', scan}
scanner.scan();

const mfu = {name: 'Xerox', print, scan}
console.log(mfu.name);
mfu.print();
mfu.scan();



// Factory Function - function that create and return objects
// Creating methods with object reference can avoid the pitfalls of using this
console.log('\nFunction that we used to create objects');

// Function that we used to create object
function createRect (width, height){

    // Create object
    const rect = {width, height};

    // Create object Methods
    rect.getArea = () => {
        return rect.width * rect.height;
    }

    return rect;
}

// Create object using Factory Function `createRect`
const square = createRect(4, 4);
console.log(square);
console.log(square.getArea());

// Decorator Functions - function that add new data and behavior to objects
console.log('\nFunction Decorator');

function canPrint(device){
    device.print = () => {
        console.log(`${device.name} is printing a page`);
    }
}

const newPrinter = {name: 'ACME Printer New'};
canPrint(newPrinter);

printer.print()


