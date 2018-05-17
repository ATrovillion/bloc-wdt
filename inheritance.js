//Following the examples above, create a new prototype called Product and three instances of it.
//Each instance should be a separate product. (for example, a shirt, a jacket, and a scarf).

class Product {
    constructor (name, price) {
        this.name = name;
        this.price = price;
    }
    
    getName() {
        return this.name;
    }

    getPrice() {
        return this.price;
    }
}

class Clothes extends Product {
    constructor(name, price, size, style) {
    super(name, price)
    this.size = size;
    this.style = style;
    }

    getName() {
        return "This is the kind of clothing I like to wear: " + super.getName();

    }

    getPrice() {
        return "This is how much I pay for my clothing: " + super.getPrice();
    }

}

let shirt = new Clothes('shirt', '$50');

let jacket = new Clothes('jacket', '$100');

let scarf = new Clothes('scarf', '$25');

console.log(shirt.getName());
console.log(shirt.getPrice());
console.log(jacket.getName());
console.log(jacket.getPrice());
console.log(scarf.getName());
console.log(scarf.getPrice());






