/**
 * Created by ProFi on 31.07.2015.
 */

function startDay() {
    if (document.getElementsByName('typeDay')[0].checked) {
        document.getElementById('startDay').value=9;
    } else if (document.getElementsByName('typeDay')[1].checked) {
        document.getElementById('startDay').value=12;
    }
}
