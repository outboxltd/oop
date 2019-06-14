function hideagine() {
    $("#card_over1").css("visibility", "visible");
} 


$(document).ready(function () {
    $("img").attr("src", "https://i.ibb.co/3py9Qj2/a.jpg");

    $(".card1").click(function () {
        $("#card_over1").css("visibility", "hidden"); // not visible
        setTimeout(hideagine, 2000);
    });

    $(".card2").click(function () {
        $("#card_over2").css("visibility", "hidden");
    });

    $(".card3").click(function () {
        $("#card_over3").css("visibility", "hidden");
    });

    $(".card4").click(function () {
        $("#card_over4").css("visibility", "hidden");
    });

    $(".card5").click(function () {
        $("#card_over5").css("visibility", "hidden");
    });

    $(".card6").click(function () {
        $("#card_over6").css("visibility", "hidden");
    });
});




$("#random").click(function () {
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
            $("#card_over1").css("visibility", "visible");
        }
    }

    console.log(n);
    console.log(compir);
} // gettheid
