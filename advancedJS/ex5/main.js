// Create a function that sums up numbers in a continuous way. Every time it will add the new number to the previous
// sum.
// The function receives one parameter - number, and returns the continuous sum.
// The initial value to sum will be zero such that:


var add = (function () {
    var counter = 0;
    return function () {
        counter += 1;
        return counter;
    }
  })();
  
  function myFunction(){
    document.getElementById("stam").innerHTML = add();
  }