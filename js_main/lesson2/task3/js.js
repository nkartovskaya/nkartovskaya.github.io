
//defining variables
var access = prompt("Who are you?", "");
//checking access if access==admin
if (access == 'admin') {
    //defining variables
    var password = prompt("Your password?", "");
    //checking password for access==admin
    //checking password if password==passw0rd
    if (password == 'passw0rd') {
        //display data if password correct
        alert('Welcome home!');
        //checking password if prompt is canceled
    } else if (password == null) {
        //display data for canceled prompt
        alert('Canceled');
        //checking password if password==something wrong (not passw0rd)
    } else {
        //display data for wrong password
        alert('Wrong password')
    }
    //checking access if prompt is canceled
} else if (access == null) {
    //display data for canceled prompt
    alert('Canceled')
    //checking access if acceess==something wrong (not admin)
} else {
    //display data for wrong access
    alert('Access denied');
}
