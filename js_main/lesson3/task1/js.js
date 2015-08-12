/*Напишите цикл, который предлагает prompt ввести число, большее 100.
Если посетитель ввел другое число — попросить ввести еще раз, и так далее.

 Цикл должен спрашивать число пока либо посетитель не введет число, большее
 100, либо не нажмет кнопку Cancel (ESC).

 Предполагается, что посетитель вводит только числа, предусматривать
 обработку нечисловых строк в этой задаче необязательно.
 */


//loop 'Vvedite chislo bolshe 0'
for (var i = 0; ; i++) {
    //defining variables
    var number = +prompt('Vvedite chislo bolshe 100', "");
    //checking number >100 or cancel
    if (number > 100 || number == 0) {
        //display result >100 or cancel
        alert('Finish');
        break;
    }
}
