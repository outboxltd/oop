class Drink {
    constructor(title, isHot) {
        this.title = title;
        this.isHot = isHot;
    }
}

class Coffee extends Drink {
    constructor(title, isHot, number_of_coffee_shots, with_milk) {
        super(title, isHot);
        this.number_of_coffee_shots = number_of_coffee_shots;
        this.with_milk = with_milk;
    }

    // to make espresso: add 1 coffee shots and don't add milk.

    Instructions() {
        let milk;
        if (this.with_milk === true) {
            milk = "add milk"


        } else {
            milk = "don't add milk"


        }
        console.log("to make espresso " + this.title + " add " + this.number_of_coffee_shots + " coffee shots" + milk);


    }

}

let nespreso = new Coffee("arabica", true, 1, false);
nespreso.Instructions()
