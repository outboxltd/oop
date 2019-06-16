$("body").click(function (event) {
    let click_id = event.target.id;
     document.getElementById(click_id).style.visibility = "hidden";

     console.log("the id is " + click_id)
     setTimeout(function(){
        hide_again(click_id);
      }, 1000);
     
});

function hide_again(click_id) {
    document.getElementById(click_id).style.visibility = "visible";

}

$(document).ready(function () {
    $("img").attr("src", "https://i.ibb.co/3py9Qj2/a.jpg");
    $('#card1').css('background-image', 'url(' + dog.image + ')');
    $('#card2').css('background-image', 'url(' + rabbit.image + ')');
    $('#card3').css('background-image', 'url(' + scaryshit.image + ')');
    $('.card4').css('background-image', 'url(' + dog.image + ')');
    $('.card5').css('background-image', 'url(' + rabbit.image + ')');
    $('.card6').css('background-image', 'url(' + scaryshit.image + ')');

        

    // $("#over_card1").click(function () {
    //     $(this).css("visibility", "hidden");
    //  });

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


        }
    }

    console.log(compir);
} // gettheid
