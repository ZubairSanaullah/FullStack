// Type Narrowing
// Type narrowing is a way to narrow down the type of a variable.
function getChai(kind: string | number) {
    if (typeof kind === 'string') {
        return `Making ${kind} chai......`;
    }
    return `Chai order: ${kind}`;
}

function serveChai(msg?: string) {
    if (msg) {
        return `Serving ${msg}`
    }
    return `Serving chai with no message.`;
}

// Exhaustive check
// This is used to check if all the types are covered.

function oderChai(size: 'small'| 'medium' | 'large' | number){
    if(size === 'small'){
        return `Small cutting chai.....`
    }
    if(size === 'medium' || 'large'){
        return `Make extra chai.....`
    }
    return `Chai order: ${size}`;
}

// function multiply(a: number, b: number) {
//     return a * b;
// }

// function add(a: number, b: number) {
//     return a + b;
// }

// function subtract(a: number, b: number) {
//     return a - b;
// }

// function divide(a: number, b: number) {
//     return a / b;
// }

// function calculate(operation: (a: number, b: number) => number, a: number, b: number) {
//     return operation(a, b);
// }

// Safety check / Type guard

class khuladChai {
    serve() {
        return `Serving khulad chai.....`
    }
}

class kadakChai {
    serve() {
        return `Serving kadak chai.....`
    }
}

// Type guard 
// This is used to check if the type of a variable is correct.
function serve(chai: khuladChai | kadakChai) {
    if(chai instanceof khuladChai) {    // instanceof is used to check if the type of a variable is correct.
        return chai.serve();
    }
    if(chai instanceof kadakChai) {
        return chai.serve();
    }
}

// Creating type
type chaiOrder = {
    type: string;
    sugar: number;
}

function isChaiOrder(obj:any): obj is chaiOrder{
    return(
        typeof obj === 'object' && 
        obj !== null &&
        typeof obj.type === 'string' &&
        typeof obj.sugar === 'number'
    )
}

function serveOrder(item:chaiOrder | string) {
    if(isChaiOrder(item)){
        return `Serving ${item.type} chai with ${item.sugar} sugar.`
    }
    return `Serving custom chai: ${item}`;
}

serveOrder({type: 'Masala', sugar: 2});

// More examples of type narrowing

type masalaChai = {
    type: 'masala';
    spiceLevel: number;
}

type gingerChai = {
    type: 'ginger';
    amount: number;
}

type elaichiChai = {
    type: 'elaichi';
    aroma: number;
}

type chai = masalaChai | gingerChai | elaichiChai;

function makeChai(order: chai) {
    switch (order.type) {
        case 'masala':
            return `Making ${order.type} chai with ${order.spiceLevel} spice level.`
            break;
        case 'ginger':
            return `Making ${order.type} chai with ${order.amount} amount of ginger.`
            break;
        case 'elaichi':
            return `Making ${order.type} chai with ${order.aroma} aroma of elaichi.`
            break;
    }
}

makeChai({type: 'masala', spiceLevel: 2});