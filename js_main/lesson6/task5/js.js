/**
 * Created by ProFi on 22.08.2015.Палиндром - это строка которая читается
 * с обоих сторон одинаково. Например: Анна, оно, А роза упала на лапу Азора.

 Необходимо написать функцию isPal(string) которая возвращает
 true или false в зависимости от того является ли строка палиндромом или нет.

 console.log(isPal('Anna')); // true
 console.log(isPal('А роза упала на лапу Азора')); //true
 console.log(isPal('Вася')); //false
 console.log(isPal('12321')); //true
 console.log(isPal('123212')); //false
 */

//creating function for checking if a string is a palindrome
function isPal(string) {
//creating array by method split
    var newString = string.split(" ");
    //joining items of array by method join
    newString = newString.join("");
    //transforming new string to lower case for comparison characters
    newString = newString.toLowerCase();
    //defining variable result and assigning it value "palindrome"
    var result = "palindrome";
    //condition for strings with odd length of string
    if (newString.length % 2 > 0) {
        //loop for comparison characters, index i starts from 0(1st character of string),
        //index j starts from length-1 (last character of string)
        for (var i = 0, j = newString.length - 1; i < Math.ceil(newString.length / 2), j > Math.floor(newString.length / 2); i++, j--) {
            //if at list 1 pair of characters doesn't match, result becomes "not palindrome"
            //and loop must be finished
            if (newString[i] != newString[j]) {
                result = "not palindrome";
                break;
            }
        }
        //condition for string with even length of string
    } else {
        //loop for comparison characters, index i starts from 0(1st character of string),
        //index j starts from length-1 (last character of string)
        for (var i = 0, j = newString.length; i < newString.length, j > newString.length; i++, j--) {
            //if at list 1 pair of characters doesn't match, result becomes "not palindrome"
            //and loop must be finished
            if (newString[i] != newString[j]) {
                result = "not palindrome";
                break;
            }
        }
    }
    //returning result
    return result;
}
//calling function and display result
console.log(isPal("A roza upala na lapu Azora"));