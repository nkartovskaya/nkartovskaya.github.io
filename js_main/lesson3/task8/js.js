/*Jenny has written a function that returns a greeting for a user.
However, she's in love with Johnny, and would like to greet him
slightly different. She added a special case to her function, but she made a mistake.
 Can you help her?*/

//function for greeting
function greet(name){
    //checking Johnny
    if(name === "Johnny") {
        //return for Johnny
        return "Hello, my love!";
    } else {
        //return for other people
        return "Hello, " + name + "!";
    }
}
//display data
console.log(greet("Johnny"));
