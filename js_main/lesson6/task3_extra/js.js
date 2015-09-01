/**
 Написать функцию обратной сортировки reverseSort(arr).
 Которая сортирует численный массив от большего к
 меньшему.
 var arr = [5, 2, 1, -10, 8];
 console.log( reverseSort(arr) ); // 8, 5, 2, 1, -10
 */

//---------VERS1-------------------
//creating array
var arr = [5, 2, 1, -10, 8];
//function for revers sorting
function reversSort(arr) {
    //defining variable temp for exchanging items
    var temp;
    //loop for decreasing part of array, which is checked
    for (var i = 0; i < arr.length; i++) {
        //loop for comparison items. Every loop iteration pushes max item to end of array
        //new iteration uses array without this item, thereby sorted items build up in the
        //end of array. After all iteration array is sorted
        for (var j = 0; j < arr.length - i - 1; j++) {
            //condition for comparison of current and next items
            if (arr[j] < arr[j + 1]) {
                //exchanging items if condition is executed
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    //returning array
    return arr;
}
//calling function and display result
console.log(reversSort(arr));

//------------VERS2-------------------
//creating function for sorting array
//parameters a, b
function reversSortNew(a, b) {
    //returning result
    return b - a;
}
//sorting array bu function reversSortNew
arr.sort(reversSortNew);
//display result
console.log(arr);

