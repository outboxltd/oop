$(".container").click(function (event) {
    let click_id = event.target.id;
     document.getElementById(click_id).style.visibility = "hidden";

     setTimeout(function(){
        hide_again(click_id);
      }, 2000);
      
      console.log("the id from eventlistener is : " + click_id);
});




function hide_again(click_id) {
    document.getElementById(click_id).style.visibility = "visible";
}

$(document).ready(function () {
    $("img").attr("src", "https://bit.ly/2wYsoJQ");
    $('#card1').css('background-image', 'url(' + dog.image + ')');
    $('#card2').css('background-image', 'url(' + rabbit.image + ')');
    $('#card3').css('background-image', 'url(' + scaryshit.image + ')');
    $('.card4').css('background-image', 'url(' + dog.image + ')');
    $('.card5').css('background-image', 'url(' + rabbit.image + ')');
    $('.card6').css('background-image', 'url(' + scaryshit.image + ')');

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
    console.log($($(x)).attr("id"));
}


function gettheid(x) {
    if (compir.length < 2) {
        n++
        let the_id = $($(x)).attr("id");
        compir[n] = the_id;
        let make_it_over = ("over_" + the_id)
 
        if (compir[0] == compir[1]) {
            console.log("good memo ")
           
            setTimeout(function(){
                keep_show1("over_" +compir[0]);
              }, 3000);

              setTimeout(function(){
                keep_show2("over_" +compir[1]);
              }, 3000);
              

            console.log("over_" +compir[0])
            console.log("over_" +compir[1])

        } else {
            // compir.pop();
        } 
    } 

    console.log(compir);

    function keep_show1(click_id) {
        document.getElementById(click_id).style.visibility = "hidden";
    }

    function keep_show2(click_id) {
        document.getElementById(click_id).style.visibility = "hidden";
    }

} 



