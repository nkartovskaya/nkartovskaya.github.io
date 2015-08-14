/*–ассчитать факториал числа n с помошью цикла*/

//function for calculating factorial n
(function factorial(n) {
    //defining variables
    var factN = 1;
    //loop for calculating factorial n
    for (var i = 2; i <= n; i++) {
        //calculating factorial
        factN = factN * i;
    }
    //display result
    console.log(factN);
    //n
})(7);