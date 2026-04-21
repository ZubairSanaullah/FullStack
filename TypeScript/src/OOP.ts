class Chai {
    flavour: string;
    // price: number

    // Constructor
    // This is a special method that is called when an object is created
    // constructor(flavour: string, price: number) {
    //     this.flavour = flavour;     // this is used to refer to the current object
    //     this.price = price;         
    // }

    constructor(flavour: string) {
        this.flavour = flavour;     // this is used to refer to the current object
        console.log(this)
    }

}

const masalaChai = new Chai("Masala");
masalaChai.flavour = 'Ginger'

// Access Modifiers
// Public
// Private
// Protected

class Coffee {
    public flavour: string = 'Chocolate'
    private price: number = 100

    reveal() {
        return this.price
    }
}

const coffee = new Coffee()
console.log(coffee.flavour)     // Accessible
console.log(coffee.reveal())    // Accessible

class Shop {
    protected shopName = 'Starbucks'
}

class Branch extends Shop {
    display() {
        console.log(this.shopName)
    }
}

const branch = new Branch()
branch.display()

// Readonly Property
class Cup {
    // readonly property cannot be changed
    readonly capacity: number = 250

    constructor(capacity: number) {
        this.capacity = capacity
    }
}

// Controlled Getters and Setters
class modernChai {
    private _sugar = 2

    get sugar() {
        return this._sugar
    }

    set sugar(value: number) {
        if (value > 5) throw new Error("Too much sugar!")
        this._sugar = value
    }
}

const c = new modernChai()
c.sugar = 3

// Static Members
class ekChai {
    static shopName = 'Chai Point'

    constructor(flavour: string) { }
}

console.log(ekChai.shopName)

// Abstract Classes
abstract class Beverage {
    abstract brew(): void
}

class myChai extends Beverage {
    brew() {
        console.log("Brewing Chai")
    }
}

// Composition
class Heater {
    heat() { }
}

class chaiMaker {
    constructor(private heater: Heater) { }

    make() {
        this.heater.heat
    }
}