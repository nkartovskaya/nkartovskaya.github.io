/**
 Write a JavaScript function which accepts an argument and returns the type.
 Note: There are six possible values that typeof returns: object, boolean,
 function, number, string, and undefined.
 */

//creating function for searching type of argument
function typeOfArgument(item) {
    //returning result display type of data
    return console.log(typeof item);
}

//calling function with different types of arguments
typeOfArgument();
typeOfArgument(true);
typeOfArgument(15);
typeOfArgument("string");
typeOfArgument(object = {});
