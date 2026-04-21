// Interfaces
// Interface is a blueprint for an object
// It is used to define the structure of an object
// You can take it as a structure of an object

interface Chai {
    flavour: string;
    price: number;
    milk?: boolean
}

const masala: Chai ={
    flavour: 'Masala',
    price: 30,
}

// Readonly properties
interface Shop{
    readonly id: number
    name: string
}

const s: Shop = {
    id: 1,
    name: 'Chai Shop',
}

// s.id = 2 // Error

// Methods
interface discountCalculator {
    (price: number): number
}

const apply50: discountCalculator = (price) => {
    return price * 0.5
}

console.log(apply50(100))

interface teaMachine {
    start(): void
    stop(): void
}

const machine: teaMachine = {
    start: () => {
        console.log('Machine started')
    },
    stop: () => {
        console.log('Machine stopped')
    }
}

// Index Signatures
// Index signatures are used to define the structure of an object
// They are used to define the structure of an object
interface chaiRatings {
    [key: string]: number
}

const ratings: chaiRatings = {
    masala: 5,
    ginger: 4,
    elaichi: 3
}

ratings['masala'] = 4
console.log(ratings)

// Interface Merging
// Interface Merging is a feature of TypeScript that allows you to merge multiple interfaces into a single interface
// They are merged together to form a single interface
interface User {
    name: string
}

interface User {
    age: number
}

// You have to declare all the properties of the merged interface
// If there is a conflict between the properties of the merged interface, it will throw an error
const user: User = {
    name: 'John',
    age: 30
}

console.log(user)

// Extending Interfaces
// Extending Interfaces is a feature of TypeScript that allows you to extend multiple interfaces into a single interface
// They are extended together to form a single interface
interface A {a: string}
interface B {b: string}

interface C extends A, B {}

