/**
 Есть объект из чисел, строк и прочих данных. Необходимо его превратить в массив
 состоящий только из чисел или строк. Написать метод extractNumber или extractString,
 который будет возвращать массив.

 var obj = {
  person1Age: 20,
  person1Name: 'Ivanov',
  person2Age: 30,
  person2Name: 'Petrov',
  person3Age: 40,
  person3Name: 'Sidorov'
};

 var ages = [20,30,40];
 var names = ['Ivanov', 'Petrov', 'Sidorov'];
 */


//creating object obj
var obj = {
    person1Age: 20,
    person1Name: 'Ivanov',
    person2Age: 30,
    person2Name: 'Petrov',
    person3Age: 40,
    person3Name: 'Sidorov'
};
//creating array ages for item, which has type number
var ages = [];
//creating array for item, which has type string
var names = [];
//creating function for separation object
function separation(object) {
    //loop for checking array's items
    for (var key in obj) {
        //condition for items, which has type number
        if (typeof  obj[key] == "number") {
            //adding item to array ages if true
            ages.push(obj[key]);
            //condition for items, which has type string
        } else if (typeof obj[key] == "string") {
            //adding item to array names if true
            names.push(obj[key]);
        }
    }
}
//calling function
separation(obj);
//display arrays
console.log(ages);
console.log(names);
