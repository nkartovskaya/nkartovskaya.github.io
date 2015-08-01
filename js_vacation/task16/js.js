/**
 * Created by ProFi on 27.07.2015.
 */

function whatToDo() {
    var time=parseInt(document.getElementById('time').value);
    if (document.getElementsByName('timePeriod')[0].checked) {
        switch (time) {
            case 0: document.getElementById('answer').value='Sorry, you値l have to wait or go get a snack.';
                break
            case 1: document.getElementById('answer').value='Sorry, you値l have to wait or go get a snack.';
                break
            case 2: document.getElementById('answer').value='Sorry, you値l have to wait or go get a snack.';
                break
            case 3: document.getElementById('answer').value='Sorry, you値l have to wait or go get a snack.';
                break
            case 4: document.getElementById('answer').value='Sorry, you値l have to wait or go get a snack.';
                break
            case 5: document.getElementById('answer').value='Sorry, you値l have to wait or go get a snack.';
                break
            case 6: document.getElementById('answer').value='Breakfast is served.';
                break
            case 7: document.getElementById('answer').value='Breakfast is served.';
                break
            case 8: document.getElementById('answer').value='Breakfast is served.';
                break
            case 9: document.getElementById('answer').value='Breakfast is served.';
                break
            case 10: document.getElementById('answer').value='Sorry, you値l have to wait or go get a snack.';
                break
            case 11: document.getElementById('answer').value='Time for lunch.';
                break
            case 12: document.getElementById('answer').value='Time for lunch.';
                break
        }
    }
    if (document.getElementsByName('timePeriod')[1].checked) {
        switch (time) {
            case 1: document.getElementById('answer').value='Time for lunch.';
                break
            case 2: document.getElementById('answer').value='Sorry, you値l have to wait or go get a snack.';
                break
            case 3: document.getElementById('answer').value='Sorry, you値l have to wait or go get a snack.';
                break
            case 4: document.getElementById('answer').value='Sorry, you値l have to wait or go get a snack.';
                break
            case 5: document.getElementById('answer').value='It痴 dinner time.';
                break
            case 6: document.getElementById('answer').value='It痴 dinner time.';
                break
            case 7: document.getElementById('answer').value='It痴 dinner time.';
                break
            case 8: document.getElementById('answer').value='It痴 dinner time.';
                break
            case 9: document.getElementById('answer').value='Sorry, you値l have to wait or go get a snack.';
                break
            case 10: document.getElementById('answer').value='Sorry, you値l have to wait or go get a snack.';
                break
            case 11: document.getElementById('answer').value='Sorry, you値l have to wait or go get a snack.';
                break
        }
    }
}