// Union Types
// Union types are used to specify that a variable can have one of several types.
let subs: number | string = 1000;

subs = '1000';

// subs = true; // Error: Type 'boolean' is not assignable to type 'number | string'.

let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending';

apiRequestStatus = 'success';
apiRequestStatus = 'error';

// apiRequestStatus = 'loading'; // Error: Type '"loading"' is not assignable to type '"pending" | "success" | "error"'.

let airlineSeat: 'window' | 'aisle' | 'middle' = 'window';

airlineSeat = 'aisle';
airlineSeat = 'middle';

// airlineSeat = 'back'; // Error: Type '"back"' is not assignable to type '"window" | "aisle" | "middle"'.

// Any Type
// Use any type when you don't know the type of a variable.
const orders = ['12', '29', '53', '42'];

let currentOrder: string | undefined;

for (let order of orders) {
    if (order === '53') {
        currentOrder = order;
        break;
    }
    currentOrder = '11';
}

console.log(currentOrder);