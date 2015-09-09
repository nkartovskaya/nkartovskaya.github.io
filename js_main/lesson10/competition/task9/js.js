/**
 The function 'fibonacci' should return an array of fibonacci numbers.
 The function takes a number as an argument to decide how many no. of
 elements to produce. If the argument is less than or equal to 0 then
 return empty array

 Example:

 fibonacci(4); // should return [0,1,1,2]
 fibonacci(-1); // should return []
 */

//creating function
function fibonacci(n) {
    //defining variable arrayFibonacci
    var arrayFibonacci = [];
//condition for n>0
    if (n > 0) {
        //defining 1st and 2nd items
        arrayFibonacci[0] = 1;
        arrayFibonacci[1] = 1;
        //loop for calculating other numbers
        for (var i = 2; i < n; i++) {
            //next number = sum of two previous numbers
            arrayFibonacci[i] = arrayFibonacci[i - 1] + arrayFibonacci[i - 2];
        }
    }
    //returning result
    return arrayFibonacci;
}
//invoking function and display result
console.log(fibonacci(4));
console.log(fibonacci(-1));
console.log(fibonacci(10));


