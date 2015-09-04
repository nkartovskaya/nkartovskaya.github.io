/**
 Write a JavaScript function that accepts a string as a parameter and converts
 the first letter of each word of the string in upper case. Go to the editor

 Example string: the quick brown fox

 Expected Output: The Quick Brown Fox
 */

//creating function
function firstLetterUpperCase(string) {
    //defining variable stringArray and assigning value as string splited by " "
    var stringArray = string.split(" ");
    //loop for checking array's items
    for (var i = 0; i < stringArray.length; i++) {
        //transforming first letter of each word to upper case
        stringArray[i] = stringArray[i].charAt(0).toUpperCase() + stringArray[i].substring(1);
    }
    //defining variable stringResult and joining array by " "
    var stringResult = stringArray.join(" ");
    //returning result
    return stringResult;
}
//calling function and display result
console.log(firstLetterUpperCase("the quick brown fox"));
