/**
 Task:

 You have to write a function pattern which returns the following
 Pattern(See Examples) upto n rows, where n is parameter.

 Rules/Note:

 If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.
 The length of each line = (2n-1).
 Range of n is (-?,100]
 Examples:

 pattern(5):
     12345
    12345
   12345
  12345
 12345
 pattern(10):

 1234567890
 1234567890
 1234567890
 1234567890
 1234567890
 1234567890
 1234567890
 1234567890
 1234567890
 1234567890
 pattern(15):

 123456789012345
 123456789012345
 123456789012345
 123456789012345
 123456789012345
 123456789012345
 123456789012345
 123456789012345
 123456789012345
 123456789012345
 123456789012345
 123456789012345
 123456789012345
 123456789012345
 123456789012345

 */

//creating function with parameters n
function pattern(n) {
    //defining variable for spaces
    var stringEmpty = "";
    //defining variable for number
    var stringNumber = "";
    //defining variable for one line string
    var string = "";
    //loop for creating string of numbers
    for (var i = 1; i <= n; i++) {
        //defining variable iString for transforming i to string
        var iNumber = i.toString();
        //assigning value of variable stringNumber as sum of string from last
        //symbols of number i
        stringNumber = stringNumber + iNumber[iNumber.length - 1];
    }
    //condition for checking n (>0 or <=0)
    if (n > 0) {
        //if n>0 returning function, which forms stringEmpty
        return (function () {
        //loop for adding new space to stringEmpty
            for (var i = 1; i <= n; i++) {
                for (var j = 2 * n - 1 - n - i + 1; j > 0; j--) {
                    //adding new space to stringEmpty
                    stringEmpty = stringEmpty + " ";
                }
                //forming string (sum of stringEmpty and stringNumber)
                string = stringEmpty + stringNumber;
                //assigning variable stringEmpty as ""
                stringEmpty = "";
                //display result
                console.log(string);
            }
        })();
    } else {
        //if condition for n incorrect, returning ""
        return "";
    }
}
//invoking function
pattern(20);















