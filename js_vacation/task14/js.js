/**
 * Created by ProFi on 26.07.2015.
 */

var firstChoice=new Array (1, 'blue', 'Johnson', 'cat');
var secondChoice=new Array (2, 'red', 'Smith', 'dog');
var thirdChoice=new Array (3, 'yellow', 'Grant');
function yourChoice() {
    var choice = parseInt(document.getElementById('numberChoice').value);
    if (choice==1) {
        document.getElementById('yourChoice').value="Your "+firstChoice[0]+"st choice: "+firstChoice[1]+", "+firstChoice[2]+", "+firstChoice[3]+".";
        document.getElementById('yourChoice').style.backgroundColor='blue';
    } else if (choice==2) {
        document.getElementById('yourChoice').value="Your "+secondChoice[0]+"nd choice: "+secondChoice[1]+", "+secondChoice[2]+", "+secondChoice[3]+".";
        document.getElementById('yourChoice').style.backgroundColor='red';
    } else if (choice=3) {
        document.getElementById('yourChoice').value="Your "+thirdChoice[0]+"d choice: "+thirdChoice[1]+", "+thirdChoice[2]+", "+thirdChoice[3]+".";
        document.getElementById('yourChoice').style.backgroundColor='yellow';
    }
}
