// Create a webpage that has nothing in it 15 seconds after loading the page, add some text to it saying “Thank you for waiting! No one in their right mind would wait for so long for a webpage to load”

var shit2say = "Thank you for waiting! No one in their right mind would wait for so long for a webpage to load";



var sayToda = function sayToda() {

    document.getElementById("Thanku").innerHTML = shit2say;

}


var alertTimeout = setTimeout(sayToda, 15000);
// Thanku