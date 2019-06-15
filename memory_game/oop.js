class Card {
    constructor(id,name, image,visibility) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.visibility = visibility;
    }
    sayhello() {
        alert("hi " + this.name)
    }
}


let dog = new Card("1","laki","https://i.ibb.co/cJ0yfdZ/bg1.jpg","visible")
let rabbit = new Card("2","rabtt","https://i.ibb.co/5rQq4Qh/bg2.jpg","visible")

let scaryshit =new Card("3","kaki","https://i.ibb.co/TBRKpmX/bg3.jpg","visible")