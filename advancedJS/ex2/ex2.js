function getTime() {
    var d = new Date();
    var hours = d.getUTCHours()
    var minuts = d.getUTCMinutes();
    var Seconds = d.getUTCSeconds();
    var fulltime = (hours + 3) + ":" + minuts + ":" + Seconds;
    document.getElementById("time_in_html").innerHTML = "the time is: " + fulltime;
}





setInterval(function(){ getTime() }, 1000);

