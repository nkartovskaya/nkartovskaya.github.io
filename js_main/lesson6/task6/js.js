/**
 Напишите функцию unique(arr), которая возвращает массив, содержащий
 только уникальные элементы arr (arr — массив строк).

 var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()' ];

 console.log( unique(strings) ); // кришна, харе, 8-()
 */

//creating array
var strings = ['krishna', 'krishna', 'khare', 'khare', 'khare', 'khare', 'krishna', 'krishna', '8-()'];
//creating function for search unique items
function unique(strings) {
    //creating array for saving result
    var result = [];
    //label
    next:
        //loop for checking items
        for (var i = 0; i < strings.length; i++) {
            //defining variable for saving item for check
            var temp = strings[i];
            //checking whether item in array result already
            for (var j = 0; j < result.length; j++) {
                //if item already exists in array result, move to label next
                if (result[j] == temp) {
                    continue next;
                }
            }
            //if item doesn't exists in array result, adding item to this array
            result.push(temp);
        }
    //returning result
    return result;
}
//calling function ang display data
console.log(unique(strings));

