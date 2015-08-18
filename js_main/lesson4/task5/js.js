/*рассчитать сумму членов арифметической програссии от 1 до n с шагом d
 члены арифметической прогрессии a[n]=a[1]+(n-1)*d
 сумма членов арифметической прогрессии s=(a[1]+a[n])/2*n

 * */

//function for calculation sum of n items with step=d
(function (n, d) {
    //defining variables: aN - item, s - sum
    var aN, s;
    //calculation item with number=n, if step=d
    aN = 1 + (n - 1) * d;
    //calculation sum
    s = (1 + aN) / 2 * n;
    //display item with number n
    console.log("Chlen arifmeticheskoj progressii n=" + aN);
    //display sum
    console.log("Summa chlenov arifmeticheskoj progressii ot 1 do n=" + s);
    //data: number and step
})(10, 2);
