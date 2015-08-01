/**
 * Created by ProFi on 21.07.2015.
 */

function parseDonuts(donutString) {
    numCakeDonuts=parseInt(donutString);
    if (donutString.indexOf('dozen')!=-1) {
        numCakeDonuts=numCakeDonuts*12;
        return numCakeDonuts;
    }
    numGlazedDonuts=parseInt(donutString);
    if (donutString.indexOf('dozen')!=-1) {
        numGlazedDonuts=numGlazedDonuts*12;
        return numGlazedDonuts;
    }
}

function updateOrder() {
    const TAXRATE=0.01;
    const DONUTPRICE=0.5;
    var numCakeDonuts = parseDonuts(document.getElementById('cakedonuts'));
    var numGlazedDonuts = parseDonuts(document.getElementById('glazeddonuts'));
    numCakeDonuts = document.getElementById('cakedonuts').value;
    numGlazedDonuts = document.getElementById('glazeddonuts').value;
    if (isNaN(numCakeDonuts)) {
        numCakeDonuts=0;
    }
    if (isNaN(numGlazedDonuts)) {
        numGlazedDonuts=0;
    }
    var subtotal=(parseInt(numCakeDonuts)+parseInt(numGlazedDonuts))*DONUTPRICE;
    var tax=subtotal*TAXRATE;
    var total=subtotal+tax;
    document.getElementById('subtotal').value="$"+subtotal;
    document.getElementById('tax').value="$"+tax;
    document.getElementById('total').value="$"+total;
}

function placeOrder() {
    if (document.getElementById('name').value=="") {
        alert('Заполните свое имя');
        //document.getElementById('errorName').value='Заполните свое имя';
    }
}

