/**
 Given a string, swap the case for each of the letters.

 e.g. CodEwArs --> cODeWaRS

 */
//creating function for changing case
function caseString(string) {
    //defining variable stringTemp for saving string, which is transformed to UpperCase
    var stringTemp = string.toUpperCase();
    //defining variable string result for saving result string
    var stringResult = "";
    //loop for comparison string and stringTemp, if symbols are equal, this symbol must
    //be transformed toLowerCase
    for (var i = 0; i < string.length; i++) {
        //condition for comparison strings
        if (string[i] === stringTemp[i]) {
            //if condition is correct, symbol must be transformed toLowerCase
            //and saved in string result
            stringResult = stringResult + stringTemp[i].toLowerCase();
        } else {
            //if condition is incorrect, symbol must be saved in stringResult
            // without changing
            stringResult = stringResult + stringTemp[i];
        }
    }
    //retuning result-stringResult
    return stringResult;
}
//invoking function and display result
console.log(caseString("CodEwArs"));
