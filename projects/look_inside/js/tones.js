/*Переменная для хранения кнопки Старт*/
var buttonStart = document.getElementById("start");
/*Переменная для хранения массива кнопок, которые представляют собой цветные блоки*/
var buttons = document.getElementsByClassName("colorButton");
/*Переменные для хранения массивов цветов. Каждый массив представляет собой 7 одинаковых элементов и 1 другой*/
var colors0 = ["#4A3421", "#38281A", "#38281A", "#38281A", "#38281A", "#38281A", "#38281A", "#38281A"];
var colors1 = ["#8F3333", "#B03737", "#B03737", "#B03737", "#B03737", "#B03737", "#B03737", "#B03737"];
var colors2 = ["#82D18B", "#62B36C", "#62B36C", "#62B36C", "#62B36C", "#62B36C", "#62B36C", "#62B36C"];
var colors3 = ["#EB67E2", "#B53EAD", "#B53EAD", "#B53EAD", "#B53EAD", "#B53EAD", "#B53EAD", "#B53EAD"];
var colors4 = ["#5148D4", "#3A31BD", "#3A31BD", "#3A31BD", "#3A31BD", "#3A31BD", "#3A31BD", "#3A31BD"];
var colors5 = ["#EAED45", "#B0B336", "#B0B336", "#B0B336", "#B0B336", "#B0B336", "#B0B336", "#B0B336"];
var colors6 = ["#ED8E45", "#C27336", "#C27336", "#C27336", "#C27336", "#C27336", "#C27336", "#C27336"];
var colors7 = ["#9945ED", "#7535B5", "#7535B5", "#7535B5", "#7535B5", "#7535B5", "#7535B5", "#7535B5"];
var colors8 = ["#45EDE8", "#36BAB6", "#36BAB6", "#36BAB6", "#36BAB6", "#36BAB6", "#36BAB6", "#36BAB6"];
var colors9 = ["#748282", "#5B6666", "#5B6666", "#5B6666", "#5B6666", "#5B6666", "#5B6666", "#5B6666"];
/*Переменная для хранения массивов палитр*/
var colors = [colors0, colors1, colors2, colors3, colors4, colors5, colors6, colors7, colors8, colors9];
/*Переменная для хранения количества правильных ответов*/
var count = 0;
/*Функция для перемешивания массивов цветов в произвольном порядке*/
function shuffle() {
    colors0.sort(function () {
        return 0.5 - Math.random();
    });
    colors1.sort(function () {
        return 0.5 - Math.random();
    });
    colors2.sort(function () {
        return 0.5 - Math.random();
    });
    colors3.sort(function () {
        return 0.5 - Math.random();
    });
    colors4.sort(function () {
        return 0.5 - Math.random();
    });
    colors5.sort(function () {
        return 0.5 - Math.random();
    });
    colors6.sort(function () {
        return 0.5 - Math.random();
    });
    colors7.sort(function () {
        return 0.5 - Math.random();
    });
    colors8.sort(function () {
        return 0.5 - Math.random();
    });
    colors9.sort(function () {
        return 0.5 - Math.random();
    });
}
/*Переменная для хранения рабочего контейнера*/
var container = document.getElementById("content");
/*Функция запускается кнопкой Старт и служит для следующих действий:
- запуск функции shuffle();
- придание каждой кнопке (рабочему блоку) размеров, закругления углов, отступов, поизиционирования,
видимости и удаления рамки
- обнуление кнопки Старт
- вывод текста о том, что нужно сделать пользователю
- вызов функции renovateBlocks(0); с определенным номером итерации
*/
function createBlocks() {
    shuffle();
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.width = "150px";
        buttons[i].style.height = "150px";
        buttons[i].style.borderRadius = "7px";
        buttons[i].style.margin = "10px";
        buttons[i].style.border = "none";
        buttons[i].style.visibility = "visible";
        buttons[i].style.position = "relative";
    }

    buttonStart.style.position = "absolute";
    buttonStart.style.width = 0;
    buttonStart.style.height = 0;
    buttonStart.innerHTML = "";
    buttonStart.style.visibility = "hidden";

    document.getElementById("task").innerHTML = "Выберите блок, у которого цвет отличается от остальных";

    renovateBlocks(0);
}
/*Функция запускается в рамках выполнения функции createBlocks() и служит для окрашивание всех кнопок (рабочих блоков)
в цвета их одного массива цветов*/
function renovateBlocks(nextColor) {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = colors[nextColor][i];
    }
}
/*Переменная для хранения номера итерации*/
var countColor = 1;
/*Функция запускается нажатием на любую из кнопок (рабочих блоков) и служит для следующих действий:
- определения, на какую именно кнопку нажал пользователь
- определения, является ли цвет нажатой кнопки отличным от всех других в массиве
- если нажата кнопка с уникальным цветом - добавления единицы к результату и перекрашивание блоков
- если нажата кнопка с обычным цветом - только перекрашивание блоков
- если номер итерации достиг допустимого значения - обнуление всех кнопок (рабочих блоков) и запуск
функции result();
*/
function findClickedButton(e) {
    var buttons = document.getElementsByName("colorButton");
    var indexClickedButton;

    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i] == e) {
            indexClickedButton = i;
            if (buttons[i].style.backgroundColor == "rgb(74, 52, 33)" ||
                buttons[i].style.backgroundColor == "rgb(143, 51, 51)" ||
                buttons[i].style.backgroundColor == "rgb(130, 209, 139)" ||
                buttons[i].style.backgroundColor == "rgb(235, 103, 226)" ||
                buttons[i].style.backgroundColor == "rgb(81, 72, 212)" ||
                buttons[i].style.backgroundColor == "rgb(234, 237, 69)" ||
                buttons[i].style.backgroundColor == "rgb(237, 142, 69)" ||
                buttons[i].style.backgroundColor == "rgb(117, 53, 181)" ||
                buttons[i].style.backgroundColor == "rgb(153, 69, 237)" ||
                buttons[i].style.backgroundColor == "rgb(69, 237, 232)" ||
                buttons[i].style.backgroundColor == "rgb(116, 130, 130)") {
                count++;
            }
        }
    }

    renovateBlocks(countColor);
    countColor++;

    if (countColor == 10) {
        result();
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.visibility = "hidden";
        }
    }
}
/*
Функция запускается в рамках выполнения функции findClickedButton(e) и служит для следующих действий:
- вывод количества правильных ответов и результата
- обнуление текста о том, что должен сделать пользователь
*/
function result() {
    document.
    getElementById("resultText").style.border = "solid 2px #bababa";
    switch (count) {
        case 0:
            document.getElementById("firstPart").innerHTML = count + " правильных ответов";
            document.
            getElementById(
                "secondPart").innerHTML =
                "Лучше вообще не браться за работу, связанную с цветами, она будет безнадежно испорчена.";
            break;
        case 1:
            document.getElementById("firstPart").innerHTML =
                count + " правильный ответ";
            document.getElementById("secondPart").innerHTML =
                "Лучше вообще не браться за работу, связанную с цветами, она будет безнадежно испорчена.";
            break;
        case 2:
            document.
            getElementById(
                "firstPart"
            ).innerHTML = count + " правильных ответа";
            document.
            getElementById("secondPart").innerHTML = "Лучше вообще не браться за работу, связанную с цветами, она будет безнадежно испорчена.";
            break;
        case 3:
            document.getElementById("firstPart").innerHTML = count + " правильных ответа";
            document.getElementById("secondPart").innerHTML = "Лучше вообще не браться за работу, связанную с цветами, она будет безнадежно испорчена.";
            break;
        case 4:
            document.getElementById("firstPart").innerHTML = count + " правильных ответа";
            document.getElementById("secondPart").innerHTML = "Вы неплохо различаете цвета, но художник или дизайнер из Вас не получится.";
            break;
        case 5:
            document.getElementById("firstPart").innerHTML = count + " правильных ответов";
            document.getElementById("secondPart").innerHTML = "Вы неплохо различаете цвета, но художник или дизайнер из Вас не получится.";
            break;
        case 6:
            document.getElementById("firstPart").innerHTML = count + " правильных ответов";
            document.getElementById("secondPart").innerHTML = "Вы неплохо различаете цвета, но художник или дизайнер из Вас не получится.";
            break;
        case 7:
            document.getElementById("firstPart").innerHTML = count + " правильных ответов";
            document.getElementById("secondPart").innerHTML =
                "Вы неплохо различаете цвета, но художник или дизайнер из Вас не получится.";
            break;
        case 8:
            document.getElementById(
                "firstPart").innerHTML = count + " правильных ответов";
            document.getElementById("secondPart").
                innerHTML =
                "Вы гениально различаете цвета, поздравляю!";
            break;
        case 9:
            document.getElementById("firstPart").innerHTML = count + " правильных ответов";
            document.
            getElementById("secondPart").
                innerHTML =
                "Вы гениально различаете цвета, поздравляю!";
            break;
        case 10:
            document.getElementById("firstPart").innerHTML = count + " правильных ответов";
            document.getElementById("secondPart").innerHTML = "Вы гениально различаете цвета, поздравляю!";
            break;
    }
    document.getElementById("task").innerHTML = "";
}
