type chaiOrder = {
    type: string;
    sugar: number;
    strong: boolean;    
}

function makeChai(order: chaiOrder){
    console.log(order);
}

function serveChai(order: chaiOrder){
    console.log(order);
}

// Interface
// Interface is used to define the structure of an object
// It is used to define the structure of a class
interface teaRecipe {
    water: number;
    milk: number;
}

class masalaChai implements teaRecipe{
    water= 100;
    milk= 50;   
}

// For custom type
interface cupSize {
    size: 'small' | 'medium' | 'large';
}

class chai implements cupSize{
    size: 'small' | 'medium' | 'large' = 'large';
}

// Union type
// Union type is used to define the structure of an object
// It is used to define the structure of a class
// Literal types
type teaType = 'masala' | 'ginger' | 'cardamom';

function makeTea(type: teaType){
    console.log(type);
}

// Intersection type
// Intersection type is used to define the structure of an object
// It takes all the properties of the objects and combines them
// It is like & operator in programming
type baseChai = {teaLeaves: number}
type extra = {masala: number}

type kadakChai = baseChai & extra;

const cup: kadakChai = {
    teaLeaves: 10,
    masala: 5
}

// Optional Values
// Optional values are the values that are not required
// They are marked with ?

type user = {
    userName: string;
    bio?: string
}

const u1: user = {
    userName: 'John'
}

const u2: user = {
    userName: 'Jane',
    bio: 'Hello'
}

// Readonly values
// Readonly values are the values that are not required
// They are marked with readonly

type config = {
    readonly appName: string
    version: number
}

const cfg: config = {
    appName: 'Zubi App',
    version: 1
}

// cfg.appName = 'Zubi App 2'  // Error: Cannot assign to 'appName' because it is a read-only property.