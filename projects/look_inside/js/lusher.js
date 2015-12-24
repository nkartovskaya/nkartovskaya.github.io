/*Переменная, в которой хранятся названия нужных цветов*/
var colors = ["blue", "green", "yellow", "black", "brown", "red", "grey", "purple"];
/*Переменные, в которых хранятся блоки*/
var first = document.getElementById("first");
var second = document.getElementById("second");
var third = document.getElementById("third");
var fourth = document.getElementById("fourth");
var fifth = document.getElementById("fifth");
var sixth = document.getElementById("sixth");
var seventh = document.getElementById("seventh");
var eighth = document.getElementById("eighth");
/*Переменная, в которой хранится кнопка Старт*/
var buttonStart = document.getElementById("start");

/*Функция запускается кнопкой Старт и служит для следующих действий:
- вывод текста, разъясняющего, что нужно делать
- перемешивание массива цветов, чтобы блоки каждый раз окрашивались в разном порядке
- окрашивание каждого блока в один из нужных цветов
- придание каждому блоку размеров, отступов, обтекания слева, закругления углов, позиционирования
- удаление со страницы кнопки Старт
 */
function start() {
    document.getElementById("task").innerHTML = "Выберите цвет, который Вам нравится";
    colors.sort(function () {
        return 0.5 - Math.random();
    });
    first.style.backgroundColor = colors[0];
    first.style.width = "150px";
    first.style.height = "150px";
    first.style.margin = "10px";
    first.style.float = "left";
    first.style.borderRadius = "7px";
    first.style.position = "relative";

    second.style.backgroundColor = colors[1];
    second.style.width = "150px";
    second.style.height = "150px";
    second.style.margin = "10px";
    second.style.float = "left";
    second.style.borderRadius = "7px";
    second.style.position = "relative";

    third.style.backgroundColor = colors[2];
    third.style.width = "150px";
    third.style.height = "150px";
    third.style.margin = "10px";
    third.style.float = "left";
    third.style.borderRadius = "7px";
    third.style.position = "relative";

    fourth.style.backgroundColor = colors[3];
    fourth.style.width = "150px";
    fourth.style.height = "150px";
    fourth.style.margin = "10px";
    fourth.style.float = "left";
    fourth.style.borderRadius = "7px";
    fourth.style.position = "relative";

    fifth.style.backgroundColor = colors[4];
    fifth.style.width = "150px";
    fifth.style.height = "150px";
    fifth.style.margin = "10px";
    fifth.style.float = "left";
    fifth.style.borderRadius = "7px";
    fifth.style.position = "relative";

    sixth.style.backgroundColor = colors[5];
    sixth.style.width = "150px";
    sixth.style.height = "150px";
    sixth.style.margin = "10px";
    sixth.style.float = "left";
    sixth.style.borderRadius = "7px";
    sixth.style.position = "relative";

    seventh.style.backgroundColor = colors[6];
    seventh.style.width = "150px";
    seventh.style.height = "150px";
    seventh.style.margin = "10px";
    seventh.style.float = "left";
    seventh.style.borderRadius = "7px";
    seventh.style.position = "relative";

    eighth.style.backgroundColor = colors[7];
    eighth.style.width = "150px";
    eighth.style.height = "150px";
    eighth.style.margin = "10px";
    eighth.style.float = "left";
    eighth.style.borderRadius = "7px";
    eighth.style.position = "relative";

    document.getElementById("colors").removeChild(buttonStart);
}

/*Переменная для хранения цветов, которые выбирает пользователь и их последовательности
(поскольку для результатов теста важно и то, и другое*/
var result = [];
/*Переменная для хранения цвета блока, на который нажимает пользователь*/
var color = "";

/*Функция запускается нажатием на любой из цветных блоков и служит для следующих действий:
- объявление переменных для хранения чекбоксов, которые находятся внутри каждого цветного блока)
- в случае, если чекбокс отмечен, цвет блока сохраняется в ранее объявленной переменной,
добавляется к массиву результатов, размеры и отступы блока обнуляются и чекбокс возвращается
в неотмеченное состояние
- в зависимости от того, сколько блоков уже было выбрано, меняется текст того, что должен
сделать пользователь
- если все блоки выбраны, удаление текста о том, что должен сделать пользователь и вывод нужного результата
*/
function resultCalc() {

    var firstInput = document.getElementById("firstInput");
    var secondInput = document.getElementById("secondInput");
    var thirdInput = document.getElementById("thirdInput");
    var fourthInput = document.getElementById("fourthInput");
    var fifthInput = document.getElementById("fifthInput");
    var sixthInput = document.getElementById("sixthInput");
    var seventhInput = document.getElementById("seventhInput");
    var eighthInput = document.getElementById("eighthInput");

    if (firstInput.checked) {
        color = first.style.backgroundColor;
        result.push(color);
        first.style.width = 0;
        firstInput.style.width = 0;
        first.style.margin = 0;
        firstInput.checked = false;
    }
    if (secondInput.checked) {
        color = second.style.backgroundColor;
        result.push(color);
        second.style.width = 0;
        secondInput.style.width = 0;
        second.style.margin = 0;
        secondInput.checked = false;
    }
    if (thirdInput.checked) {
        color = third.style.backgroundColor;
        result.push(color);
        third.style.width = 0;
        thirdInput.style.width = 0;
        third.style.margin = 0;
        thirdInput.checked = false;
    }
    if (fourthInput.checked) {
        color = fourth.style.backgroundColor;
        result.push(color);
        fourth.style.width = 0;
        fourthInput.style.width = 0;
        fourth.style.margin = 0;
        fourthInput.checked = false;
    }
    if (fifthInput.checked) {
        color = fifth.style.backgroundColor;
        result.push(color);
        fifth.style.width = 0;
        fifthInput.style.width = 0;
        fifth.style.margin = 0;
        fifthInput.checked = false;
    }
    if (sixthInput.checked) {
        color = sixth.style.backgroundColor;
        result.push(color);
        sixth.style.width = 0;
        sixthInput.style.width = 0;
        sixth.style.margin = 0;
        sixthInput.checked = false;
    }
    if (seventhInput.checked) {
        color = seventh.style.backgroundColor;
        result.push(color);
        seventh.style.width = 0;
        seventhInput.style.width = 0;
        seventh.style.margin = 0;
        seventhInput.checked = false;
    }
    if (eighthInput.checked) {
        color = eighth.style.backgroundColor;
        result.push(color);
        eighth.style.width = 0;
        eighthInput.style.width = 0;
        eighth.style.margin = 0;
        eighthInput.checked = false;
    }
    if (result.length > 1 && result.length < 4) {
        document.getElementById("task").innerHTML = "Выберите цвет, который Вы предпочитаете";
    } else if (result.length >= 3 && result.length < 6) {
        document.getElementById("task").innerHTML = "Выберите цвет, который Вам меньше не нравится";
    } else if (result.length >= 5) {
        document.getElementById("task").innerHTML = "Выберите цвет, который Вас меньше всего раздражает";
    }

    if (result.length == 8) {
        (function resultOutput() {
            var firstPair = document.getElementById("firstPair");
            var secondPair = document.getElementById("secondPair");
            var thirdPair = document.getElementById("thirdPair");
            var fourthPair = document.getElementById("fourthPair");

            document.getElementById("resultText").style.border = "solid 2px #bababa";
            document.getElementById("task").innerHTML = "";

            if (result[0] == "blue" && result[1] == "green") {
                firstPair.innerHTML = "Чувство удовлетворенности, спокойствия, стремление к спокойной обстановке, нежелание участвовать в конфликтах, стрессе."
            }
            if (result[0] == "blue" && result[1] == "red") {
                firstPair.innerHTML = "Чувство целостности, активное и не всегда осознанное стремление к тесным отношениям. Потребность во внимании со стороны других."
            }
            if (result[0] == "blue" && result[1] == "purple") {
                firstPair.innerHTML = "Небольшое беспокойство, потребность в тонком окружении, стремление к эстетическому.";
            }
            if (result[0] == "blue" && result[1] == "yellow") {
                firstPair.innerHTML = "Небольшое беспокойство, потребность в тонком окружении, стремление к эстетическому.";
            }
            if (result[0] == "blue" && result[1] == "brown") {
                firstPair.innerHTML = "Чувство беспокойства, страх одиночества, стремление уйти от конфликтов, избежать стресса.";
            }
            if (result[0] == "blue" && result[1] == "black") {
                firstPair.innerHTML = "Негативное состояние, стремление к покою, отдыху, неудовлетворенность отношением к себе, негативное отношение к ситуации.";
            }
            if (result[0] == "blue" && result[1] == "grey") {
                firstPair.innerHTML = "Негативное состояние, потребность освободиться от стресса, стремление к покою, отдыху.";
            }
            if (result[0] == "green" && result[1] == "blue") {
                firstPair.innerHTML = "Позитивное состояние, стремление к признанию, к деятельности, обеспечивающей успех.";
            }
            if (result[0] == "green" && result[1] == "red") {
                firstPair.innerHTML = "Активное стремление к успеху, к самостоятельным решениям, преодолению преград в деятельности.";
            }
            if (result[0] == "green" && result[1] == "yellow") {
                firstPair.innerHTML = "Небольшое беспокойство, стремление к признанию, популярности, желание произвести впечатление.";
            }
            if (result[0] == "green" && result[1] == "brown") {
                firstPair.innerHTML = "Чувство неудовлетворенности, усталости, переоценка значимости отношения к себе со стороны окружающих.";
            }
            if (result[0] == "green" && result[1] == "black") {
                firstPair.innerHTML = "Чувство обиды, злости, стремление к жесткости, авторитетности в отношениях.";
            }
            if (result[0] == "green" && result[1] == "grey") {
                firstPair.innerHTML = "Чувство неудовлетворенности, стремление к признанию, желание произвести впечатление.";
            }
            if (result[0] == "red" && result[1] == "blue") {
                firstPair.innerHTML = "Деловое возбуждение, активное стремление к деятельности, впечатлениям, удовольствиям.";
            }
            if (result[0] == "red" && result[1] == "green") {
                firstPair.innerHTML = "Деловое возбуждение, активное стремление к цели, преодолению всех трудностей, стремление к высокой оценке своей деятельности.";
            }
            if (result[0] == "red" && result[1] == "yellow") {
                firstPair.innerHTML = "Деловое, слегка повышенное возбуждение, увлеченность, оптимизм, стремление контактам, расширение сферы деятельности.";
            }
            if (result[0] == "red" && result[1] == "purple") {
                firstPair.innerHTML = "Повышенное возбуждение, не всегда адекватная увлеченность, стремление произвести впечатление.";
            }
            if (result[0] == "red" && result[1] == "brown") {
                firstPair.innerHTML = "Негативное настроние, огорчение из-за неудачи, нежелание лишиться благ приятной ситуации.";
            }
            if (result[0] == "red" && result[1] == "black") {
                firstPair.innerHTML = "Негативное настроение злость, стремление уйти из неблагоприятной ситуации.";
            }
            if (result[0] == "red" && result[1] == "gray") {
                firstPair.innerHTML = "Чувство неудовлетворенности, направленность на рискованное действие.";
            }
            if (result[0] == "yellow" && result[1] == "blue") {
                firstPair.innerHTML = "Настроение в общем положительное, стремление к позитивному эмоциональному состоянию, взаимовыдержке.";
            }
            if (result[0] == "yellow" && result[1] == "green") {
                firstPair.innerHTML = "Настроение в общем положительное, желание поиска первых путей решения стоящих задач, стремление к самоутверждению.";
            }
            if (result[0] == "yellow" && result[1] == "red") {
                firstPair.innerHTML = "Несколько повышенное деловое возбуждение, стремление к широкой активное.";
            }
            if (result[0] == "yellow" && result[1] == "purple") {
                firstPair.innerHTML = "Небольшая эйфория, стремление к ярким событиям, желание произвести впечатление.";
            }
            if (result[0] == "yellow" && result[1] == "brown") {
                firstPair.innerHTML = "Негативное настроение, огорчение и потребность в эмоциональной разрядке и отдыхе.";
            }
            if (result[0] == "yellow" && result[1] == "black") {
                firstPair.innerHTML = "Весьма негативное настроение, стремление уйти от любых проблем, склонность к необходимым, малоадекватным решениям.";
            }
            if (result[0] == "yellow" && result[1] == "gray") {
                firstPair.innerHTML = "Негативное угнетенное стояние, стремление выйти из неприятной ситуации, четкое представление о том, как это сделать.";
            }
            if (result[0] == "purple" && result[1] == "blue") {
                firstPair.innerHTML = "Неопределенное настроение, стремление к согласию и гармонии.";
            }
            if (result[0] == "purple" && result[1] == "green") {
                firstPair.innerHTML = "Настороженность, желание произвести впечатление.";
            }
            if (result[0] == "purple" && result[1] == "red") {
                firstPair.innerHTML = "Некоторое возбуждение, увлеченность, активное стремление произвести впечатление.";
            }
            if (result[0] == "purple" && result[1] == "yellow") {
                firstPair.innerHTML = "Возбуждение, фантазирование, стремление к ярким событиям.";
            }
            if (result[0] == "purple" && result[1] == "brown") {
                firstPair.innerHTML = "Возбуждение, направленность на сильные эмоциональные переживания.";
            }
            if (result[0] == "purple" && result[1] == "black") {
                firstPair.innerHTML = "Негативное состояние.";
            }
            if (result[0] == "purple" && result[1] == "gray") {
                firstPair.innerHTML = "Напряжение, стремление оградить себя от конфликтов, стресса.";
            }
            if (result[0] == "brown" && result[1] == "blue") {
                firstPair.innerHTML = "Напряжение, страх одиночества, желание уйти из неблагоприятной ситуации.";
            }
            if (result[0] == "brown" && result[1] == "green") {
                firstPair.innerHTML = "Чувство беспокойства, стремление к строгому контролю над собой, чтобы избежать ошибки.";
            }
            if (result[0] == "brown" && result[1] == "red") {
                firstPair.innerHTML = "Активное стремление к эмоциональной разрядке.";
            }
            if (result[0] == "brown" && result[1] == "yellow") {
                firstPair.innerHTML = "Утрата веры в положительные перспективы, вероятность необдуманных решений («мне все равно»).";
            }
            if (result[0] == "brown" && result[1] == "purple") {
                firstPair.innerHTML = "Чувство неудовлетворенности, стремление к комфорту.";
            }
            if (result[0] == "brown" && result[1] == "black") {
                firstPair.innerHTML = "Негативное состояние, разочарованность, стремление к покою, желание уйти от активности.";
            }
            if (result[0] == "brown" && result[1] == "gray") {
                firstPair.innerHTML = "Весьма негативное состояние, стремление уйти от сложных проблем, а не бороться с ними.";
            }
            if (result[0] == "black" && result[1] == "blue") {
                firstPair.innerHTML = "Весьма негативное состояние, стремление уйти от проблем («оставили бы в покое»).";
            }
            if (result[0] == "black" && result[1] == "green") {
                firstPair.innerHTML = "Возбуждение, гневное отношение к окружающим, не всегда адекватное упрямство.";
            }
            if (result[0] == "black" && result[1] == "red") {
                firstPair.innerHTML = "Сильное возбуждение, возможны аффективные поступки.";
            }
            if (result[0] == "black" && result[1] == "yellow") {
                firstPair.innerHTML = "Весьма негативное состояние, отчаяние, суицидные мысли.";
            }
            if (result[0] == "black" && result[1] == "purple") {
                firstPair.innerHTML = "Напряженность, мечты о гармонии.";
            }
            if (result[0] == "black" && result[1] == "brown") {
                firstPair.innerHTML = "Возбуждение, постановка нереальных задач, стремление уйти от беспокойных мыслей, неблагоприятных ситуаций.";
            }
            if (result[0] == "black" && result[1] == "grey") {
                firstPair.innerHTML = "Чувство безнадежности, обреченности, стремление сопротивляться всему, неадекватность.";
            }
            if (result[0] == "grey" && result[1] == "blue") {
                firstPair.innerHTML = "Негативное состояние, желание спокойной ситуации.";
            }
            if (result[0] == "grey" && result[1] == "green") {
                firstPair.innerHTML = "Негативное состояние, ощущение враждебности окружающих и желание оградиться от среды.";
            }
            if (result[0] == "grey" && result[1] == "red") {
                firstPair.innerHTML = "Негативное состояние, возвышенные требования к окружающим, не всегда адекватная активность.";
            }
            if (result[0] == "grey" && result[1] == "yellow") {
                firstPair.innerHTML = "Негативное состояние, стремление уйти от проблем, а не решать их.";
            }
            if (result[0] == "grey" && result[1] == "purple") {
                firstPair.innerHTML = "Чувство беспокойства и настороженности, стремление скрыть это чувство.";
            }
            if (result[0] == "grey" && result[1] == "brown") {
                firstPair.innerHTML = "Весьма негативное стояние, стремление уйти от всего сложного, трудного, от волнения.";
            }
            if (result[0] == "grey" && result[1] == "black") {
                firstPair.innerHTML = "Весьма негативное состояние, обида, чувство угнетенности, вероятность неадекватных решений.";
            }
            if (result[0] == "grey" && result[1] == "blue") {
                secondPair.innerHTML = "Чувство неудовлетворенности, эмоциональной напряженности.";
            }
            if (result[0] == "grey" && result[1] == "green") {
                secondPair.innerHTML = "Эмоциональная напряженность, желание выйти из неблагоприятной ситуации.";
            }
            if (result[0] == "grey" && result[1] == "red") {
                secondPair.innerHTML = "Раздраженность, чувство беспомощности.";
            }
            if (result[0] == "grey" && result[1] == "yellow") {
                secondPair.innerHTML = "Тревожность, неуверенность в своих силах.";
            }
            if (result[0] == "grey" && result[1] == "purple") {
                secondPair.innerHTML = "Небольшое контролируемое возбуждение.";
            }
            if (result[0] == "grey" && result[1] == "brown") {
                secondPair.innerHTML = "Тревожность, неуверенность в своих силах, но при этом завышенная требовательность, желание достичь признания своей личности.";
            }
            if (result[0] == "grey" && result[1] == "black") {
                secondPair.innerHTML = "Отрицание каких-либо ограничений своей личности, активное стремление к деятельности.";
            }
            if (result[0] == "blue" && result[1] == "green") {
                secondPair.innerHTML = "Сильное напряжение, стремление избавиться от негативного стрессового состояния.";
            }
            if (result[0] == "blue" && result[1] == "red") {
                secondPair.innerHTML = "Сильное напряжение, чувство беспомощности, желание выйти из эмоциональной ситуации.";
            }
            if (result[0] == "blue" && result[1] == "yellow") {
                secondPair.innerHTML = "Состояние, близкое к стрессу, эмоциональные негативные переживания, чувство беспомощности.";
            }
            if (result[0] == "blue" && result[1] == "purple") {
                secondPair.innerHTML = "Состояние, близкое к стрессу, сложность взаимоотношений, чувство ограниченности в возможностях, нетерпеливость.";
            }
            if (result[0] == "blue" && result[1] == "brown") {
                secondPair.innerHTML = "Эмоциональная неудовлетворенность, самоограничение, поиск поддержки.";
            }
            if (result[0] == "blue" && result[1] == "black") {
                secondPair.innerHTML = "Состояние, близкое к стрессу, эмоциональная неудовлетворенность, стремление уйти из психогенной ситуации.";
            }
            if (result[0] == "blue" && result[1] == "grey") {
                secondPair.innerHTML = "Несколько угнетенное состояние, тревожность, ощущение бесперспективности.";
            }
            if (result[0] == "green" && result[1] == "blue") {
                secondPair.innerHTML = "Угнетенное состояние неверие в свои силы, стремление уйти из неприятной ситуации.";
            }
            if (result[0] == "green" && result[1] == "red") {
                secondPair.innerHTML = "Сильное возбуждение, тягостные переживания, отношения со средой считает для себя враждебными, возможны аффективные поступки.";
            }
            if (result[0] == "green" && result[1] == "yellow") {
                secondPair.innerHTML = "Состояние, близкое к фрустрации, чувство разочарования, нерешительность.";
            }
            if (result[0] == "green" && result[1] == "purple") {
                secondPair.innerHTML = "Состояние, близкое к стрессовому, чувство оскорбленного достоинства, неверие в свои силы.";
            }
            if (result[0] == "green" && result[1] == "brown") {
                secondPair.innerHTML = "Состояние, близкое к стрессовому, неадекватно повышенный самоконтроль необоснованное стремление к признанию.";
            }
            if (result[0] == "green" && result[1] == "black") {
                secondPair.innerHTML = "Состояние фрустрации за ограничения амбициозных требований, недостаточная целеустремленность.";
            }
            if (result[0] == "green" && result[1] == "grey") {
                secondPair.innerHTML = "Состояние фрустрации, раздраженность из-за ряда неудач, снижение волевых качеств.";
            }
            if (result[0] == "red" && result[1] == "blue") {
                secondPair.innerHTML = "Подавляемое возбуждение, раздражительность, нетерпеливость, поиск выхода из негативных отношений, сложившихся с близкими людьми.";
            }
            if (result[0] == "red" && result[1] == "green") {
                secondPair.innerHTML = "Состояние стресса из-за неадекватной самооценки.";
            }
            if (result[0] == "red" && result[1] == "yellow") {
                secondPair.innerHTML = "Мнительность, тревожность, неадекватная оценка среды, стремление к самооправданию.";
            }
            if (result[0] == "red" && result[1] == "purple") {
                secondPair.innerHTML = "Состояние стресса из-за за неудачных попыток достичь взаимопонимания, чувство неуверенности, беспомощности, желание сочувствия.";
            }
            if (result[0] == "red" && result[1] == "brown") {
                secondPair.innerHTML = "Сильное напряжение, вызванное иногда сексуальным самоограничением, отсутствие дружеских контактов, неуверенность в своих силах.";
            }
            if (result[0] == "red" && result[1] == "black") {
                secondPair.innerHTML = "Состояние стресса из-за глубокого разочарования, фрустрация, чувство тревожности, бессилия решить конфликтную проблему, желание выйти из фрустрирующей ситуации любым путем, сомнение в том, что это удастся.";
            }
            if (result[0] == "red" && result[1] == "grey") {
                secondPair.innerHTML = "Сдерживаемое возбуждение, чувство утрачиваемой перспективы, вероятность нервного истощения.";
            }
            if (result[0] == "yellow" && result[1] == "blue") {
                secondPair.innerHTML = "Чувство разочарования, состояние, близкое к стрессу, стремление подавить негативные эмоции.";
            }
            if (result[0] == "yellow" && result[1] == "green") {
                secondPair.innerHTML = "Состояние нерешительности, тревожности, разочарования.";
            }
            if (result[0] == "yellow" && result[1] == "red") {
                secondPair.innerHTML = "Состояние стресса, сопровождаемое возбуждением, сомнения в успехе, претензии, не подкрепляемые реальными возможностями, самооправдание.";
            }
            if (result[0] == "yellow" && result[1] == "purple") {
                secondPair.innerHTML = "Эмоциональное разочарование и чувство беспокойства, тревоги, разочарования.";
            }
            if (result[0] == "yellow" && result[1] == "brown") {
                secondPair.innerHTML = "Напряженность, чувство неуверенности, настороженности, стремление избежать контроля извне.";
            }
            if (result[0] == "yellow" && result[1] == "black") {
                secondPair.innerHTML = "Напряженность, чувство неуверенности, настороженности, стремление избежать контроля извне.";
            }
            if (result[0] == "yellow" && result[1] == "grey") {
                secondPair.innerHTML = "Напряженность, чувство боязни потерять что-то важное, упустить возможности, напряженное ожидание.";
            }
            if (result[0] == "purple" && result[1] == "blue") {
                secondPair.innerHTML = "Чувство неудовлетворенности, стимулирующее к активности, стремление к сотрудничеству.";
            }
            if (result[0] == "purple" && result[1] == "green") {
                secondPair.innerHTML = "Стрессовые состояния из-за неосуществившегося самоутверждения.";
            }
            if (result[0] == "purple" && result[1] == "red") {
                secondPair.innerHTML = "Стрессовое состоя из-за неудач в активных, иногда необдуманных действ.";
            }
            if (result[0] == "purple" && result[1] == "yellow") {
                secondPair.innerHTML = "Настороженность, подозрительность, разочарование, замкнутость.";
            }
            if (result[0] == "purple" && result[1] == "brown") {
                secondPair.innerHTML = "Стресс, вызванный нарушением желательных взаимоотношений, повышенная взыскательность к другим.";
            }
            if (result[0] == "purple" && result[1] == "black") {
                secondPair.innerHTML = "Напряжение из-за ограничения в самостоятельных решениях, стремление к взаимопониманию, откровенному выражению мыслей.";
            }
            if (result[0] == "purple" && result[1] == "grey") {
                secondPair.innerHTML = "Проявление нетерпения, но в то же время стремление к самоконтролю, вызывает некоторое эмоциональное возбуждение.";
            }
            if (result[0] == "brown" && result[1] == "blue") {
                secondPair.innerHTML = "Негативное состояние, чувство неудовлетворенности из-за недостаточного признания заслуг (реальных и предполагаемых), стремление к самоограничению и самоконтролю.";
            }
            if (result[0] == "brown" && result[1] == "green") {
                secondPair.innerHTML = "Негативное состояние из-за чрезмерного самоконтроля, упрямое желание выделиться, сомнения в том, что это удастся.";
            }
            if (result[0] == "brown" && result[1] == "red") {
                secondPair.innerHTML = "Стрессовое состояние из-за подавленности эротических и других биологических потребностей, стремление к сотрудничеству для выхода из стресса.";
            }
            if (result[0] == "brown" && result[1] == "yellow") {
                secondPair.innerHTML = "Напряженность стремления скрыть тревогу под маской уверенности и беспечности.";
            }
            if (result[0] == "brown" && result[1] == "purple") {
                secondPair.innerHTML = "Негативное состояние из-за неудовлетворенного стремления к чувствственной гармонии.";
            }
            if (result[0] == "brown" && result[1] == "black") {
                secondPair.innerHTML = "Стремление уйти из подчинения, негативное отношение к различным запретам.";
            }
            if (result[0] == "brown" && result[1] == "grey") {
                secondPair.innerHTML = "Стрессовое состояние из-за подавления биологических, сексуальных потребностей.";
            }
            if (result[0] == "black" && result[1] == "blue") {
                secondPair.innerHTML = "Состояние беспокойства в связи со скрываемым желанием получить помощь, поддержку.";
            }
            if (result[0] == "black" && result[1] == "green") {
                secondPair.innerHTML = "Состояние, близкое к фрустрации из-за ограничения свободы желаемых действий, стремление избавиться от помех.";
            }
            if (result[0] == "black" && result[1] == "red") {
                secondPair.innerHTML = "Стрессовое состояние, вызванное разочарованием в ожидаемой ситуации, эмоциональное возбуждение.";
            }
            if (result[0] == "black" && result[1] == "yellow") {
                secondPair.innerHTML = "Стрессовое состояние из-за боязни дальнейших неудач, отказ от разумных компромиссов.";
            }
            if (result[0] == "black" && result[1] == "purple") {
                secondPair.innerHTML = "Поиски идеализированной ситуации.";
            }
            if (result[0] == "black" && result[1] == "brown") {
                secondPair.innerHTML = "Стрессовое состояние из-за неприятных ограничений, запретов, стремление сопротивляться ограничениям, уйти от заурядности.";
            }
            if (result[0] == "black" && result[1] == "grey") {
                secondPair.innerHTML = "Стремление уйти из неблагоприятной ситуации.";
            }
            if (result[0] == "grey" && result[1] == "blue") {
                secondPair.innerHTML = "Некоторое напряжение, стремление противостоять негативным чувствам.";
            }
            if (result[0] == "grey" && result[1] == "green") {
                secondPair.innerHTML = "Негативное состояние в связи с перенапряжением, переутомлением.";
            }
            if (result[0] == "grey" && result[1] == "red") {
                secondPair.innerHTML = "Подавляемое беспокойство, возможность аффективных действий, раздражительность.";
            }
            if (result[0] == "grey" && result[1] == "yellow") {
                secondPair.innerHTML = "Чувства тревожности, неуверенности.";
            }
            if (result[0] == "grey" && result[1] == "purple") {
                secondPair.innerHTML = "Напряжение в связи с подавлением чувственных переживаний.";
            }
            if (result[0] == "grey" && result[1] == "brown") {
                secondPair.innerHTML = "Стремление выйти из неблагоприятной ситуации, несколько завышенная самооценка.";
            }
            if (result[0] == "grey" && result[1] == "black") {
                secondPair.innerHTML = "Стремление выйти из неблагоприятной ситуации, надежда на хорошие перспективы в будущем.";
            }

        })();
    }
}
