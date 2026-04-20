const chai = {
    mame: 'masala chai',
    price: 10,
    isGood: true
}

// Object literal type
// {
//     name: string;
//     price: number;
//     isGood: boolean;
// }

// Object Declaration
let tea: {
    name: string;
    price: number;
    isHot: boolean;
}

tea = {
    name: 'masala chai',
    price: 10,
    isHot: true
}

// Alias Object
type chai = {
    name: string;
    price: number;
    ingredients: string[];
}

let adrakChai: chai = {
    name: 'adrak chai',
    price: 10,
    ingredients: ['tea leaves', 'milk', 'ginger']
}

// Duck Typing
// If an object has the same properties as the type, it is considered to be of that type
type cup = {size: string};

let smallCup: cup = {
    size: '200ml'
}

let largeCup = {
    size: '500ml',
    color: 'blue'
}

// Duck typing
smallCup = largeCup

// Structural Typing
// If an object has the same properties as the type, it is considered to be of that type
// It is like duck typing but for types

type brew = {
    brewTime: number;
}

const coffee = {
    brewTime: 5,
    beans: 'Arabica'
}

const chaiBrew:brew = coffee;

type User = {
    userName: string;
    passowrd: string
}

const u: User = {
    userName: 'Zubair',
    passowrd: '123'
}

// Split object
type Item = {
    name: string,
    quantity: number
}

type Address = {
    street: string,
    pin: number
}

type Order = {
    id: string;
    items: Item[];
    address: Address;
}

// Partial Utility Type
type Chai = {
    name: string;
    price: number;
    isHot: boolean
}

const updateChai = (updates: Partial<chai>) => {
    console.log("Updating chai with ", updates)
}

updateChai({price: 20})

// Required Utility Type
type chaiOrder = {
    name?: string;
    price?: number;
}

const placeOrder = (order: Required<chaiOrder>) => {
    console.log("Updating chai with ", order)
}

placeOrder({name: 'masala chai', price: 10})    // Error: Property 'name' is missing in type '{ price: number; }' but required in type 'Required<chaiOrder>'.

// Pick Utility Type
type coffee = {
    name: string;
    price: number;
    isHot: boolean
    ingredients: string[]
}

type updateCoffee = Pick<coffee, 'price' | 'isHot'>

// Omit Utility Type
type coffeeWithoutName = Omit<coffee, 'name'>

// Record Utility Type
type chaiPrices = {
    masala: number;
    ginger: number;
    cardamom: number;
}

const chaiPrices: Record<string, number> = {
    masala: 10,
    ginger: 20,
    cardamom: 30
}