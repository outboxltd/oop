
// Question
// write a function that receives an array of numbers and find the 2 numbers that are closest to each other.
// i.e: [1,11,45,67,4,94,62,47] => 45,47

Array_1 = [1, 11, 45, 67, 4, 94, 62, 47];



function find_2_closest(Array_1) {
    var array_gap_between = [];

    for (var i = 0; i < Array_1.length - 1; i++) {
        var gap_between = Math.abs(Array_1[i] - Array_1[i + 1])
        array_gap_between.push(gap_between);
    }
    

    var min_value = Math.min.apply(null, array_gap_between);

    console.log(min_value)



    

}

find_2_closest(Array_1)