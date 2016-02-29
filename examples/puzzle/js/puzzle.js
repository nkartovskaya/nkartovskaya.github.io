//Переменная для хранения секции с рабочим стоолом
var container = document.getElementById("container");
//Переменная для хранения блока 1
var containerRight = document.getElementById("containerRight");
//Переменная для хранения блока 2
var containerLeft = document.getElementById("containerLeft");
//Переменная для хранения приветственного заголовка
var welcome = document.getElementById("welcome");
//Переменная для хранения приветственного текста
var welcomeText = document.getElementById("welcomeText");
//Переменная для хранения кнопки "Начать"
var startButton = document.getElementById("start");
//Переменная для хранения кнопки "Домашняя страница"
var buttonHome = document.getElementById("goHome");
//Переменная для хранения стиля кнопки "Домашняя страница"
var homeStyle = ["url(images/home_grey.png)", "url(images/home_blue.png)", "url(images/home_green.png)", "url(images/home_brown.png)"];
//Переменная для хранения массива радиобаттонов для выбора стиля стола
var inputsStyleTable = [];
//Переменная для хранения массива лейблов для выбора стиля стола
var labelsStyleTable = [];
//Переменная для хранения названий стилей рабочего стола
var tableStyleName = ["Текущая", "Голубое стекло", "Зеленое сукно", "Дубовая доска"];
//Наполнение массивов стилей стола адресами нужных картинок
var tableStyle = ["url(images/bg_default.jpg)", "url(images/bg_blue_glass.jpg)", "url(images/bg_green.jpg)", "url(images/bg_wood.jpg)"];
//Переменная для хранения рабиобаттонов для выбора пазла
var inputsPuzzleType = [];
//Переменная для хранения лейблов для выбора пазла
var labelsPuzzleType = [];
//Переменная для хранения массива названий пазлов
var puzzleType = ["Город", "Игра престолов", "Гарри Поттер", "Озеро", "Новый год", "Метро", "Осенний лес"];
//Переменная для хранения частей пазла "Город"
//В первом массиве хранятся кусочки для складывания, а во втором-разбеленная картинка для
//того, чтобы было легче складывать пазл
var city = [];
var city_pale = [];
//Переменная для хранения частей пазла "Игра престолов"
var gameOfThrones = [];
var gameOfThrones_pale = [];
//Переменная для хранения частей пазла "Гарри Поттер"
var haryPotter = [];
var haryPotter_pale = [];
//Переменная для хранения частей пазла "Озеро"
var lake = [];
var lake_pale = [];
//Переменная для хранения частей пазла "Новый год"
var newYear = [];
var newYear_pale = [];
//Переменная для хранения частей пазла "Метро"
var underground = [];
var underground_pale = [];
//Переменная для хранения частей пазла "Лес"
var wood_pale = [];
var wood = [];

//Функция, привязанная к клику на кнопку "Начать"
//При клике на кнопку:
function startNavigation() {
    container.removeChild(welcome);
    container.removeChild(welcomeText);
    //Удаляется кнопка "Начать"
    container.removeChild(startButton);
    //Создается форма для выбора стиля стола
    var formStyleTable = document.createElement("form");
    //Создается класс для формы выбора стиля стола
    formStyleTable.setAttribute("id", "formStyleTable");
    //Создается заголовок формы
    var textStyleTable = document.createElement("h1");
    //Создается класс для заголовка формы выбора стиля стола
    textStyleTable.setAttribute("class", "textStyleTable")
    //В заголовок помещается текст "Выберите стиль стола"
    textStyleTable.innerHTML = "Выберите стиль стола";
    //Заголовок помещается в контейнер
    container.appendChild(textStyleTable);
    //Форма помещается в контейнер
    container.appendChild(formStyleTable);
    //С помощью цикла создается 3 радиобаттона
    for (var i = 0; i < 4; i++) {
        //к пустом массиву радиобаттонов добавляется новый инпут
        inputsStyleTable.push(document.createElement("input"));
        //каждому новому инпуту присваивается атрибут "тип" и типу-значение "радиобаттон"
        inputsStyleTable[i].setAttribute("type", "radio");
        //создание класса для инпутов формы выбора стиля стола
        inputsStyleTable[i].setAttribute("class", "inputsTypeTable");
        //каждому радиобаттону присваивается атрибут "имя" и имени-значение "стол"
        inputsStyleTable[i].setAttribute("name", "table");
        //к пустому массиву лейблов добавляется новый лейбл
        labelsStyleTable.push(document.createElement("label"));
        //3 радиобаттона и 3 лейбла помещаются в форму
        formStyleTable.appendChild(inputsStyleTable[i]);
        //Добавление в форму лейблов
        formStyleTable.appendChild(labelsStyleTable[i]);
        labelsStyleTable[i].setAttribute("class", "labelsTypeTable")
        //каждому лейблу присваивается значение из массива названий столов
        labelsStyleTable[i].innerHTML = tableStyleName[i];
    }

    //Создается форма для выбора пазла
    var formPuzzleType = document.createElement("form");
    //Создается класс для формы выбора сюжета
    formPuzzleType.setAttribute("class", "formPuzzleType");
    //Создается заголовок формы
    var textPuzzleType = document.createElement("h1");
    //Создается класс для заголовка формы выбора сюжета
    textPuzzleType.setAttribute("class", "textPuzzleType");
    //В заголовок помещается текст "Выберите сюжет"
    textPuzzleType.innerHTML = "Выберите сюжет";
    //Заголовок добавляется в контейнер
    container.appendChild(textPuzzleType);
    //Форма добавляется в контейнер
    container.appendChild(formPuzzleType);
    //С помощью цикла:
    for (var i = 0; i < 7; i++) {
        //заполнение пустого массива для хранения радиобаттонов инпутами
        inputsPuzzleType.push(document.createElement("input"));
        //Присвоение инпутам атрибута "тип" и типу-значения "радио"
        inputsPuzzleType[i].setAttribute("type", "radio");
        //Присвоение инпутам атрибута "имя" и имени-значения "тип"
        inputsPuzzleType[i].setAttribute("name", "type");
        //Создание класса для инпутов формы выбора сюжета
        inputsPuzzleType[i].setAttribute("class", "inputsPuzzleType");
        //Заполнение массива лейблов лейблами
        labelsPuzzleType.push(document.createElement("label"));
        //Создание класса для лейблов формы выбора сюжета
        labelsPuzzleType[i].setAttribute("class", "labelsPuzzleType");
        //Добавление в форму интпутов
        formPuzzleType.appendChild(inputsPuzzleType[i]);
        //Добавление в форму лейблов
        formPuzzleType.appendChild(labelsPuzzleType[i]);
        //Переименование лейблов названиями из массива названий пазлов
        labelsPuzzleType[i].innerHTML = puzzleType[i];
    }
    //Создание кнопки "Сложить пазл"
    var startPuzzleButton = document.createElement("button");
    //Создание класса для кнопки "Сложить пазл"
    startPuzzleButton.setAttribute("class", "startPuzzleButton");
    //Изменения текста кнопки на "Сложить пазл"
    startPuzzleButton.innerHTML = "СЛОЖИТЬ ПАЗЛ";
    //Добавление кнопки в контейнер
    container.appendChild(startPuzzleButton);
    //Привязка к клику на кнопку функции "Настройки пазла"
    startPuzzleButton.onclick = settingPuzzle;
    //Отметка первого чекбокса в форме стилей стола
    inputsStyleTable[0].checked = true;
    //Отметка первого чекбокса в форме сюжетов пазла
    inputsPuzzleType[0].checked = true;
}

//Функция служит для придания игре настроек, выбранных пользователем: стиль стола и пазл
function settingPuzzle() {

    for (var i = 0; i < inputsStyleTable.length; i++) {
        //В этом условном операторе выбирается отмеченный радиобаттон в форме стилей
        // стола и соответствующий ему стиль стола
        if (inputsStyleTable[i].checked) {
            switch (i) {
                case 0:
                    document.body.style.backgroundImage = tableStyle[0];
                    buttonHome.style.backgroundImage = homeStyle[0];
                    break;
                case 1:
                    document.body.style.backgroundImage = tableStyle[1];
                    buttonHome.style.backgroundImage = homeStyle[1];
                    break;
                case 2:
                    document.body.style.backgroundImage = tableStyle[2];
                    buttonHome.style.backgroundImage = homeStyle[2];
                    break;
                case 3:
                    document.body.style.backgroundImage = tableStyle[3];
                    buttonHome.style.backgroundImage = homeStyle[3];
                    break;
            }
        }
    }

    for (var i = 0; i < inputsPuzzleType.length; i++) {
        //В этом условном операторе выбирается отмеченный радиобаттон в форме пазлов и соответствующий ему пазл
        if (inputsPuzzleType[i].checked) {
            switch (i) {
                case 0:
                    startPuzzleCity();
                    break;
                case 1:
                    startPuzzleGameOfThrones();
                    break;
                case 2:
                    startPuzzleHaryPotter();
                    break;
                case 3:
                    startPuzzleLake();
                    break;
                case 4:
                    startPuzzleNewYear();
                    break;
                case 5:
                    startPuzzleUnderground();
                    break;
                case 6:
                    startPuzzleWood();
                    break;
            }
        }
    }
    //Блок с формами выбора стиля стола и сюжета становится скрытым
    container.style.visibility = "hidden";
}
//Функция запуска аудиофайла - сопровождение раскладки пазла
function sound() {
    var audio=document.getElementById("audio");
    audio.play();
}

//Функция необходима для заполнения блока кусочками пазла. Ниже 7 функций, по 1-й для каждого пазла
//Город
function startPuzzleCity() {
    //Придание видимости обоим блокам внутри контейнера
    containerRight.style.visibility = "visible";
    containerLeft.style.visibility = "visible";
    containerRight.style.backgroundImage = "url(images/city_pale.jpg)";
    //Заполнения массива частями. Все части находятся в css-спрайте, в цикле создаются для них блоки
    //им присваивается атрибут "класс" и классу-название, сконструированное по определенному алгоритму
    for (var i = 0; i < 100; i++) {
        //Создание блоков для левого экрана и заполнение мим ранее объеявленного массива
        city.push(document.createElement("div"));
        //Создание блоков для правого экрана и заполнение ими ранее объеявленного массива
        city_pale.push(document.createElement("div"));
        //Создание классов для блоков  левого экрана
        city[i].setAttribute("class", "sprite-city_" + i);
        //Создание классов для блоков правого экрана
        city_pale[i].setAttribute("class", "sprite-city_pale_" + i);
        //Перемешивание частей пазла в произвольном порядке
        city.sort(function () {
            return 0.5 - Math.random();
        });
    }
    //Вызов функции запуска звука
    sound();
    for (var i = 0; i < 100; i++) {
        sound();
        //Добавление кусочков пазла на левый экран
        containerLeft.appendChild(city[i]);
        //Добавление блоков на правый экран
        containerRight.appendChild(city_pale[i]);
        //Функция перетягивания
        $(city[i]).draggable();
        $(city_pale[i]).droppable({
            drop: function () {
            }
        });
    }
}

//Игра престолов
function startPuzzleGameOfThrones() {
    containerRight.style.visibility = "visible";
    containerLeft.style.visibility = "visible";
    containerRight.style.backgroundImage = "url(images/game_of_thrones_pale.jpg)";

    for (var i = 0; i < 100; i++) {
        gameOfThrones.push(document.createElement("div"));
        gameOfThrones_pale.push(document.createElement("div"));
        gameOfThrones[i].setAttribute("class", "sprite-game_of_thrones_" + (i + 1));
        gameOfThrones_pale[i].setAttribute("class", "sprite-game_of_thrones_pale_" + (i + 1));

        gameOfThrones.sort(function () {
            return 0.5 - Math.random();
        });
    }
    sound();
    for (var i = 0; i < 100; i++) {
        containerLeft.appendChild(gameOfThrones[i]);
        containerRight.appendChild(gameOfThrones_pale[i]);
        $(gameOfThrones[i]).draggable();
        $(gameOfThrones_pale[i]).droppable({
            drop: function () {
            }
        });
    }
}

//Гарри Поттер
function startPuzzleHaryPotter() {
    containerRight.style.visibility = "visible";
    containerLeft.style.visibility = "visible";
    containerRight.style.backgroundImage = "url(images/hary_potter_pale.jpg)";

    for (var i = 0; i < 100; i++) {
        haryPotter.push(document.createElement("div"));
        haryPotter_pale.push(document.createElement("div"));
        haryPotter[i].setAttribute("class", "sprite-hary_potter_" + (i + 1));
        haryPotter_pale[i].setAttribute("class", "sprite-hary_potter_pale_" + (i + 1));

        haryPotter.sort(function () {
            return 0.5 - Math.random();
        });
    }
    sound();
    for (var i = 0; i < 100; i++) {
        containerLeft.appendChild(haryPotter[i]);
        containerRight.appendChild(haryPotter_pale[i]);
        $(haryPotter[i]).draggable();
        $(haryPotter_pale[i]).droppable({
            drop: function () {
            }
        });
    }
}

//Озеро
function startPuzzleLake() {
    containerRight.style.visibility = "visible";
    containerLeft.style.visibility = "visible";
    containerRight.style.backgroundImage = "url(images/lake_pale.jpg)";

    for (var i = 0; i < 100; i++) {
        lake.push(document.createElement("div"));
        lake_pale.push(document.createElement("div"));
        lake[i].setAttribute("class", "sprite-lake_" + (i + 1));
        lake_pale[i].setAttribute("class", "sprite-lake_pale_" + (i + 1));

        lake.sort(function () {
            return 0.5 - Math.random();
        });
    }
    sound();
    for (var i = 0; i < 100; i++) {
        containerLeft.appendChild(lake[i]);
        containerRight.appendChild(lake_pale[i]);
        $(lake[i]).draggable();
        $(lake_pale[i]).droppable({
            drop: function () {
            }
        });
    }
}

//Новый год
function startPuzzleNewYear() {
    containerRight.style.visibility = "visible";
    containerLeft.style.visibility = "visible";
    containerRight.style.backgroundImage = "url(images/new_year_pale.jpg)";

    for (var i = 0; i < 100; i++) {
        newYear.push(document.createElement("div"));
        newYear_pale.push(document.createElement("div"));
        newYear[i].setAttribute("class", "sprite-new_year_" + (i + 1));
        newYear_pale[i].setAttribute("class", "sprite-new_year_pale_" + (i + 1));

        newYear.sort(function () {
            return 0.5 - Math.random();
        });
    }
    sound();
    for (var i = 0; i < 100; i++) {
        containerLeft.appendChild(newYear[i]);
        containerRight.appendChild(newYear_pale[i]);
        $(newYear[i]).draggable();
        $(newYear_pale[i]).droppable({
            drop: function () {
            }
        });
    }
}

//Метро
function startPuzzleUnderground() {
    containerRight.style.visibility = "visible";
    containerLeft.style.visibility = "visible";
    containerRight.style.backgroundImage = "url(images/underground_pale.jpg)";

    for (var i = 0; i < 100; i++) {
        underground.push(document.createElement("div"));
        underground_pale.push(document.createElement("div"));
        underground[i].setAttribute("class", "sprite-underground_" + (i + 1));
        underground_pale[i].setAttribute("class", "sprite-underground_pale_" + (i + 1));

        underground.sort(function () {
            return 0.5 - Math.random();
        });
    }
    sound();
    for (var i = 0; i < 100; i++) {
        containerLeft.appendChild(underground[i]);
        containerRight.appendChild(underground_pale[i]);
        $(underground[i]).draggable();
        $(underground_pale[i]).droppable({
            drop: function () {
            }
        });
    }
}

//Лес
function startPuzzleWood() {
    containerRight.style.visibility = "visible";
    containerLeft.style.visibility = "visible";
    containerRight.style.backgroundImage = "url(images/wood_pale.jpg)";

    for (var i = 0; i < 100; i++) {
        wood.push(document.createElement("div"));
        wood_pale.push(document.createElement("div"));
        wood[i].setAttribute("class", "sprite-wood_" + (i + 1));
        wood_pale[i].setAttribute("class", "sprite-wood_pale_" + (i + 1));

        wood.sort(function () {
            return 0.5 - Math.random();
        });
    }
    sound();
    for (var i = 0; i < 100; i++) {
        containerLeft.appendChild(wood[i]);
        containerRight.appendChild(wood_pale[i]);
        $(wood[i]).draggable();
        $(wood_pale[i]).droppable({
            drop: function () {
            }
        });
    }
}

$(window).resize(function () {
    var widthWindow = window.outerWidth;
    var heightWindow = window.outerHeight;
    console.log(widthWindow);
    console.log(heightWindow);
});



