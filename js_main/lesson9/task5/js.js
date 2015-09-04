/**
 You must create a function, spread, that takes a function and a list of arguments
 to be applied to that function. You must make this function return the result
 of calling the given function/lambda with the given arguments.

 eg:

 spread(someFunction, [1, true, "Foo", "bar"] )
 // is the same as...
 someFunction(1, true, "Foo", "bar")
 */

function spread(f, arg1, arg2, arg3, arg4) {
return f.apply(f,[].slice.call(arguments,1));
}

function mul(arg1, arg2, arg3, arg4) {
    return [].reduce.call(arguments, function(a,b) {
        return a+b;
    })
}
console.log(spread(mul, 1, true, "Foo", "bar"));


