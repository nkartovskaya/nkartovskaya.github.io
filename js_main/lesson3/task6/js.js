/*
 �������� ������� pow(x,n), ������� ���������� x � ������� n.
 ����� ������, �������� x �� ���� n ��� � ���������� ���������.
 */

//function for calculating pow n number x
(function (x, n) {
    //defining variables
    var powX = x;
    //loop for multiplication x*x n times
    for (var i = 2; i <= n; i++) {
        //multiplication
        powX = powX * x;
    }
    //display data
    console.log(powX);
    //function arguments
})(5, 2);


