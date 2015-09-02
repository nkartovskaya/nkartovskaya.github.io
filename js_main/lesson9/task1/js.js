/**
 Есть функция sum, которая суммирует все элементы массива:

 function sum(arr) {
  return arr.reduce(function(a, b) {
    return a + b;
  });
}

 alert( sum([1, 2, 3]) ); // 6 (=1+2+3)

 Создайте аналогичную функцию sumArgs(), которая будет суммировать все свои аргументы:

 function sumArgs() {
  ваш код
}

 alert( sumArgs(1, 2, 3) ); // 6, аргументы переданы через запятую, без массива

 Для решения примените метод reduce к arguments, используя call, apply или
 одалживание метода.

 P.S. Функция sum вам не понадобится, она приведена в качестве примера
 использования reduce для похожей задачи.
 */

//creating function for summarize arguments
function sumArgs(a1, a2, a3, a4, a5) {
    //borrowing method reduce
    arguments.reduce = [].reduce;
    //returning reduces arguments
    return arguments.reduce(function (a, b) {
        return a + b;
    })
}
//calling function and display result
console.log(sumArgs(1, 2, 3, 4, 5));



