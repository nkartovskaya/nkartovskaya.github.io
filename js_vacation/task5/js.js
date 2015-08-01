/**
 * Created by ProFi on 21.07.2015.
 */

function fillTemp() {
    var tempCel=document.getElementById('tempCel').value;
    var calcTempFar = (tempCel * 9 + 160) / 5;
    var calcTempCel = (calcTempFar * 5 - 160) / 9;
    document.getElementById('calcTempFar').value=calcTempFar;
    document.getElementById('calcTempCel').value=calcTempCel;
}