/**
 1. Создайте массив fruits с элементами «apple», «orange».
 2. Добавьте в конец значение «kiwi»
 3. Замените предпоследнее значение с конца на «pear». Код
 замены предпоследнего значения должен работать для
 массивов любой длины.
 4. Удалите первое значение массива и выведите его console.
 5. Добавьте в начало значения «apricot» и «peach».
 */

//creating array
var fruits = new Array("apple", "orange");
//adding new last item kiwi
fruits.push("kiwi");
//change item
fruits.splice(fruits.length - 2, fruits.length - 2, "pear");
//deleting last item and display array
console.log(fruits.shift());
//adding new first items apricot and peach
fruits.unshift("apricot", "peach");
//display array
console.log(fruits);

