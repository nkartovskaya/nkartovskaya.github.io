/**
 You must create a function, spread, that takes a function and a list of arguments
 to be applied to that function. You must make this function return the result
 of calling the given function/lambda with the given arguments.

 eg:

 spread(someFunction, [1, true, "Foo", "bar"] )
 // is the same as...
 someFunction(1, true, "Foo", "bar")
 */

//crating function spread
function spread(f) {
    //returning result
    return f.apply(f, [].slice.call(arguments, 1));
}
//creating function sum - sum of arguments
function sum() {
    return [].reduce.call(arguments, function (a, b) {
        return a + b;
    });
}
//invoking function spread with different lists of arguments
console.log(spread(sum, 1, true, "Foo", "bar"));//2Foobar
console.log(spread(sum, 1, 2, "true", "123", "Foo", "bar"));//3true123Foobar



