/**
 Есть массив строк arr. Создайте массив arrSorted — из тех же элементов,
 но отсортированный.

 Исходный массив не должен меняться.

 var arr = ['HTML', 'JavaScript', 'CSS'];

 // ... ваш код ...

 console.log( arrSorted ); // CSS, HTML, JavaScript
 console.log( arr ); // HTML, JavaScript, CSS (без изменений)
 */

//defining variable stringArray - array of strings
var stringArray = ["Return", "the", "Missing", "Element", "Add", "Property"];
//defining variable stringArraySorted - array for sorted stringArray
var stringArraySorted = stringArray;
//display stringArray
console.log(stringArray);
//display sorted array stringArraySorted
console.log(stringArraySorted.sort());

//defining variable stringArray - array of strings
var stringArray = ["Return", "the", "Missing", "Element", "Add", "Property"];
//defining variable stringArraySorted - array for sorted stringArray
var stringArraySorted = stringArray;
//loop for sorting array
for (var i = 0; i < stringArraySorted.length - 1; i++) {
    //defining variable minNumber Array for saving index of min item, starts from i
    var minNumberArray = i;
    //loop for array, which is not sorted yet
    for (var j = i + 1; j < stringArraySorted.length; j++) {
        //condition, whether item bigger then min item
        if (stringArraySorted[j] < stringArraySorted[minNumberArray]) {
            //if condition is executed, number of min item becomes j
            minNumberArray = j;
        }
    }
    //defining variable temp for changing items: min item and item with number i
    var temp = stringArraySorted[minNumberArray];
    stringArraySorted[minNumberArray] = stringArraySorted[i];
    stringArraySorted[i] = temp;
}
//display result - sorted array
console.log(stringArraySorted);
