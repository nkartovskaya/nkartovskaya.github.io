/*
 Напишите функцию, которая принимает на вход строку и возвращает
 ее неизменной если ее длина не превышает 20 символов. Если длинна
 больше 20, то обрезает строку и добавляет в конец строки '...'
 */

//function for cutting string
function cutString(string) {
    //defining variables - new string with '...'
    var cutString;
    //checking
    if (string.length>20) {
        cutString=string.substring(0,20)+'...';
    }
    console.log(cutString);
}
cutString("Lorem ipsum dolor sit amet, consectetur adipisicing elit, " +
    "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");