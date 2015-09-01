/**
 Есть объект ladder

 var ladder = {
  step: 0,
  up: function() { // вверх по лестнице
    this.step++;
  },
  down: function() { // вниз по лестнице
    this.step--;
  },
  showStep: function() { // вывести текущую ступеньку
    alert( this.step );
  }
};
 Сейчас, для последовательного вызова нескольких методов объекта, нужно
 делать так сделать так:

 ladder.up();
 ladder.up();
 ladder.down();
 ladder.showStep(); // 1
 Модифицируйте код методов объекта, чтобы вызовы можно было делать цепочкой:

 ladder.up().up().down().up().down().showStep(); // 1
 Такой подход называется «чейнинг» (chaining)
 */
//creating object ladder
var ladder = {
    //first item step
    step: 0,
    //method up, which has to increase step to 1
    up: function () {
        //increasing step to 1
        this.step++;
        //returning step
        return this;
    }
    ,
    //method down, which has to decrease step to 1
    down: function () {
        //decreasing step to 1
        this.step--;
        //returning step
        return this;
    }
    ,
    //method showStep, which has to show step
    showStep: function () {
        //display step
        console.log(this.step);
        //returning result
        return this;
    }
};
//calling object and all it's methods
console.log(ladder.up().up().down().up().showStep());
