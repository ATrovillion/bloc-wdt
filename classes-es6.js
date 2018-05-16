// Using the Clothes class we previously created, create a shirt class that extends the Clothes class. Don't forget the super().

var Clothes = class {
    constructor(name, size, price){
        this.name = name;
        this.size = size;
        this.price = price;
    }

    wearClothes() {
        console.log("Now I'm warm, because those " + this.name + " are so great, and they fit me well because they're size " + this.size + ", plus they only cost me " + this.price + ".");
    };
}
// add code below

class Shirt extends Clothes {
    constructor(name, size, price, neckSize, sleeveLength) {
        super(name, size, price);
        this.neckSize = neckSize;
        this.sleeveLength = sleeveLength;
    }
}

var fuzzySweaters = new Clothes('fuzzy sweaters', 'XL', 'twenty dollars');
fuzzySweaters.wearClothes();

var collaredShirts = new Shirt('collared shirts', 'extra large', 'fifty dollars', 16.5, 36);
collaredShirts.wearClothes();
