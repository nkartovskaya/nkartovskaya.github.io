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

//creating function for transforming property "fullName"
function user(fullName) {
    //assigning value
    this.fullName = fullName;
    //defining variable fullNameArray for split it to two items
    var fullNameArray = fullName.split(" ");
    //assigning first name
    this.firstName = fullNameArray[0];
    //assingning last name
    this.lastName = fullNameArray[1];
    //creating methods for setting and getting first and last names
    return {
        getFirstName: function () {
            return this.firstName;
        },
        setFirstName: function (firstName) {
            this.firstName = firstName;
        },
        getLastName: function () {
            return this.lastName;
        },
        setLastName: function (lastName) {
            this.lastName = lastName;
        }
    };
}
//creating new object petya
var petya = new user("Petya Vasechkin");
//setting new first name
petya.setFirstName("Masha");
//getting new first name and displaying result
console.log(petya.getFirstName());
//setting new last name
petya.setLastName("Sinitsyna");
//getting new last name and displaying result
console.log(petya.getLastName());


