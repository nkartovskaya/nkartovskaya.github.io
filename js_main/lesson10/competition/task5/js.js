/**
 Given an array, find the duplicates in that array, and return a new array
 of those duplicates.

 Note: numbers and their corresponding string representations should not be
 treated as duplicates (i.e., '1' !== 1).
 */

//creating function
function duplicate(array) {
    //defining variable arrayResult-new Array for duplicates
    var arrayResult = [];
    //two loops for checking duplicates
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            //checking array
            if (array[i] == array[j] && i != j) {
                //if items are equal pushing items ti arrayResult
                arrayResult.push(array[i]);
                arrayResult.push(array[j]);
            }
        }
    }
    //returning result arrayResult
    return arrayResult;
}
//invoking function and display result
console.log(duplicate(["1", 5, "String", 15, 89, 1, "String", "Number", 0, 100]));

