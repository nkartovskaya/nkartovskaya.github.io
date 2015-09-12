/**
 Description:

 There's no such thing as private properties on a javascript object!
 But, maybe there are?

 Implement a function createSecretHolder(secret) which accepts any
 value as secret and returns an object with ONLY two methods

 getSecret() which returns the secret
 setSecret() which sets the secret
 var obj = createSecretHolder(5);
 obj.getSecret(); // returns 5
 obj.setSecret(2);
 obj.getSecret(); // returns 2
 */


//creating function createSecretHolder()
function createSecretHolder() {
    //defining variable secret, assigning as ""
    var secret = "";
    //returning object< which consists of two functions set and get
    return {
        //creating function getSecret, it returns secret
        getSecret: function () {
            //returning secret
            return secret;
        },
        //creating function setSecret, it receives phrase and put this phrase into variable secret
        setSecret: function (value) {
            secret = value;
        }
    }
}
//creating new object
var secret = createSecretHolder();
//calling function setSecret
secret.setSecret("Novyj secret");
//calling function getSecret
console.log(secret.getSecret());

