/*Натуральное число, большее 1, называется простым, если оно ни на что не делится,
 кроме себя и 1.
 Другими словами, n>1 – простое, если при делении на любое число от 2 до n-1
 есть остаток.
 Создайте код, который выводит все простые числа из интервала от 2 до 10.
 Результат должен быть: 2,3,5,7.
 P.S. Код также должен легко модифицироваться для любых других интервалов.*/


//loop for number, that is checked. Loop starts from 2, because 1 is not prime number
for (var i = 2; i <= 10; i++) {
    //loop number-denominator
    for (var j = 2; j <= i; j++) {
        //checking remainder of division, if it==0, loop breaks
        if (i % j == 0) break;
    }
    //checking number==denominator, if ==, this number is prime
    if (j == i) console.log(i);
}
