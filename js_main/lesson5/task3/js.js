/**
 Напишите код, который:

 Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
 Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
 При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
 Выводит сумму всех значений массива когда ввод прекращен.
 */

var sum = 0;
var numberArray = new Array(5);
for (var i = 0; i < 5; i++) {
    numberArray[i] = +prompt("Vvedite chislo", "");

    if (prompt("Vvedite chislo", "")==null||prompt("Vvedite chislo", "")=="") {
        break;
    }
    console.log(numberArray[i]);
    sum += numberArray[i];
}
console.log(numberArray);
console.log(sum);

