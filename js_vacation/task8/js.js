/**
 * Created by ProFi on 25.07.2015.
 */

function helloWorld() {
    if (document.getElementsByName('lang')[0].checked) {
        document.getElementById('hello').value='Hello, World!';
    } else if (document.getElementsByName('lang')[1].checked) {
        document.getElementById('hello').value='Hola, Mundo!';
    } else {
        document.getElementById('hello').value='Hallo, Welt!';

    }

}
