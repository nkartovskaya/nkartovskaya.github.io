/**
 * Created by ProFi on 07.08.2015.
 */


function yearAnswer() {
    var year = parseInt(document.getElementById("year").value);
    if (year === 2015) {
        document.getElementById('result').value = "Vy pravy!";
    } else {
        document.getElementById('result').value = "S luny svalilsya? 2015!";
    }
}
console.log(typeof(year));
