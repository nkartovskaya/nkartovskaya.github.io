/*Переменная для хранения кнопки Старт*/
var buttonStart = document.getElementById("start");
/*Переменная для хранения кнопки, которая представляет собой рабочий блок*/
var button = document.getElementById("colorButton");
/*Переменная для хранения кнопки Дальше*/
var buttonNextImage = document.getElementById("nextImage");
/*Переменная для хранения адресов картинок*/
var images = ["url(images/1.jpg)",
    "url(images/2.jpg)",
    "url(images/3.jpg)",
    "url(images/4.jpg)",
    "url(images/5.jpg)",
    "url(images/6.jpg)",
    "url(images/7.jpg)"];

/*Переменная для хранения номера картинки*/
var countImage = 0;
/*Переменная для хранения блока контейне, в котором производятся все действия*/
var container = document.getElementById("content");
/*Функция запускается кнопкой Старт и служит для следующих действий:
- придание рабочей кнопке размеров, отступов, закругления углов, видимости, позиционирования и обнуление рамки
- придание невидимости кнопке Старт
- вывод текста о том, что нужно сделать пользователю
- обнуление всех других элементов на странице, кроме кнопки (обнуление текста и видимых стилей)
- вызов функции renovateBlocks(countImage) для соответствующего номера картинки;
*/
function createBlocks() {
    button.style.width = "360px";
    button.style.height = "360px";
    button.style.borderRadius = "32px";
    button.style.margin = "10px";
    button.style.padding = 0;
    button.style.border = "none";
    button.style.visibility = "visible";
    button.style.position = "relative";

    buttonStart.style.position = "absolute";
    buttonStart.style.width = 0;
    buttonStart.style.height = 0;
    buttonStart.innerHTML = "";
    buttonStart.style.visibility = "hidden";

    document.getElementById("task").innerHTML = "Рассмотрите картинку и кликните на ней, чтобы узнать результат";
    document.getElementById("resultTextCurrent").style.border = "none";
    document.getElementById("secondPart").innerHTML = "";
    buttonNextImage.style.visibility = "hidden";

    renovateBlocks(countImage);
}
/*
Функция вызывается в рамках выполнения функции createBlocks() и служит изменения картинки кнопки на следующуюиз массива
*/
function renovateBlocks(nextImage) {
    button.style.backgroundImage = images[nextImage];
}

/*
Функция вызывается нажатием на рабочую кнопку (блок с картинкой) и служит для следующих действий:
- показывает результат просмотра картинки
- придает блоку, в котором выводится результат рамку
- делает видимой кнопку Дальше
- увеличивает на единицу номер картинки
- в зависимости от номера картинки, текст результата разный
- если номер картинки последний из возможных, запускается функция result();
*/
function findClickedButton() {
    switch (countImage) {
        case 0:
            document.
            getElementById("resultTextCurrent").style.border = "solid 2px #bababa";
            document.getElementById("secondPart").innerHTML = "Абсолютно все люди различают цифры 9 и 6. " +
                "Это контрольная таблица (применяется для выявления симулянтов).";
            buttonNextImage.style.visibility = "visible";
            buttonNextImage.innerHTML = "Дальше";
            countImage++;
            break;
        case 1:
            document.
            getElementById("resultTextCurrent").style.border = "solid 2px #bababa";
            document.getElementById("secondPart").innerHTML = "Люди с нормальным цветовосприятием (трихроматы) " +
                "видят на картинке цифру 13, люди не различающие красный цвет (протанопы) или зеленый цвет " +
                "(дейтеранопы) видят здесь цифру 6.";
            buttonNextImage.style.visibility = "visible";
            buttonNextImage.innerHTML = "Дальше";
            countImage++;
            break;
        case 2:
            document.
            getElementById("resultTextCurrent").style.border = "solid 2px #bababa";
            document.getElementById("secondPart").innerHTML = "Люди с нормальным зрением и с нарушением восприятия " +
                "красного цвета различают две цифры - 9 и 6 (96), люди с нарушением восприятия зеленого цвета " +
                "видят только цифру 6.";
            buttonNextImage.style.visibility = "visible";
            buttonNextImage.innerHTML = "Дальше";
            countImage++;
            break;
        case 3:
            document.
            getElementById("resultTextCurrent").style.border = "solid 2px #bababa";
            document.getElementById("secondPart").innerHTML = "В норме на изображении различимы цифры 1, 3 и 6 " +
                "(или 136). При нарушении цветовосприятиня различимы только две цифры (например 69, 68 или 66).";
            buttonNextImage.style.visibility = "visible";
            buttonNextImage.innerHTML = "Дальше";
            countImage++;
            break;
        case 4:
            document.
            getElementById("resultTextCurrent").style.border = "solid 2px #bababa";
            document.getElementById("secondPart").innerHTML = "Люди с нормальным цветовосприятием различают две " +
                "фигуры - круг и треугольник. При нарушенном восприятии красного цвета различим только " +
                "трехугольник, при нарушенном восприятии зеленого цвета - только круг (но могут различать " +
                "и обе фигуры).";
            buttonNextImage.style.visibility = "visible";
            buttonNextImage.innerHTML = "Дальше";
            countImage++;
            break;
        case 5:
            document.
            getElementById("resultTextCurrent").style.border = "solid 2px #bababa";
            document.getElementById("secondPart").innerHTML = "При нормальном зрении различимы круг и треугольник. " +
                "При нарушении восприятия красного цвета - только круг, при нарушении восприятия зеленого цвета - " +
                "только треугольник.";
            buttonNextImage.style.visibility = "visible";
            buttonNextImage.innerHTML = "Дальше";
            countImage++;
            break;
        case 6:
            document.
            getElementById("resultTextCurrent").style.border = "solid 2px #bababa";
            document.getElementById("secondPart").innerHTML = "В норме (трихромазия) различимы две цифры (3 и 0) " +
                "вверху таблицы. При нарушени восприятия красного цвета (протоанопия) человек различает " +
                "цифры в верхней части таблице - 1 и 0, а в нижней 1 ( в норме не видна). При нарушении " +
                "восприятия зеленого цвет (дейтеранопия) - вверху различимы цифра 1, в нижней - цифра 6.";
            buttonNextImage.style.visibility = "visible";
            buttonNextImage.innerHTML = "Дальше";
            countImage++;
            result();
            break;
    }
}

/*
Функция запускается в рамках выполнения функции findClickedButton() и служит для выполнения следующих действий:
- выводит конечный результат теста
- обнуляет все остальные элементы в рабочем контейнере
*/
function result() {
    document.getElementById("secondPart").innerHTML = "Ну все :) надеюсь, Вы не дальтоник.";
    var task = document.getElementById("task");
    var colorContainer = document.getElementById("colors");
    colorContainer.removeChild(task);
    colorContainer.removeChild(button);
    var resultTextCurrentContainer = document.getElementById("resultTextCurrent");
    resultTextCurrentContainer.removeChild(buttonNextImage);
}