/**
 You have to create a function named reverseIt.

 Write your function so that in the case a string or a number is passed in as
 the data , you will return the data in reverse order. If the data is any
 other type, return it as it is.

 Examples of inputs and subsequent outputs:

 "Hello" -> "olleH"

 "314159" -> "951413"

 [1,2,3] -> [1,2,3]
 */

//creating function with parameter arg
function reverseIt(arg) {
    //defining variable result
    var result;
    //checking type of arg
    if (typeof arg == "number") {
        //if type of arg is number: transforming to string, spliting,
        // reversing, joining and transforming to number
        result = parseInt(arg.toString().split("").reverse().join(""));
    } else if (typeof arg == "string") {
        //if type of arg is string: spliting, reversing, joining
        result = arg.split("").reverse().join("");
    } else {
        //if type of agr is different, result = arg
        result = arg;
    }
//returning result
    return result;
}
//invoking function
console.log(reverseIt("Hello"));
console.log(reverseIt(314159));
console.log(reverseIt([1, 2, 3]));
