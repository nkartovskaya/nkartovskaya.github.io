/**
 Автомобильный светофор (3 цвета). Сделать возможность переключение автоматически
 и по нажатию на клавишу. При переключении светофор должен вести себя так как
 настоящий (в плане моргания).
 */

var trafficLight = {
    normalWork: function () {
        setInterval(function () {
            setTimeout(onRed, 1);
            setTimeout(flashingRed, 2000);
            setTimeout(onYellow, 5000);
            setTimeout(flashingYellow, 8000);
            setTimeout(onGreen, 11000);
            setTimeout(flashingGreen, 14000);
        }, 18000);
    },
    onRed: function () {
        getElStyleBgC("redLight", "red");
        getElStyleBgC("yellowLight", "grey");
        getElStyleBgC("greenLight", "grey");
    },
    onYellow: function () {
        getElStyleBgC("redLight", "grey");
        getElStyleBgC("yellowLight", "yellow");
        getElStyleBgC("greenLight", "grey")
    },
    onGreen: function () {
        getElStyleBgC("redLight", "grey");
        getElStyleBgC("yellowLight", "grey");
        getElStyleBgC("greenLight", "green");
    },
    flashingRed: function () {
        var flash = setTimeout("flashingRed()", speed);
        if (temp == 1) {
            getElStyleBgC("redLight", "grey");
            temp = 0;
            countRed++;
            console.log(countRed);
            if (countRed >= 6) {
                clearTimeout(flash);
                countRed = 0;
            }
        }
        else {
            getElStyleBgC("redLight", "red");
            temp = 1;
            countRed++;
            console.log(countRed);
            if (countRed >= 6) {
                clearTimeout(flash);
                countRed = 0;
            }
        }
        flash;
    },
    flashingYellow: function () {
        var flash = setTimeout("flashingYellow()", speed);
        if (temp == 1) {
            getElStyleBgC("yellowLight", "grey");
            temp = 0;
            countYellow++;
            console.log(countYellow);
            if (countYellow >= 6) {
                clearTimeout(flash);
                countYellow = 0;
            }
        }
        else {
            getElStyleBgC("yellowLight", "yellow");
            temp = 1;
            countYellow++;
            console.log(countYellow);
            if (countYellow >= 6) {
                clearTimeout(flash);
                countYellow = 0;
            }
        }
        flash;
    },
    flashingGreen: function () {
        var flash = setTimeout("flashingGreen()", speed);
        if (temp == 1) {
            getElStyleBgC("greenLight", "grey");
            temp = 0;
            countGreen++;
            console.log(countGreen);
            if (countGreen >= 6) {
                clearTimeout(flash);
                countGreen = 0;
            }
        }
        else {
            getElStyleBgC("greenLight", "green");
            temp = 1;
            countGreen++;
            console.log(countGreen);
            if (countGreen >= 6) {
                clearTimeout(flash);
                countGreen = 0;
            }
        }
        flash;
    }
}


function getElStyleBgC(elId, color) {
    return document.getElementById(elId).style.backgroundColor = color;
}

var speed = 500;
var temp = 1;
var countRed = 0;
var countYellow = 0;
var countGreen = 0;


