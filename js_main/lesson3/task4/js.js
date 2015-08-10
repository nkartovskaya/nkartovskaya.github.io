/*Исправьте 1ю задачу так, чтобы она выводила «FizzBuzz»
для всех чисел, которые делятся и на 3, и на 5.
 */

//loop for number that is checked
for (i=1; i<=100; i++) {
    //checking if i%5==0 and i%3==0
    if (i%5==0&&i%3==0) {
        //display data
        console.log('FizzBuzz');
        //all number, if first and condition is wrong
    } else {
        //display data
        console.log(i);
    }
}
