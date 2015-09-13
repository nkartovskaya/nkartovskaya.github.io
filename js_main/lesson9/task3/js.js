/**
 Создайте декоратор makeLogging(func, log), для функции func возвращающий
 обёртку, которая при каждом вызове добавляет её аргументы в массив log.

 Условие аналогично задаче Логирующий декоратор (1 аргумент), но допускается
 func с любым набором аргументов.

 Работать должно так:
 function work(a, b) {
  alert( a + b ); // work - произвольная функция
}

 function makeLogging(f, log) { /* ваш код  }

 var log = [];
 work = makeLogging(work, log);

 work(1, 2); // 3
 work(4, 5); // 9

 for (var i = 0; i < log.length; i++) {
    var args = log[i]; // массив из аргументов i-го вызова
    alert( 'Лог:' + args.join() ); // "Лог:1,2", "Лог:4,5"
}
 */

//creating function sum
function sum(a, b) {
    //returning result
    return a + b;
}
//creating function mul
function mul(a, b) {
    //returning result
    return a * b;
}
//creating function makeLogging for logging
// arguments with parameters fuc (function) and log(array for ligging arguments
function makeLogging(func, log) {
    //creating internal function wrapper
    function wrapper() {
        //pushing list of arguments of function to array log
        log.push([].slice.call(arguments));
        //returning invoking function
        return func.apply(this, arguments);
    }
//returning result of makeLogging
    return wrapper;
}
//defining variable logS as array for logging arguments of function sum
var logS = [];
//defining variable logSum as function makeLogging
var logSum = makeLogging(sum, logS);
//invoking function
logSum(1, 2, 3, 4, 5);
logSum(5, 6, 1);
logSum(8, 10, 6, 9, 11, 12);
//displaying result
for (var i = 0; i < logS.length; i++) {
    console.log("logSum: " + logS[i]);
}
//defining variable logM as array for logging arguments of function mul
var logM = [];
//defining variable logSum as function makeLogging
var logMul = makeLogging(mul, logM);
//invoking function
logMul(1, 2, 3, 4, 5);
logMul(5, 6, 1);
logMul(8, 10, 6, 9, 11, 12);
//displaying result
for (var i = 0; i < logM.length; i++) {
    console.log("logMul: " + logM[i]);
}