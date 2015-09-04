/**
 Необходимо написать функцию, которая будет принимать на вход массив
 чисел и возвращать самое большое.

 getMaxNumber([1,30,40,2,7]); // 40
 getMaxNumber([1,15,-20,2,-7]); // 15
 */

//creating arrays
var arrayFirst = [1, 30, 40, 2, 7];
var arraySecond = [1, 15, -20, 2, -7];
//creating function for searching max number
function maxNumber(array) {
    //defining variable max and assigning it's value as 1st item of array
    var max = array[0];
    //loop vor checking array's items
    for (var i = 0; i < array.length; i++) {
        //condition for searching max number
        if (array[i] > max) {
            //if array's item bigger than max, max assigning this item
            max = array[i];
        }
    }
    //returning result-max
    return max;
}
//colling function for each array and display results
console.log(maxNumber(arrayFirst));
console.log(maxNumber(arraySecond));
