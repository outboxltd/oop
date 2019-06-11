var arr = [1, 2, 5, 6, 3, 2];
var flag = false;

for (var i = 0; i < arr.length; i++) {
    for (var g=0; g < arr.length; g++) {

      if (i !== g && arr[i] === arr[g]){
        flag =  true;
}
    }
}

if (flag) {
    console.log("good")
} else {
    console.log("bed")

}