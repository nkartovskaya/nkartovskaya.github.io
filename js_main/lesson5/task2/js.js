/**
 Напишите функцию multiplyNumeric которая принимает на вход объект и возвращает
 объект в котором все числовые значения у свойств умножены на 2.

 // Before
 var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};

 multiplyNumeric(image);

 // after
 image = {
    width: 200,
    height: 800,
    title: 'Cool image'
};
 */

//------------------VER1--------------------

//creating object
var image = {
    "width": 100,
    "height": 400,
    "title": "Cool image"
}

//function for transforming numeric items
function multiplyNumeric(image) {
    //loop for searching numeric items and multiplying them
    for (var item in image) {
        //checking item is it numeric or not
        if (!isNaN(image[item])) {
            //if item is numeric, multiplying it
            image[item] *= 2;
        }
    }
    //return object with new value of numeric items
    return image;
}
//colling function, display data
console.log(multiplyNumeric(image));

//------------------VER2----------------------

//creating object
var image = {
    "width": 100,
    "height": 400,
    "title": "Cool image"
}
//multiplying numeric item width and assigning new value
image.width *= 2;
//multiplying numeric item height and assigning new value
image.height *= 2;
//display object with new value of numeric items
console.log(image);

//----------------VER3-----------------------

//creating object
var image = {
    "width": 100,
    "height": 400,
    "title": "Cool image"
}

//defining variable for saving item, which is not numeric
var titleBox = image.title;
//delete property, which is not numeric
delete image.title;
//loop for multiplying all item of object
for (var item in image) {
    //multiplying all items of obgect
    image[item] *= 2;
}
//adding new property and assigning value, which was saved in titleBox
image.title = titleBox;
//desplay object with new value of numeric items
console.log(image);