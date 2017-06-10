/**
 * Generic class that can work over a variety of types
 */
var generics = (function () {
    function generics(profile) {
        this._profile = profile;
    }
    generics.prototype.greetMessage = function () {
        return "" + JSON.stringify(this._profile);
    };
    return generics;
}());
// Object creation generic type of class
var Config = new generics({ xpID: "karukar" });
var xpid = JSON.parse(Config.greetMessage());
console.log(xpid);
// Object creation generic type of class
var Profile = new generics({ xpID: "karukar", username: "Karthik" });
var info = JSON.parse(Profile.greetMessage());
console.log(info);
