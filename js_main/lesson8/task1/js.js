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

var ladder = {
    step: 0,
        up: function () {
            this.step++;
            return this;
        }
        ,
        down: function () {
            this.step--;
            return this;
        }
        ,
        showStep: function () {
            console.log(this.step);
            return this;
        }
    };
    console.log(ladder.up().up().down().up().showStep());
