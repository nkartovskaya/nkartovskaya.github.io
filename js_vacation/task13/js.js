/**
 * Created by ProFi on 26.07.2015.
 */

function assignGrade() {
    var number=document.getElementById('number').value;
    if (number<60) {
        document.getElementById('grade').value="For "+number+" you got "+'F';
    } else if (number>=60&&number<70) {
        document.getElementById('grade').value="For "+number+" you got "+'D';
    } else if (number>=70&&number<80) {
        document.getElementById('grade').value="For "+number+" you got "+'C';
    } else if (number>=80&&number<90) {
        document.getElementById('grade').value="For "+number+" you got "+'B';
    } else if (number>=90&&number<100) {
        document.getElementById('grade').value="For "+number+" you got "+'A';
    }
}
