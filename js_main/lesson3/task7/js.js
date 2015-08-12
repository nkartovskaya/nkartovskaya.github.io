/*Create a function that takes an integer as an argument and returns "Even" or "Odd".*/

//function for checking even/odd
(function () {
    //defining variables
    var number = +prompt('Vvedite chislo', "");
    //checking cancel, 0, ' '
    if (number == 0) {
        //display data for cancel, 0, ' '
        alert('Hm...');
        //checking odd number
    } else if (number % 2 != 0) {
        //display data for odd number
        alert('Number is odd');
    } else {
        //display data for even number
        alert('Number is even');
    }
})();
