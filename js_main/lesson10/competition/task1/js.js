/**
 Write a single function that can be invoked by either


 sum(2,3); //5
 //or
 sum(2)(3); //5
 Both of these examples should return the sum of the 2 numbers.
 */


//creating function sum with parameters x,y
function sum(x, y) {
    //returning result
    return x + y;
}
//invoking function and display result
console.log(sum(2, 3));