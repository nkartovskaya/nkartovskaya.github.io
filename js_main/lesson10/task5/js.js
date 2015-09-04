/**
 Write a JavaScript function that accepts a string as a parameter and find the
 longest word within the string. Go to the editor

 Example string: Web Development Tutorial

 Expected Output: Development
 */

//creating function
function longestWord(string) {
    //defining variable stringArray and assigning value as string splited by " "
    var stringArray = string.split(" ");
    //defining variable maxLength and assigning value as length of first item of array stringArray
    var maxLength = stringArray[0].length;
    //defining variable maxLengthWordNumber and assigning value as 0 (number of first item)
    var maxLengthWordNumber = 0;
//loop for searching item with max length
    for (var i = 0; i < stringArray.length; i++) {
        //condition for searching max length item
        if (stringArray[i].length > maxLength) {
            //if string array item's length bigger then maxLength, maxLength assigning as this item
            //maxLengthWordNumber assigning as a number of such item
            maxLength = stringArray[i];
            maxLengthWordNumber = i;
        }
    }//returning result=item with number maxLengthWordNumber
    return stringArray[maxLengthWordNumber];
}
//calling function and display result
console.log(longestWord("Web Development Tutorial"));

/*
 animal = {
 //properties:
 height:0,
 weight:0,
 color:0,
 //methods:
 eating:0
 };

 cat={
 //properties:
 height:30,
 weight:3,
 color: ["black", "white", "brown"],
 clutches: "sharp",
 //methods:
 eating:
 meow
 }
 dog={
 properties:
 height
 weight
 color
 methods:
 eating
 woof
 hunting
 }
 fish={
 properties:
 height
 weight
 color
 gills
 methods:
 eating
 swimming
 }


 */
