/**
 Description:

 Deferring a function execution can sometimes save a lot of execution
 time in our programs by postponing the execution to the latest possible
 instant of time, when we're sure that the time spent while executing
 it is worth it.

 Write a method make_lazy that takes in a function (symbol for Ruby)
 and the arguments to the function and returns another function (lambda
 for Ruby) which when invoked, returns the result of the original
 function invoked with the supplied arguments.

 For example:

 Given a function add

 function add (a, b) {
  return a + b;
}
 One could make it lazy as:

 var lazy_value = make_lazy(add, 2, 3);
 The expression does not get evaluated at the moment, but only when
 you invoke lazy_value as:

 lazy_value() => 5
 The above invokation then performs the sum.

 Please note: The functions that are passed to make_lazy may take
 one or more arguments and the number of arguments is not fixed.
 */

//creating function add
function add(a, b) {
    //returning result
    return a + b;
}
//creating function mul
function mul(a, b) {
    //returning result
    return a * b;
}
//creating function power
function power(a, b) {
    //returning result
    return Math.pow(a, b);
}
//creating lazyFunction for invoking some function
function lazyFunction(f) {
    //returning result-some function and displaying result
    return console.log(f);
}
//invoking different functions with their arguments
lazyFunction(add(2, 3));
lazyFunction(mul(2, 4));
lazyFunction(power(3, 3));







