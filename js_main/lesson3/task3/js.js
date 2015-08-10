/*Ќапишите программу, котора€ выводит через console.log все числа от 1 до 100,
с двум€ исключени€ми. ƒл€ чисел, нацело дел€щихс€ на 3, она должна выводить СFizzТ,
а дл€ чисел, дел€щихс€ на 5 (но не на 3) Ц СBuzzТ.*/

//loop for number that is checked
for (i=1; i<=100; i++) {
    //checking if i%5==0 and i%3!=0
    if (i%5==0&&i%3!=0) {
        //display data
        console.log('Buzz');
        //checking if first condition is wrong and if i%3==0
    } else if (i%3==0) {
        //display data
        console.log('Fizz');
        //all number, if first and second conditions are wrong
    } else {
        //display data
        console.log(i);
    }
}
