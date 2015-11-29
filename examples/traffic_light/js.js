/**
 Автомобильный светофор (3 цвета). Сделать возможность переключение автоматически
 и по нажатию на клавишу. При переключении светофор должен вести себя так как
 настоящий (в плане моргания).
 */


function getElStyleBgC(elId, color) {
    return document.getElementById(elId).style.backgroundColor = color;
}

function normalWork() {
    setInterval(function () {
        setTimeout(onRed, 1);
        setTimeout(flashingRed, 2000);
        setTimeout(onYellow, 5000);
        setTimeout(flashingYellow, 8000);
        setTimeout(onGreen, 11000);
        setTimeout(flashingGreen, 14000);
    }, 18000);
}

function onRed() {
    getElStyleBgC("redLight", "red");
    getElStyleBgC("yellowLight", "grey");
    getElStyleBgC("greenLight", "grey");
}

function onYellow() {
    getElStyleBgC("redLight", "grey");
    getElStyleBgC("yellowLight", "yellow");
    getElStyleBgC("greenLight", "grey")
}

function onGreen() {
    getElStyleBgC("redLight", "grey");
    getElStyleBgC("yellowLight", "grey");
    getElStyleBgC("greenLight", "green");
}

var speed = 500;
var temp = 1;
var countRed=0;
function flashingRed() {
    var flash = setTimeout("flashingRed()", speed);
    if (temp == 1) {
        getElStyleBgC("redLight", "grey");
        temp = 0;
        countRed++;
        console.log(countRed);
        if (countRed >= 6) {
            clearTimeout(flash);
            countRed=0;
        }
    }
    else {
        getElStyleBgC("redLight", "red");
        temp = 1;
        countRed++;
        console.log(countRed);
        if (countRed >= 6) {
            clearTimeout(flash);
            countRed=0;
        }
    }
    flash;
}

var countYellow=0;
function flashingYellow() {
    var flash = setTimeout("flashingYellow()", speed);
    if (temp == 1) {
        getElStyleBgC("yellowLight", "grey");
        temp = 0;
        countYellow++;
        console.log(countYellow);
        if (countYellow >= 6) {
            clearTimeout(flash);
            countYellow=0;
        }
    }
    else {
        getElStyleBgC("yellowLight", "yellow");
        temp = 1;
        countYellow++;
        console.log(countYellow);
        if (countYellow >= 6) {
            clearTimeout(flash);
            countYellow=0;
        }
    }
    flash;
}

var countGreen=0;
function flashingGreen() {
    var flash = setTimeout("flashingGreen()", speed);
    if (temp == 1) {
        getElStyleBgC("greenLight", "grey");
        temp = 0;
        countGreen++;
        console.log(countGreen);
        if (countGreen >= 6) {
            clearTimeout(flash);
            countGreen=0;
        }
    }
    else {
        getElStyleBgC("greenLight", "green");
        temp = 1;
        countGreen++;
        console.log(countGreen);
        if (countGreen >= 6) {
            clearTimeout(flash);
            countGreen=0;
        }
    }
    flash;
}

