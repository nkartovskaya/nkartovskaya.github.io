/*Напишите программу, создающую строку, содержащую решётку 8х8,
 в которой линии разделяются символами новой строки.
 На каждой позиции либо пробел, либо #. В результате должна получиться
 шахматная доска.

 # # # #
 # # # #
 # # # #
 # # # #
 # # # #
 # # # #
 # # # #
 # # # #
 */

//loop for lines
for (j = 0; j < 8; j++) {
    //checking if j is even number
    if (j % 2 == 0) {
        //display line if j is even number
        console.log('# # # #');
    } else {
        //display data if j is odd number
        console.log(' # # # #');
    }
}
