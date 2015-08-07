/**
 * Created by ProFi on 07.08.2015.
 */

//defining function yearAnswer
function yearAnswer() {
    //defining variable year
    var year = parseInt(document.getElementById("year").value);
    //conditional statements
    if (year === 2015) {
        document.getElementById('result').value = "Vy pravy!";
    } else {
        document.getElementById('result').value = "S luny svalilsya? 2015!";
    }
}