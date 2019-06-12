class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }

    didWin() {
        if (this.score > 30) {
            return true;
        } else {
            return false;
        }
    }

    checkifplayerwon() {
        if (this.didWin() === true) {
            console.log("he won")
        } else {
            console.log("he lost")
        }
    }


}

let rendi = new Player("rendi");
rendi.score = 32;


// rendi.didWin()
rendi.checkifplayerwon()


