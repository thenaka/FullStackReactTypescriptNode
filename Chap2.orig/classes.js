var Person = /** @class */ (function () {
    function Person(msg) {
        this.msg = msg;
    }
    Person.prototype.speak = function () {
        this.msg = "speak" + this.msg;
        console.log(this.msg);
    };
    return Person;
}());
var tom = new Person("Hello");
tom.speak();
