/**
 У вас есть объект User, который хранит имя и фамилию в свойстве this.fullName:

 function User(fullName) {
  this.fullName = fullName;
}

 var vasya = new User('Александр Пушкин');
 Имя и фамилия всегда разделяются пробелом.

 Сделайте, чтобы были доступны свойства firstName и lastName, причём не только
 на чтение, но и на запись, вот так:

 var vasya = new User('Александр Пушкин');

 // чтение firstName/lastName
 console.log( vasya.firstName ); // Александр
 console.log( vasya.lastName ); // Пушкин

 // запись в lastName
 vasya.lastName = 'Толстой';

 console.log( vasya.fullName ); // Александр Толстой
 Важно: в этой задаче fullName должно остаться свойством, а firstName/lastName —
 реализованы через get/set. Лишнее дублирование здесь ни к чему.
 */

function User(fullName) {
    this.fullName = fullName;
    var fullNameArray = fullName.split(" ");
    var firstName = fullNameArray[0];
    var lastName = fullNameArray[1];
    return {
        getFirstName: function () {
            this.firstName = firstName;
            return this;
        },
        setFirstName: function (firstName) {
            this.firstName = firstName;
        },
        getLastName: function () {
            this.LastName = lastName;
            return this;
        },
        setLastName: function (lastName) {
            this.lastName = lastName;
        }
    };
};

var petya = new User("Petya Vasechkin");
petya.firstName="Vasya";
petya.lastName="Petechkin";
console.log(petya.getFirstName());
console.log(petya.getLastName());
petya.firstName="Masha";
petya.setLastName="Mishyna";
console.log(petya.getFirstName());
console.log(petya.getLastName());


