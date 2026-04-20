function makeChai(type: string, cups: number){
    console.log(`Making ${cups} cups of ${type} chai`)
}

makeChai("Masala", 2)

function getChaiPrice():number{
    return 32
}

function makeOrder(order: string): string{
    if(!order) return ""
    return order
}

// Loger function
function logMessage(message: string): void{
    console.log(message)
}

logMessage("Hello World")

// Optional parameters
// 1.
function orderChai(type?: string){}

// 2.
function orderChaiWithSugar(suger: boolean = true){}

function createOrder(order: {
    type: string;
    sugar: number;
    size: 'small' | 'medium' | 'large';
    rating?: number
}): number{
    return 5
}