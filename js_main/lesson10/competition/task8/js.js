/**
 Let's build a calculator that can calculate the average for an arbitrary
 number of arguments.

 The test expects you to provide a Calculator object with an average method:

 Calculator.average()
 The test also expects that when you pass no arguments, it returns 0.
 The arguments are expected to be integers.

 It expects Calculator.average(3,4,5) to return 4.
 */

function calculatorAverage() {
    var sum=0;
    for (var i=0; i<arguments.length; i++) {
        sum+=arguments[i];
    }
    var average=sum/arguments.length;
    return average;
}
console.log(calculatorAverage(1,9,6,15,12));
console.log(calculatorAverage(15,16,100,0,12,9,89,5));

