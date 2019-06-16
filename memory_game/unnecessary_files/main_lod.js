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


let dog = new Card("card7","laki","https://cdn1.medicalnewstoday.com/content/images/articles/322/322868/golden-retriever-puppy.jpg","visible")


function hideagine() {
    $(".card1 > img").css("visibility", "visible");
    $(".card2 > img").css("visibility", "visible");
    $(".card3 > img").css("visibility", "visible");
    $(".card4 > img").css("visibility", "visible");
    $(".card5 > img").css("visibility", "visible");
    $(".card6 > img").css("visibility", "visible");
} 


var timeout = 4000;

$(document).ready(function () {

    $("img").attr("src", "https://i.ibb.co/3py9Qj2/a.jpg");

    $("#card_over1").click(function () {
        $(this).css("visibility", "hidden"); 
        setTimeout(hideagine, timeout);
    });

    $(".card2").click(function () {
        $(".card2 > img").css("visibility", "hidden");
        setTimeout(hideagine, timeout);
    });

    $(".card3").click(function () {
        $(".card3 > img").css("visibility", "hidden");
        setTimeout(hideagine, timeout);
    });

    $(".card4").click(function () {
        $(".card4 > img").css("visibility", "hidden");
        setTimeout(hideagine, timeout);
    });

    $(".card5").click(function () {
        $(".card5 > img").css("visibility", "hidden");
        setTimeout(hideagine, timeout);
    });

    $(".card6").click(function () {
        $(".card6 > img").css("visibility", "hidden");
        setTimeout(hideagine, timeout);
    });

    });




$("#random").click(function() {
    let rando1 = Math.floor(Math.random() * 6);
    let rando2 = Math.floor(Math.random() * 6);
    let rando3 = Math.floor(Math.random() * 6);
    let rando4 = Math.floor(Math.random() * 6);
    let rando5 = Math.floor(Math.random() * 6);
    let rando6 = Math.floor(Math.random() * 6);
    $(".card_main_1").addClass("order-" + rando1);
    $(".card_main_2").addClass("order-" + rando2);
    $(".card_main_3").addClass("order-" + rando3);
    $(".card_main_4").addClass("order-" + rando4);
    $(".card_main_5").addClass("order-" + rando5);
    $(".card_main_6").addClass("order-" + rando6);
});

var compir = [];
var n = -1;

function gettheid(x) {
    if (compir.length < 2) {
        n++
        compir[n] = $($(x)).attr("id");
        if (compir[0] == compir[1]) {
            alert('good memory')      
        } else {
            // $("#card_over1").css("visibility", "visible");
           

        }
    }

    console.log(n);
    console.log(compir);
} // gettheid



$("body").click(function(event) {
    let click_id=event.target.id;
        console.log("i clicked " + click_id)
    });