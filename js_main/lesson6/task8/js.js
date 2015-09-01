/**
 Fellow code warrior, we need your help! We seem to have lost one of our array
 elements, and we need your help to retrieve it! Our array, superImportantArray,
 was supposed to contain all of the integers from 0 to 9 (in no particular order),
 but one of them seems to be missing.

 Write a function called getMissingElement that accepts an array of unique
 integers between 0 and 9 (inclusive), and returns the missing element.

 Examples:

 getMissingElement( [0, 5, 1, 3, 2, 9, 7, 6, 4] ) // returns 8
 getMissingElement( [9, 2, 4, 5, 7, 0, 8, 6, 1] ) // returns 3
 */

var array = [9, 2, 4, 5, 7, 0, 8, 6, 1];
function getMissingElement(array) {
    var temp = 0;
    //loop for decreasing part of array, which is checked
    for (var i = 0; i < array.length; i++) {
        //loop for comparison items. Every loop iteration pushes max item to end of array
        //new iteration uses array without this item, thereby sorted items build up in the
        //end of array. After all iteration array is sorted
        for (var j = 0; j < array.length - i - 1; j++) {
            //condition for comparison of current and next items
            if (array[j] > array[j + 1]) {
                //exchanging items if condition is executed
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    //loop for comparison index i (0,1,2,3...9) and sorted array (0,1,2,3...9)
    for (var i = 0; i < array.length; i++) {
        //checking == items of array and index i, if they are not equal, i is missing item
        if (array[i] != i) {
            //returning missing item
            return i;
            //breaking loop
            break;
        }
    }
}
//calling functions and display result
console.log(getMissingElement(array));


