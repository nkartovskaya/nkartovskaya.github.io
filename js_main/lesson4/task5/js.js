/*рассчитать сумму членов арифметической програссии от 1 до n с шагом d
 члены арифметической прогрессии a[n]=a[1]+(n-1)*d
 сумма членов арифметической прогрессии s=(a[1]+a[n])/2*n

 * */

(function (n, d) {
    var aN, s;
    aN = 1 + (n - 1) * d;
    s = (1 + aN) / 2 * n;
    console.log("Chlen arifmeticheskoj progressii n=" + aN);
    console.log("Summa chlenov arifmeticheskoj progressii ot 1 do n=" + s);
})(10, 2);
