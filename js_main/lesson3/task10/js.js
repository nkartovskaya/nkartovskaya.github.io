/*Timmy & Sarah think they are in love, but around where they live, they will
 only know once they pick a flower each. If one of the flowers has an even
 number of petals and the other has an odd number of petals it means they are in love.
 Write a function that will take the number of petals of each flower and
 return true if they are in love and false if they aren't.*/

//function for checking Timmy&Sarah's love
function love(numberPetalsTimmy, numberPetalsSarah) {
    //checking number of petals, Timmy's and Sarah's flowers must have different types numbers
    //odd+even or even+odd
    if ((numberPetalsTimmy % 2 == 0 && numberPetalsSarah % 2 != 0) || (numberPetalsTimmy % 2 != 0 && numberPetalsSarah % 2 == 0)) {
        //returning true-they are in love
        return true;
    } else {
        //returning false-they are not in love
        return false;
    }
}
//display data
console.log(love(22, 13));

