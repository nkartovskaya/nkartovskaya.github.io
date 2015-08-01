/**
 * Created by ProFi on 20.07.2015.
 */

function foodCalculation() {
    const AMOUNTPERDAY=1000;
    var currentAge=document.getElementById('currentAge').value;
    var maximumAge=document.getElementById('maximumAge').value;
    var amountPerLife;
    document.getElementById('amountPerDay').value=AMOUNTPERDAY;
    amountPerLife=(maximumAge-currentAge)*365*AMOUNTPERDAY;
    document.getElementById('amountPerLife').value=amountPerLife;
}
