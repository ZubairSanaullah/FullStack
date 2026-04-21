// Generics
// Generics are used to create reusable components
// They are used to create components that can work with any type of data
// Generics = templates

function wrapInArray<T>(value: T): T[] {
    return [value]
}

wrapInArray(1)
wrapInArray('hello')
wrapInArray(true)
wrapInArray({name: 'John', age: 30})

function pair<A, B>(a: A, b: B): [A, B] {
    return [a, b]
}

pair(1, 'hello')
pair(true, {name: 'John', age: 30})

// Generic Interfaces
interface Box<T> {
    value: T
}

const box: Box<number> = {
    value: 1
}

const box2: Box<string> = {
    value: 'hello'
}

const box3: Box<boolean> = {
    value: true
}

const box4: Box<{name: string, age: number}> = {
    value: {name: 'John', age: 30}
}

// Generic Classes
class Queue<T> {
    private data: T[] = []

    enqueue(item: T) {
        this.data.push(item)
    }

    dequeue(): T | undefined {
        return this.data.shift()
    }

    peek(): T | undefined {
        return this.data[0]
    }

    isEmpty(): boolean {
        return this.data.length === 0
    }

    size(): number {
        return this.data.length
    }
}

const queue = new Queue<number>()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

console.log(queue.dequeue())
console.log(queue.peek())
console.log(queue.isEmpty())
console.log(queue.size())

const queue2 = new Queue<string>()
queue2.enqueue('hello')
queue2.enqueue('world')

console.log(queue2.dequeue())
console.log(queue2.peek())
console.log(queue2.isEmpty())
console.log(queue2.size())

interface ApiPromise<T> {
    status: number,
    data: T
}

const res: ApiPromise<{flavour: string}> = {
    status: 200,
    data: {flavour: 'Masala'}
}