/**
 * Created by ProFi on 26.07.2015.
 */

function multiplyTable() {
    var i;
    for (i = 0; i < 10; i++) {
        document.getElementsByClassName('number_first')[i].value = i;
        document.getElementsByClassName('number_second')[i].value = 9;
        document.getElementsByClassName('result')[i].value=i*9;
    }
}