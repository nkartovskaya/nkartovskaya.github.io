/*Последовательность чисел Фибоначчи вычисляется по формуле формулу
 F(n) = F(n-1) + F(n-2). В ней каждое следующее число вычисляется
 как сумма двух предыдущих. Первые два числа равны 1 и 1.

 Напишите функцию fib(n), которая возвращает n-е число Фибоначчи.

 Например:
 console.log(fib(3)); //2
 console.log(fib(7)); //13
 console.log(fib(77)); //5527939700884757
 */


/*
 //function for calculation Fibonacci number
 function fib(number) {
 //defining variable, new Array for Fibonacci number
 var fibLine = new Array(number);
 //assigning value to first item of Fibonacci numbers
 fibLine[0] = 1;
 //assigning value to second item of Fibonacci number
 fibLine[1] = 1;
 //loop for calculation of Fibonacci numbers from third item
 for (var i = 2; i < number; i++) {
 //calculation of Fibonacci numbers from third item
 fibLine[i] = fibLine[i - 1] + fibLine[i - 2];
 }
 //display Fibonacci numbers
 console.log(fibLine);
 //display Fibonacci number on place(number)
 console.log(fibLine[number - 1]);
 }
 //function call
 fib(15);
 */

//functional for calculation Fibonacci number
function fibNumber(number) {
    //defining variables-Fibonacci number
    var fib;
//condition for number >2, because fib1 and fib2 == 1
    if (number >= 2) {
        //calculation Fibonacci number, calling function for number-1 and number-2
        fib = fibNumber(number - 1) + fibNumber(number - 2);
        //if number<2 Fibonacci number ==1 (fib1, fib2)
    } else {
        //fib number for number<2
        fib = number;
    }
    //returning result
    return fib;
}
//dispaly data for number=15
console.log(fibNumber(15));




