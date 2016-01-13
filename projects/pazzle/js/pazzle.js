//Переменная для хранения секции с рабочим стоолом
var container = document.getElementById("container");
//Переменная для хранения блока 1
var containerRight = document.getElementById("containerRight");
//Переменная для хранения блока 2
var containerLeft = document.getElementById("containerLeft");
//Переменная для хранения массива радиобаттонов для выбора стиля стола
var inputsStyleTable = [];
//Переменная для хранения массива лейблов для выбора стиля стола
var labelsStyleTable = [];
//Переменная для хранения кнопки "Начать"
var startButton = document.getElementById("start");
//Переменная для хранения названий стилей рабочего стола
var tableStyleName = ["Голубое стекло", "Зеленое сукно", "Дубовая доска"];
//??
var tableStyle = ["url(images/bg_blue_glass.jpg", "url(images/bg_green.jpg", "url(images/bg_wood.jpg"];
//Переменная для хранения рабиобаттонов для выбора пазла
var inputsPuzzleType = [];
//Переменная для хранения лейблов для выбора пазла
var labelsPuzzleType = [];
//Переменная для хранения массива названий пазлов
var puzzleType = ["Город", "Игра престолов", "Гарри Поттер", "Озеро", "Новый год", "Метро", "Осенний лес"];
//Переменная для хранения частей палза "Город"
var city = [];

var gameOfThrones = [];

//Функция, привязанная к клику на кнопку "Начать"
//При клике на кнопку:
function startNavigation() {
    //Удаляется кнопка "Начать"
    container.removeChild(startButton);
    //Создается форма для выбора стиля стола
    var formStyleTable = document.createElement("form");
    //??
    var nextLine = document.createElement("br");
    //Создается заголовок формы
    var textStyleTable = document.createElement("h1");
    //В заголовок помещается текст "Выберите..."
    textStyleTable.innerHTML = "Выберите стиль стола";
    //Заголовок помещается в контейнер
    container.appendChild(textStyleTable);
    //Форма помещается в контейнер
    container.appendChild(formStyleTable);
    //С помощью цикла создается 3 радиобаттона
    for (var i = 0; i < 3; i++) {
        //к пустом массиву рдиобаттонов добавляется новый инпут
        inputsStyleTable.push(document.createElement("input"));
        //каждому новому инпуту присваивается атрибут "тип" и типу-значение "радиобаттон"
        inputsStyleTable[i].setAttribute("type", "radio");
        //каждому радиобаттону присваивается атрибут "имя" и имени-значение "стол"
        inputsStyleTable[i].setAttribute("name", "table");
        //к пустому массиву лейблов добавляется новый лейбл
        labelsStyleTable.push(document.createElement("label"));
        //3 радиобаттона и 3 лейбла помещаются в форму
        formStyleTable.appendChild(inputsStyleTable[i]);
        formStyleTable.appendChild(labelsStyleTable[i]);
        formStyleTable.appendChild(nextLine);
        //каждому лейблу присваивается значение из массива названий столов
        labelsStyleTable[i].innerHTML = tableStyleName[i];
        //стиль лейбла меняется на "блок"
        labelsStyleTable[i].style.display = "block";

    }

    //создание формы для выбора пазла
    var formPuzzleType = document.createElement("form");
    //создание заголовка формы
    var textPuzzleType = document.createElement("h1");
    //Изменение заголовка на "Выберите..."
    textPuzzleType.innerHTML = "Выберите сюжет";
    //Добавление заголовка в контейнер
    container.appendChild(textPuzzleType);
    //Добавление формы в контейнер
    container.appendChild(formPuzzleType);
    //С помощью цикла:
    for (var i = 0; i < 7; i++) {
        //заполнение пустого массива для хранения радиобаттонов инпутами
        inputsPuzzleType.push(document.createElement("input"));
        //Присвоение инпутам атрибута "тип" и типу-значения "радио"
        inputsPuzzleType[i].setAttribute("type", "radio");
        //Присвоение инпутам атрибута "имя" и имени-значения "тип"
        inputsPuzzleType[i].setAttribute("name", "type");
        //Заполнение массива лейблов лейблами
        labelsPuzzleType.push(document.createElement("label"));
        //Добавление в форму интпутов
        formPuzzleType.appendChild(inputsPuzzleType[i]);
        //Добвление в форму лейблов
        formPuzzleType.appendChild(labelsPuzzleType[i]);
        //Переименование лейблов названиями из массива названий пазлов
        labelsPuzzleType[i].innerHTML = puzzleType[i];
    }
    //Создание кнопки "Сложить..."
    var startPuzzleButton = document.createElement("button");
    //Изменения текста кнопки на "Сложить..."
    startPuzzleButton.innerHTML = "СЛОЖИТЬ ПАЗЛ";
    //Добавление кнопки в контейнер
    container.appendChild(startPuzzleButton);
    //Привязка к клику на кнопку функции "Настройки пазла"
    startPuzzleButton.onclick = settingPuzzle;
}

//Функция служит для придания игре настроек, выбранных пользователем: стиль стола и пазл
function settingPuzzle() {

    for (var i = 0; i < inputsStyleTable.length; i++) {
        //В этом условном операторе выбирается отмеченный радиобаттон в форме стилей стола и соответствующий ему стиль стола
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

    for (var i = 0; i < inputsPuzzleType.length; i++) {
        //В этом условном операторе выбирается отмеченный радиобаттон в форме пазлов и соответствующий ему пазл
        if (inputsPuzzleType[i].checked) {
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

//Функция необходима для следующих действий:
function startPuzzle() {
    //Придание видимости обоим блокам внутри контейнера
    containerRight.style.visibility = "visible";
    containerLeft.style.visibility = "visible";
    //Заполнения массива "Город" частями. Все части находятся в css-спрайте, в цикле создаются для них блоки
    //им присваивается атрибут "класс" и классу-название, сконструированное по определенному алгоритму
    for (var i = 0; i < 100; i++) {
        city.push(document.createElement("div"));
        city[i].setAttribute("class", "sprite-city_" + (i+1));
        city[i].style.float="left";
        //Перемешивание частей пазла в произвольном порядке
        city.sort(function () {
            return 0.5 - Math.random();
        });
        //city[i].style.margin="1px";
    }
//Добавление кусочков пазла на страницу
   for (var i = 0; i < 100; i++) {
        containerLeft.appendChild(city[i]);
    }
}

/* The dragging code for '.draggable' from the demo above
 * applies to this demo as well so it doesn't have to be repeated. */

// enable draggables to be dropped into this
interact('.dropzone').dropzone({
    // only accept elements matching this CSS selector
    accept: '#yes-drop',
    // Require a 75% element overlap for a drop to be possible
    overlap: 0.75,

    // listen for drop related events:

    ondropactivate: function (event) {
        // add active dropzone feedback
        event.target.classList.add('drop-active');
    },
    ondragenter: function (event) {
        var draggableElement = event.relatedTarget,
            dropzoneElement = event.target;

        // feedback the possibility of a drop
        dropzoneElement.classList.add('drop-target');
        draggableElement.classList.add('can-drop');
        draggableElement.textContent = 'Dragged in';
    },
    ondragleave: function (event) {
        // remove the drop feedback style
        event.target.classList.remove('drop-target');
        event.relatedTarget.classList.remove('can-drop');
        event.relatedTarget.textContent = 'Dragged out';
    },
    ondrop: function (event) {
        event.relatedTarget.textContent = 'Dropped';
    },
    ondropdeactivate: function (event) {
        // remove active dropzone feedback
        event.target.classList.remove('drop-active');
        event.target.classList.remove('drop-target');
    }
});





/*
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
*/
