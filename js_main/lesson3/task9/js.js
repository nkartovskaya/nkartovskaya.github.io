/*In this simple assignment you are given a number and have to make it negative.
But maybe the number is already negative?

Example:

makeNegative(1); // return -1
makeNegative(-5); // return -5
makeNegative(0); // return 0
Notes:

The number can be negative already, in which case no change is required.
Zero (0) can't be negative, see examples above.
*/

var number=+prompt('Vvedite chislo',"");
if (number<0) {
    alert('Number is negative');
} else if (number>0) {
    alert('Number was transformed '+-number);
} else {
    alert('Number is 0');
}
