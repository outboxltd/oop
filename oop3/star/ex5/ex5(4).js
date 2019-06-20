class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }
}

let rendi = new Player("rendi");
let mardona = new Player("mardona");


   function play(player) {
        for (let i = 0; i < 3; i++) {

            let random_num = Math.floor(Math.random() * 11);
            document.getElementById("gilad").innerHTML = random_num;
            
            if (player.score == random_num) {
                player.score++ 
                
            }
            console.log("score:" + player.score)
        }

   } 


   play(rendi);
