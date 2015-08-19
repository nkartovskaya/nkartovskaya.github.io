/**
 Написать функцию которая принимает на вход массив и
 возвращает случайное значение из этого массива.
 */

//creating array
var array = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
//function for choosing random item in array
function randomItem(array) {
    //returning random item
    return array[Math.floor(Math.random() * 10)];
}
//calling function and display random item
console.log(randomItem(array));
