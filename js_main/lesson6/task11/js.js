/**
 Make the sum() function return the sum of the values in the passed in array.
 Your solution must use the reduce() function of the built-in javascript Array
 object. If you're not familiar with reduce(), reading over the documentation may help.

 function sum(array) {
  // Use array.reduce() to find and return the
  // sum of the values in array.
}
 For example:

 var someNumbers = [1,2,3,4,5,6,7,8,9,10];

 sum(someNumbers); // should return 55
 */
//creating array
var someNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//defining variable result and calculating result with function
var result = someNumbers.reduce(function (sum, current) {
 //returning result
    return sum + current;
}, 0);
//display result
console.log(result);