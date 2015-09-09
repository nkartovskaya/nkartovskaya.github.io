/**
 Your task is to make a function that can
 take any non-negative integer as a argument and return it with it's digits
 in descending order. Descending order means that you take the highest digit
 and place the next highest digit immediately after it.

 Examples:

 Input: 145263 Output: 654321

 Input: 1254859723 Output: 9875543221
 */

//creating function with parameter number
function sortNumber(number) {
    //defining variable for saving result
    var numberResult;
    //defining variable for sorting number and assigning value as number, which was
    //transformed to string and splited by ""
    var numberArray = number.toString().split("");
    //sorting array number Array with function, which gives descending order
    numberArray = numberArray.sort(function (a, b) {
        if (a > b) {
            return -1;
        } else if (b > a) {
            return 1;
        } else {
            return 0;
        }
    });
    //number result, it is numberArray, joined by "" and transformed to number
    numberResult = parseInt(numberArray.join(""));
    //returning result
    return numberResult;
}
//invoking function and display result
console.log(sortNumber(1254859723));
