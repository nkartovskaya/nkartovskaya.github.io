/**
 Write a JavaScript function that returns a passed string with letters
 in alphabetical order. Go to the editor

 Example string: webmaster

 Expected Output: abeemrstw

 Assume punctuation and numbers symbols are not included in the passed string.
 */

//creating function for transforming string to alphabetical order
function sortString(string) {
    //defining var resultString and assigning value as string,
    // separated by "", sorted and joined by ""
    var resultString = string.split("").sort().join("");
    //returning resultString
    return resultString;
}
//calling function and display result
console.log(sortString("webmaster"));

