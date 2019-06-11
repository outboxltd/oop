// Create a 2D sorted array arr10 with numbers from 1-10. (the numbers should be sorted from 1-10:
//     1,2,3,4,5,6,7,8,9,10).
//     you need to build the array such that this code will be true:
//     arr10[0][1] === 2
//     arr10[1][2] === 5
//     arr10[2][0] === 7
//     arr10[3][0] === 8
//     arr10[3][2] === 10


var arr10 = [
    [1,2,1],    
    [1, 1, 5],
    [7, 1, 1],
    [8, 1, 10],
];


// 2. Create a function that prints all the numbers in the array.
// Your output should be: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.

var cool_array =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function get_the_number_in_array(cool_array) {
    
    for (var i = 0; i < cool_array.length; i++) {
        // console.log(cool_array[i])
        
    }

}
get_the_number_in_array(cool_array)

// 3. Create a function getRowsSum that returns the sum of each row in the array. Return these sums in an array.

function getRowsSum (arr10) {
    for (var i = 0; i < arr10.length; i++) {    
    var each_arr = arr10[i]

    // console.log(each_arr)

    function getSum(total, num) {
        return total + num;
      }
     
      console.log(each_arr.reduce(getSum))
 
    }

}



getRowsSum(arr10);