/**
 Напишите функцию toCamelCase(str), которая преобразует
 строки вида «my-short-string» в «myShortString».
 То есть, дефисы удаляются, а все слова после них получают
 заглавную букву.
 Например:
 toCamelCase('background-color'); // 'backgroundColor';
 toCamelCase('list-style-image'); // 'listStyleImage';
 toCamelCase('-webkit-transition'); // 'WebkitTransition';
 P.S. Вам пригодятся методы строк charAt, split и toUpperCase.
 */

//creating function for transforming string to camel case
function toCamelCase(string) {
    //defining variable stringArray and separation string with separator "-"
    var stringArray = string.split("-");
    //loop for transforming item of stringArray
    for (var i = 0; i < stringArray.length; i++) {
        //checking first item is it empty string (for strings, which don't start from letter
        if (stringArray[i] == "") {
            //shifting first item if condition is executed
            stringArray.shift();
        }
        //checking i for transforming items from second item
        if (i > 0) {
            //transforming items: first letter transforms to upper case
            stringArray[i] = stringArray[i].charAt(0).toUpperCase() + stringArray[i].substring(1);
            //joining items of array to string and saving string in variable newString
            var newString = stringArray.join("");
        }
    }
    //returning newString
    return newString;
}
//calling function and display result
console.log(toCamelCase("list-style-image"));
