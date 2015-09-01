/**
 We want to create a function, which returns an array of functions,
 which return their index in the array. For better understanding, here an example:

 var callbacks = createFunctions(5); // create an array, containing 5 functions

 callbacks[0](); // must return 0
 callbacks[3](); // must return 3

 We already implemented that function, but when we actually run the code,
 the result doesn't look like what we expected. Can you spot, what's
 wrong with it? A test fixture is also available
 */

//creating function for adding 5 functions to array
function createFunctions(n) {
    //creating array for 5 functions
    var array = [];
    //loop for adding functions
    for (var i = 0; i < 5; i++) {
        //function expression, defining variable arrayFunction, argument x
        var arrayFunction = (function (x) {
//returning function, which has to display number of item
            return function () {
                //display number of item, number = x
                console.log(x);
            };
            //calling function for display number
        })(i);
        //adding next function by method push
        array.push(arrayFunction);
    }
    //returning array
    return array;
}
//defining variable callbacks, assigning value as function createFunction with n=5
var callbacks = createFunctions(5);
//calling item of array and calling function
callbacks[0]();
callbacks[1]();
callbacks[2]();
callbacks[3]();


