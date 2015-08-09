//loop 'Vvedite chislo bolshe 0'
for (i = 0;;i++) {
    //defining variables
    var number = prompt('Vvedite chislo bolshe 100', "");
    //checking number >100 or cancel
    if (number > 100 || number == null) {
        //display result >100 or cancel
        alert('Finish');
        break;
    }
}
