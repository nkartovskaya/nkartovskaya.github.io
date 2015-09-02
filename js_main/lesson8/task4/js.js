/**
 Добавить в конструктор Article:

 Подсчёт общего количества созданных объектов.
 Запоминание даты последнего созданного объекта.
 Используйте для этого статические свойства.
 Пусть вызов Article.showStats() выводит то и другое.

 Использование:

 function Article() {
  this.created = new Date();
  // ... ваш код ...
}

 new Article();
 new Article();

 Article.showStats(); // Всего: 2, Последняя: (дата)

 new Article();

 Article.showStats(); // Всего: 3, Последняя: (дата)
 */

//creating function for calculating objects and saving last's object date
function Article() {
    //increasing count
    Article.count++;
    //creating date
    Article.created = new Date();
}
//adding count and assigning it's value
Article.count = 0;
//creating method for showing of amount of objects and last object's date
Article.showStats = function () {
    //display result
    console.log("Vsego: " + this.count + " Posledniaya data: " + Article.created);
}
//creating new object
new Article();
//calling method showStats
Article.showStats();
//creating new object
new Article();
//calling method showStats
Article.showStats();
//creating new object
new Article();
//calling method showStats
Article.showStats();