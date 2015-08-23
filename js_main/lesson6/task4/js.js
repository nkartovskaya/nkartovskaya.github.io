/**
 Напишите код, который отсортирует массив объектов people по полю age.

 Например:

 var vasya = { name: 'Вася', age: 23 };
 var masha = { name: 'Маша', age: 18 };
 var vovochka = { name: 'Вовочка', age: 6 };

 var people = [ vasya , masha , vovochka ];

 ... ваш код ...

 // теперь people: [vovochka, masha, vasya]
 console.log(people[0].age) // 6
 Выведите список имён в массиве после сортировки.
 */

//creating objects vasya, masha, vovochka
var vasya = {
    name: 'Vasya',
    age: 23
};
var masha = {
    name: 'Masha',
    age: 18
};
var vovochka = {
    name: 'Vovochka',
    age: 6
};
//creating array of object
var people = [vasya, masha, vovochka];
//creating function increase for sorting array with property age
function increase(peopleA, peopleB) {
    if (peopleA.age > peopleB.age) {
        return 1;
    } else if (peopleA.age < peopleB.age) {
        return -1;
    } else {
        return 0;
    }
}
//sorting array by function increase
people.sort(increase);
//display array people with all properties of objects
for (var i = 0; i < people.length; i++) {
    console.log(people[i]);
}




