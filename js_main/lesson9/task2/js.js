/**
 Напишите функцию applyAll(func, arg1, arg2...), которая получает функцию
 func и произвольное количество аргументов.

 Она должна вызвать func(arg1, arg2...), то есть передать в func все
 аргументы, начиная со второго, и возвратить результат.

 Например:
 // Применить Math.max к аргументам 2, -2, 3
 alert( applyAll(Math.max, 2, -2, 3) ); // 3

 // Применить Math.min к аргументам 2, -2, 3
 alert( applyAll(Math.min, 2, -2, 3) ); // -2
 */

//creating function applyAll, which has to get some function and
// to apply it to some amount of arguments
function applyAll(func) {
    //returning result of function: borrowing method slice, pointing context
    // as arguments without first argument (it is the name of function)
    return func.apply(this, [].slice.call(arguments, 1));
}
//creating function mul
function mul() {
    //returning result: borrowing method reduce and pointing context as
    //arguments and function for method reduce-a*b
    return [].reduce.call(arguments, function (a, b) {
        return a * b;
    })
}
//creating function sum
function sum() {
    //returning result: borrowing method reduce and pointing context as
    //arguments and function for method reduce-a+b
    return [].reduce.call(arguments, function (a, b) {
        return a + b;
    })
}
//invoking function applyAll with different functions
console.log(applyAll(mul, 1, 2, 3));
console.log(applyAll(sum, 1, 2, 3));
console.log(applyAll(Math.max, 1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log(applyAll(Math.min, 0, 1, 2, 3, 12, 15, 6));



