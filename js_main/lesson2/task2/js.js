//defining function yearResult
function yourResult() {
    //defining variables
    var result = parseInt(document.getElementById('yourNumber').value);
    //checking number >0
    if (result > 0) {
        //display data if number>0
        document.getElementById('yourResult').value = 1;
        //checking number <0
    } else if (result < 0) {
        //display data if number<0
        document.getElementById('yourResult').value = -1;
    } else {
        //display data if number=0
        document.getElementById('yourResult').value = 0;
    }
}
