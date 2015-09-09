/**
 The main idea is to count all the occuring characters(UTF-8) in string.
 If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

 What if the string is empty ? Then the result should be empty object literal { }
 */

//creating function with parameter string
function characters(string) {
    //defining variable array for unique items
    var array = [];
    //defining variable arrayCount for amounts of unique items
    var arrayCount = [];
    //defining variable result for structure object={item:amount...}
    var result = {};
    //defining variable count for calculating amount of items
    var count = 0;
    //loop for searching unique items
    for (var i = 0; i < string.length; i++) {
        //searching unique items
        if (string.indexOf(string[i]) >= 0 && array.indexOf(string[i])) {
            //pushing unique item to array
            array.push(string[i]);
        }
    }
    //loop for calculating amount of unique items
    for (var i = 0; i < array.length; i++) {
        for (j = 0; j < string.length; j++) {
            if (array[i] == string[j]) {
                //increasing count
                count++;
            }
        }
        //pushing current count to arrayCount
        arrayCount.push(count);
        //assigning count as 0
        count = 0;
    }
    //loop for filling object result
    for (var i = 0; i < array.length; i++) {
        result[array[i]] = arrayCount[i];
    }
    //returning result
    return result;
}
//invoking function and display result
console.log(characters("abanas"));
