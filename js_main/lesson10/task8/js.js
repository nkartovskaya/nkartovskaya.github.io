/**
 Имеется массив css классов со старницы.

 var arr = ['link', 'menu', 'menu__item', 'menu__item', 'header', 'link', 'footer', 'sidebar', 'link' ... ];
 Необходимо из этого массива получить массив с уникальными именами классов
 (без повторений) отсортированный по частоте использования (наиболее часто
 используемые - впереди).

 Если классы используются одинаковое количество раз - между ними не важно
 какой будет первее.

 result = ['link', 'menu__item', 'menu', 'header', 'footer', 'sidebar', ... ];
 */

//creating array
var arr = ['link', 'menu', 'menu__item', 'menu__item', 'header', 'link', 'footer', 'sidebar', 'link'];
//defining variable result for unique items
var result = [];
//defining variable count for amounts of unique items
var count = [];
//defining variable resultObject as result
var resultObject = [];
//creating variable newResult for final result
var finalResult = [];
//creating function
function amountUniqueItems() {
    //loop for searching unique items
    for (var i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) >= 0 && result.indexOf(arr[i]) == -1) {
            //pushing unique item to array result
            result.push(arr[i]);
        }
    }
    //defining variable countItem for calculating amount of unique items
    var countItem = 0;
    for (var i = 0; i < result.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] == result[i]) {
                //increasing countItem
                countItem++;
            }
        }
        //pushing current count item to array count
        count.push(countItem);
        //count=0
        countItem = 0;
    }
    //loop for filling object resultObject in structure
    // object={item:amount///}
    for (var i = 0; i < result.length; i++) {
        resultObject[result[i]] = count[i];
    }
    //returning result
    return resultObject;
}
function isEmptyResultObject() {
    for (var i=0; i<resultObject.length; i++) {
        return false;
    }
    return true;
}
function sortResultObject() {

    while (isEmptyResultObject()) {
        console.log("kuku");
        var maxAmount = 0;
        var keyMaxAmount = "";
        for (var j=0; j<resultObject.length; j++) {
            if (resultObject[key] > maxAmount) {
                maxAmount = resultObject[key];
                keyMaxAmount = key;
            }
        }
        finalResult.push(keyMaxAmount);
        delete resultObject[keyMaxAmount];
    }
    console.log(resultObject);
    console.log(finalResult);
    return finalResult;
}
//invoking function and display result
console.log(amountUniqueItems());
console.log(sortResultObject());


