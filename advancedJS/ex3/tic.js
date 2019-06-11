var num = 1;

var tictik_by_sec = function tictik() {
    num = num + 1;
    document.getElementById("print_num").innerHTML = num;
   
}


var kaki = setInterval(function () { tictik_by_sec() }, 100);

function myStopFunction() {
    clearInterval(kaki);
}

