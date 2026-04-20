// Arrays
const chaiFlavours: string[] = [
    "Masala",
    "Ginger",
    "Cardmom"
]

const chaiPrices: number[] = [
    10,
    20,
    30
]


const rating: Array<number> = [
    5.0,
    4.5,
    4.8
]

type chai = {
    name: string;
    price: number;
}

const menu: chai[] = [
    {
        name: "Masala",
        price: 10
    },
    {
        name: "Ginger",
        price: 20
    },
    {
        name: "Cardmom",
        price: 30
    }
]

// Readonly arrays
const cities: readonly string[] = [
    "Lahore",
    "Karachi",
    "Islamabad"
]

// cities.push("Chennai") // Error

// Multidimensional arrays
const coordinates: number[][] = [
    [1, 2],
    [3, 4],
    [5, 6]
]

// Tuples
let user: [string, number, boolean] = ["John", 25, true]

// user = [25, "John", true] // Error

let userInfo: [string, number, boolean?]
userInfo = ["John", 25]
userInfo = ["John", 25, true]

// userInfo = [true, 25, "John"] // Error

const location: readonly [number, number] = [10, 20]

// location.push(30) // Error

// Enums
// Enum is a way to define a set of named constants
// It is a way to give more friendly names to values
// By default, enum values start from 0

// 1.
enum Weekdays {
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY
}

let today: Weekdays = Weekdays.MONDAY
console.log(today)

// 2.
enum Status {
    PENDING = 100,
    PROCESSING, // 101
    CANCELLED // 102
}

// 3. 
enum chaiType {
    MASALA = "Masala",
    GINGER = "Ginger",
    CARDMOM = "Cardmom"
}

function makeChai(type: chaiType){
    console.log(`Making ${type} chai`)
}

makeChai(chaiType.MASALA)