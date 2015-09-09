/**
 A pangram is a sentence that contains every single letter of the alphabet
 at least once. For example, the sentence "The quick brown fox jumps over
 the lazy dog" is a pangram, because it uses the letters A-Z at least once
 (case is irrelevant).

 Given a string, detect whether or not it is a pangram. Return True if it
 is, False if not. Ignore numbers and punctuation.

 */

//creating function for checking pangram
function pangram(sentence) {
    //defining variable abs - array with alphabet
    var abc = ["E", "T", "A", "O", "I", "N", "S", "H", "R", "D", "L", "C", "U", "M", "W", "F", "G", "Y", "P", "B", "V", "K", "X", "J", "Q", "Z"];
    //defining variable sentenceTemp for transforming sentence
    var sentenceTemp = sentence.split(" ").join("").split("");
    //defining variable result and assigning value as false
    var result = false;
    //loop for comparison of two array: sentence and alphabet
    for (var i = 0; i < abc.length; i++) {
        for (var j = 0; j < sentenceTemp.length; j++) {
            //condition for checking
            if (abc[i].toLowerCase() == sentenceTemp[j].toLowerCase()) {
                //if condition is correct, result becomes true and break loop
                result = true;
                break;
            } else {
                result = false;
            }
        }
    }
    //returning result
    return result;
}
//invoking function and display result
console.log(pangram("The quick brown fox jumps over the lazy dog"));
console.log(pangram("The quick brown fox jumps"));