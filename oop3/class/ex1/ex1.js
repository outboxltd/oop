class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}

class Cat extends Animal {
    constructor(name, isFfienly) {
        super(name, "cat");
        this.isFfienly = isFfienly;
    }

    describeIM () {
        if (this.isFfienly === true) {
            let Ffienly = "am"
            console.log("i am " + this.name + " and i " + Ffienly + "a frindly cat");
             } else {
                let Ffienly = "am not"
            console.log("i am " + this.name + " and i " + Ffienly + "a frindly cat");
             }
        }   
    
}

let bubu = new Cat("hezi", true);
bubu.describeIM()
