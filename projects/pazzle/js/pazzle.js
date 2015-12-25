var container = document.getElementById("container");
var containerTop = document.getElementById("containerTop");
var containerBottom = document.getElementById("containerBottom");
var inputsStyleTable = [];
var labelsStyleTable = [];
var startButton = document.getElementById("start");
var tableStyleName = ["Голубое стекло", "Зеленое сукно", "Дубовая доска"];
var tableStyle = ["url(images/bg_blue_glass.jpg", "url(images/bg_green.jpg", "url(images/bg_wood.jpg"];
var inputsPuzzleType = [];
var labelsPuzzleType = [];
var puzzleType = ["Город", "Игра престолов", "Гарри Поттер", "Озеро", "Новый год", "Метро", "Осенний лес"];
var city = [];
var cityImages = ["url(images/city/city_01.gif",
    "url(images/city/city_02.gif",
    "url(images/city/city_03.gif",
    "url(images/city/city_04.gif",
    "url(images/city/city_05.gif",
    "url(images/city/city_06.gif",
    "url(images/city/city_07.gif",
    "url(images/city/city_08.gif",
    "url(images/city/city_09.gif",
    "url(images/city/city_10.gif",
    "url(images/city/city_11.gif",
    "url(images/city/city_12.gif",
    "url(images/city/city_13.gif",
    "url(images/city/city_14.gif",
    "url(images/city/city_15.gif",
    "url(images/city/city_16.gif",
    "url(images/city/city_17.gif",
    "url(images/city/city_18.gif",
    "url(images/city/city_19.gif",
    "url(images/city/city_20.gif",
    "url(images/city/city_21.gif",
    "url(images/city/city_22.gif",
    "url(images/city/city_23.gif",
    "url(images/city/city_24.gif",
    "url(images/city/city_25.gif",
    "url(images/city/city_26.gif",
    "url(images/city/city_27.gif",
    "url(images/city/city_28.gif",
    "url(images/city/city_29.gif",
    "url(images/city/city_30.gif",
    "url(images/city/city_31.gif",
    "url(images/city/city_32.gif",
    "url(images/city/city_33.gif",
    "url(images/city/city_34.gif",
    "url(images/city/city_35.gif",
    "url(images/city/city_36.gif",
    "url(images/city/city_37.gif",
    "url(images/city/city_38.gif",
    "url(images/city/city_39.gif",
    "url(images/city/city_40.gif",
    "url(images/city/city_41.gif",
    "url(images/city/city_42.gif",
    "url(images/city/city_43.gif",
    "url(images/city/city_44.gif",
    "url(images/city/city_45.gif",
    "url(images/city/city_46.gif",
    "url(images/city/city_47.gif",
    "url(images/city/city_48.gif",
    "url(images/city/city_49.gif",
    "url(images/city/city_50.gif",
    "url(images/city/city_51.gif",
    "url(images/city/city_52.gif",
    "url(images/city/city_53.gif",
    "url(images/city/city_54.gif",
    "url(images/city/city_55.gif",
    "url(images/city/city_56.gif",
    "url(images/city/city_57.gif",
    "url(images/city/city_58.gif",
    "url(images/city/city_59.gif",
    "url(images/city/city_60.gif",
    "url(images/city/city_61.gif",
    "url(images/city/city_62.gif",
    "url(images/city/city_63.gif",
    "url(images/city/city_64.gif",
    "url(images/city/city_65.gif",
    "url(images/city/city_66.gif",
    "url(images/city/city_67.gif",
    "url(images/city/city_68.gif",
    "url(images/city/city_69.gif",
    "url(images/city/city_70.gif",
    "url(images/city/city_71.gif",
    "url(images/city/city_72.gif",
    "url(images/city/city_73.gif",
    "url(images/city/city_74.gif",
    "url(images/city/city_75.gif",
    "url(images/city/city_76.gif",
    "url(images/city/city_77.gif",
    "url(images/city/city_78.gif",
    "url(images/city/city_79.gif",
    "url(images/city/city_80.gif",
    "url(images/city/city_81.gif",
    "url(images/city/city_82.gif",
    "url(images/city/city_83.gif",
    "url(images/city/city_84.gif",
    "url(images/city/city_85.gif",
    "url(images/city/city_86.gif",
    "url(images/city/city_87.gif",
    "url(images/city/city_88.gif",
    "url(images/city/city_89.gif",
    "url(images/city/city_90.gif",
    "url(images/city/city_91.gif",
    "url(images/city/city_92.gif",
    "url(images/city/city_93.gif",
    "url(images/city/city_94.gif",
    "url(images/city/city_95.gif",
    "url(images/city/city_96.gif",
    "url(images/city/city_97.gif",
    "url(images/city/city_98.gif",
    "url(images/city/city_99.gif",
    "url(images/city/city_100.gif"];

var gameOfThrones = [];
var gameOfThronesImages = [
    "url(images/city/city_01.gif",

];

function startNavigation() {
    container.removeChild(startButton);
    var formStyleTable = document.createElement("form");
    var nextLine = document.createElement("br");
    var textStyleTable = document.createElement("h1");
    textStyleTable.innerHTML = "Выберите стиль стола";
    container.appendChild(textStyleTable);
    container.appendChild(formStyleTable);
    for (var i = 0; i < 3; i++) {
        inputsStyleTable.push(document.createElement("input"));
        inputsStyleTable[i].setAttribute("type", "radio");
        inputsStyleTable[i].setAttribute("name", "table");
        labelsStyleTable.push(document.createElement("label"));
        formStyleTable.appendChild(inputsStyleTable[i]);
        formStyleTable.appendChild(labelsStyleTable[i]);
        formStyleTable.appendChild(nextLine);
        labelsStyleTable[i].innerHTML = tableStyleName[i];
        labelsStyleTable[i].style.display = "block";

    }
    var formPuzzleType = document.createElement("form");
    var textPuzzleType = document.createElement("h1");
    textPuzzleType.innerHTML = "Выберите сюжет";
    container.appendChild(textPuzzleType);
    container.appendChild(formPuzzleType);
    for (var i = 0; i < 7; i++) {
        inputsPuzzleType.push(document.createElement("input"));
        inputsPuzzleType[i].setAttribute("type", "radio");
        inputsPuzzleType[i].setAttribute("name", "type");
        labelsPuzzleType.push(document.createElement("label"));
        formPuzzleType.appendChild(inputsPuzzleType[i]);
        formPuzzleType.appendChild(labelsPuzzleType[i]);
        labelsPuzzleType[i].innerHTML = puzzleType[i];
    }
    var startPuzzleButton = document.createElement("button");
    startPuzzleButton.innerHTML = "СЛОЖИТЬ ПАЗЛ";
    container.appendChild(startPuzzleButton);
    startPuzzleButton.onclick = settingPuzzle;
}

function settingPuzzle() {

    for (var i = 0; i < inputsStyleTable.length; i++) {
        if (inputsStyleTable[i].checked) {
            switch (i) {
                case 0:
                    document.body.style.backgroundImage = "url(images/bg_blue_glass.jpg)";
                    break;
                case 1:
                    document.body.style.backgroundImage = "url(images/bg_green.jpg)";
                    break;
                case 2:
                    document.body.style.backgroundImage = "url(images/bg_wood.jpeg)";
                    break;
            }
        }
    }

    for (var i=0; i<inputsPuzzleType; i++) {
        if(inputsPuzzleType[i].checked) {
switch (i) {
    case 0:
        startPuzzle();
        break;
    case 1:
        startPuzzle();
        break;
    case 2:
        startPuzzle();
        break;
    case 3:
        startPuzzle();
        break;
    case 4:
        startPuzzle();
        break;
    case 5:
        startPuzzle();
        break;
    case 6:
        startPuzzle();
        break;
}
        }
    }
}

function startPuzzle() {
    containerTop.style.visibility = "visible";
    containerBottom.style.visibility = "visible";

    for (var i = 0; i < 100; i++) {
        city.push(document.createElement("div"));
        city[i].set
        city[i].style.width = "80px";
        city[i].style.height = "60px";
        city[i].style.backgroundImage = cityImages[i];
        city[i].style.float = "left";
        containerBottom.appendChild(city[i]);
    }

    for (var i = 0; i < 100; i++) {
        city.sort(function () {
            return 0.5 - Math.random();
        });
        containerBottom.appendChild(city[i]);
    }
}


