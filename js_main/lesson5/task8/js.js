/**
 Создайте фунцию filterRange(arr, a, b), которая принимает
 массив чисел arr и возвращает новый массив, который
 содержит только числа из arr из диапазона от a до b.
 То есть, проверка имеет вид a ? arr[i] ? b.
 Функция не должна менять arr.
 var arr = [5, 7, 4, 8, 3, 0];
 var filtered = filterRange(arr, 3, 5);
 // filtered = [5, 4, 3];
 // arr = [5, 7, 4, 8, 3, 0];
 */


//creating array
var array = new Array(15, 16, 54, 1, 80, 23, 987, 12, 56, 11, 1, 5);
//creating new empty array
var newArray = new Array();
//function for searching items between min and max in array
function filterRange(array, min, max) {
    //loop for searching items between min and max in array
    for (var i = 0; i < array.length; i++) {
        //checking items and saving items between min and max in newArray
        if (array[i] >= min && array[i] <= max) newArray[i] = array[i];
    }
    //returning newArray
    return newArray;
}
//calling function and display data
console.log(filterRange(array, 50, 100));

