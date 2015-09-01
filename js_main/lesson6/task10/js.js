/**
 Create a function, getVillainName, that returns a villain name based on the user's
 birthday. (The birthday will be passed to the function as a valid Date object,
 so for simplicity, there's no need to worry about converting strings to dates.)

 The first name will come from the month, and the last name will come from the
 last digit of the date.

 Month -> first name

 January -> "The Evil"
 February -> "The Vile"
 March -> "The Cruel"
 April -> "The Trashy"
 May -> "The Despicable"
 June -> "The Embarrassing"
 July -> "The Disreputable"
 August -> "The Atrocious"
 September -> "The Twirling"
 October -> "The Orange"
 November -> "The Terrifying"
 December -> "The Awkward"

 Last digit of date -> last name

 0 -> "Mustache"
 1 -> "Pickle"
 2 -> "Hood Ornament"
 3 -> "Raisin"
 4 -> "Recycling Bin"
 5 -> "Potato"
 6 -> "Tomato"
 7 -> "House Cat"
 8 -> "Teaspoon"
 9 -> "Laundry Basket"

 The returned value should be a string in the form of "First Name Last Name".

 For example, a birthday of November 18 would return "The Terrifying Teaspoon"
 */

//creating object month
var month = {
    January: "The Evil",
    February: "The Vile",
    March: "The Cruel",
    April: "The Trashy",
    May: "The Despicable",
    June: "The Embarrassing",
    July: "The Disreputable",
    August: "The Atrocious",
    September: "The Twirling",
    October: "The Orange",
    November: "The Terrifying",
    December: "The Awkward",
}
//creating object day
var day = {
    0: "Mustache",
    1: "Pickle",
    2: "Hood Ornament",
    3: "Raisin",
    4: "Recycling Bin",
    5: "Potato",
    6: "Tomato",
    7: "House Cat",
    8: "Teaspoon",
    9: "Laundry Basket",
}
//creating date
var date = new Date(0, 11, 22);

//creating function for searching villain's name
function getVillainName(month, day, date) {
    //defining variable villainName for saving result
    var villainName = "";
    //defining variable monthNumber and assigning value
    var monthNumber = +(date.getMonth() + 1);
    //defining variable dayNumber and assigning value
    var dayNumber = date.getDate();
    if (dayNumber > 9) {
        dayNumber = dayNumber + "";
        dayNumber = +dayNumber[dayNumber.length - 1];
    }
    //defining variable count for comparison with monthNumber
    var count = 1;
    //loop for searching month (first part of villainName)
    for (var item in month) {
        //condition for searching month
        if (count == monthNumber) {
            //adding first part to villainName
            villainName = month[item];
        }
        //increasing count
        count++;
    }
    //loop for searching day (second part of villainName)
    for (var key in day) {
        //condition for searching day
        if (dayNumber == key) {
            //adding second part to villainName
            villainName += " " + day[key];
        }
    }
    //returning villainName
    return villainName;
}
//calling function and display data
console.log(getVillainName(month, day, date));













