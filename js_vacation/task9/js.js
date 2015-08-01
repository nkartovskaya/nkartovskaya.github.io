/**
 * Created by ProFi on 25.07.2015.
 */
function grade() {
    var number=parseInt(document.getElementById('number').value);
    if (number==1) {
        document.getElementById('grade').value='A';
    } else if (number==2) {
        document.getElementById('grade').value='B';
    } else if (number==3) {
        document.getElementById('grade').value='C';
    } else if (number==4) {
        document.getElementById('grade').value='D';
    } else if (number==5) {
        document.getElementById('grade').value='F';
    } else {
        document.getElementById('grade').value='No grade';
    }
}
