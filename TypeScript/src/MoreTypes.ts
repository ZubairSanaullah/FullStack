let response: any = 'Hello';

let numericLength: number = (response as string).length

type Book = {
    title: string;
}

let bookString = '{"title": "Who moved my cheese?"}'
let bookObject = JSON.parse(bookString) as Book

console.log(bookObject.title);

// Type assertion

const inputElement = document.getElementById('my-input') as HTMLInputElement;

let value: any

value = 'Hello'
value = 1.2
value = [1, 2, 3]
value.toUpperCase()

let newValue: unknown

newValue = 'Hello'
newValue = 1.2
newValue = [1, 2, 3]
if(typeof newValue === 'string') {
    newValue.toUpperCase()
}

// try catch block

try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message);
    }
    console.log("Error", error);
    
}

const data:unknown = 'Hello'
const strData: string = data as string

// never type
type Role = "admin" | 'user' | 'guest'

function redirectBasedOnRole(role: Role): void {
    if(role === 'admin'){
        console.log("Redirecting to admin page")
        return
    }
    if(role === 'user'){
        console.log("Redirecting to user page")
        return
    }
    role;
}

function neverReturn():never{
    while(true){}
}
