/**
 Write a function shuffle(arr) to shuffle an array.
 */

//creating function for shuffle array
function shuffleArray(array) {
    //loop for shuffle array
    for (var i = 0; i < array.length; i++) {
        //defining variable newNumber, which is calculated in random way
        var newNumber = parseInt(Math.random() * array.length);
        //defining variable temp for chenging items
        var temp;
        //changing item[i] and item[newNumber]
        temp = array[i];
        array[i] = array[newNumber];
        array[newNumber] = temp;
    }
    //returning result-shuffled array and display it
    return console.log(array);
}
//calling function
shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
