/**
 Создайте функцию find(arr, value), которая ищет в массиве
 arr значение value и возвращает его позицию, если найдено,
 или -1, если не найдено.
 */

//creating array
var array = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
//function for searching value in array
function find(array, value) {
    //defining variable, as number of item, which == value or for display negative result
    var number;
    //loop for searching value in array
    for (var i = 0; i < array.length; i++) {
        //condition for searching value in array
        if (array[i] == value) {
            //assigning number, if value was found
            number = i;
            break;
        } else {
            //assigning number, if value was not found
            number = -1;
        }
    }
    //returning number
    return number;
}
//calling function and display data
console.log(find(array, 5));
