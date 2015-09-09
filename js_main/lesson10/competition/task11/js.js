/**
 If we list all the natural numbers below 10 that are multiples of 3 or 5,
 we get 3, 5, 6 and 9. The sum of these multiples is 23.

 Finish the solution so that it returns the sum of all the multiples
 of 3 or 5 below the number passed in.
 */

//creating function with parameter number
function solution(number) {
    //defining variable sum
    var sum = 0;
    //loop for checking whether number multiples of 3 or 5
    for (var i = 1; i < number; i++) {
        //condition for checking whether number multiples of 3 or 5
        if (i % 3 == 0 || i % 5 == 0) {
            //if condition is correct, i plus sum
            sum += i;
        }
    }
    //returning result
    return sum;
}
//invoking function and display result
console.log(solution(10));
console.log(solution(25));