/**
 Автомобильный светофор (3 цвета). Сделать возможность переключение автоматически
 и по нажатию на клавишу. При переключении светофор должен вести себя так как
 настоящий (в плане моргания).
 */

var color = {"redLight": "red", "yellowLight": "yellow", "greenLight": "green"};
console.log(color);

/*function normalWork() {

 setTimeout(onRed, 1000);
 setTimeout(onYellow, 2000);
 setTimeout(onGreen, 3000);

 }*/

function normalWork() {
    setInterval(function(){
        setTimeout(onRed, 500);
        setTimeout(onYellow, 1500);
        setTimeout(onGreen, 2500);
}, 3000);
}
function onRed() {
    document.getElementById("redLight").style.backgroundColor = "red";
    document.getElementById("yellowLight").style.backgroundColor = "grey";
    document.getElementById("greenLight").style.backgroundColor = "grey";
}
function onYellow() {
    document.getElementById("redLight").style.backgroundColor = "grey";
    document.getElementById("yellowLight").style.backgroundColor = "yellow";
    document.getElementById("greenLight").style.backgroundColor = "grey";
}
function onGreen() {
    document.getElementById("redLight").style.backgroundColor = "grey";
    document.getElementById("yellowLight").style.backgroundColor = "grey";
    document.getElementById("greenLight").style.backgroundColor = "green";
}


