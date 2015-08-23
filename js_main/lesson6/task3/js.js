/**
 Необходимо отсортировать массив в случайном порядке используя метод sort.

 var arr = [1, 2, 3, 4, 5];

 arr.sort(ваша функция);

 console.log( arr ); // элементы в случайном порядке, например [3,5,1,2,4]
 */

//creating array
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//function for random sorting
function arraySort() {
    if (Math.random() > 0.5) {
        return 1;
    } else {
        return -1;
    }
}
//sorting array
array.sort(arraySort);
//display data
console.log(array);


//creating array
var arrayNew = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//function for random sorting
function arrayNewSort(array) {
    //loop for sorting array
    for (var i = 0; i < array.length; i++) {
        //calculating random number from 0 to array.length
        var number = array.length - 1 - Math.floor(Math.random() * 10);
        //exchange item with random number and item with number i
        var temp = array[i];
        array[i] = array[number];
        array[number] = temp;
    }
    //returning sorted array
    return array;
};
//calling function and display array
console.log(arrayNewSort(array));
