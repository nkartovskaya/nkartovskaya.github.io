/**
 * Created by ProFi on 26.07.2015.
 */
var i;
function evenOdd() {
    var startNumber=parseInt(document.getElementById('startNumber').value);
    for (i = 0; i < 20; i++) {
        var number=i+startNumber;
        if (number % 2 == 0) {
            document.getElementsByClassName('result')[i].value = number + " is even";
        } else {
            document.getElementsByClassName('result')[i].value = number + " is odd";
        }
    }
}