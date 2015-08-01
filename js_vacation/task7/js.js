/**
 * Created by ProFi on 25.07.2015.
 */

function compareResult() {
    var a = parseInt(document.getElementById('aNum').value);
    var b = parseInt(document.getElementById('bNum').value);
    if (a>b) {
        document.getElementById('result').value='a > b';
    } else if (a==b) {
        document.getElementById('result').value='a == b';
    } else {
        document.getElementById('result').value='a < b';
    }
}
