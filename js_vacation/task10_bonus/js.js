/**
 * Created by ProFi on 25.07.2015.
 */

function pluralize() {
    var number=parseInt(document.getElementById('number').value);
    var animal=document.getElementsByName('animal').checked;
    if (number==1) {
        if (document.getElementsByName('animal')[0].checked) {
            document.getElementById('result').value=number+" "+'cat';
        } else if (document.getElementsByName('animal')[1].checked) {
            document.getElementById('result').value=number+" "+'dog';
        } else if (document.getElementsByName('animal')[2].checked) {
            document.getElementById('result').value=number+" "+'sheep';
        } else  if (document.getElementsByName('animal')[3].checked) {
            document.getElementById('result').value=number+" "+'goose';
        }
    } else if (document.getElementsByName('animal')[0].checked) {
        document.getElementById('result').value=number+" "+'cats';
    } else if (document.getElementsByName('animal')[1].checked) {
        document.getElementById('result').value=number+" "+'dogs';
    } else if (document.getElementsByName('animal')[2].checked) {
        document.getElementById('result').value=number+" "+'sheeps';
    } else  if (document.getElementsByName('animal')[3].checked) {
        document.getElementById('result').value=number+" "+'geese';
    }
}
