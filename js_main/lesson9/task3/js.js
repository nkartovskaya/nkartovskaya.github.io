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

function sum(a, b) {
    return a + b;
}
function makeLogging(func, log) {
    function wrapper() {
        log.push([].slice.call(arguments));
        console.log(this);
        return func.apply(this, arguments);
    }

    return wrapper;
}
var log = [];
sum = makeLogging(sum, log);
sum(1, 2);
sum(5, 6);
sum(8, 10);
for (var i = 0; i < log.length; i++) {
    console.log(log[i]);
}