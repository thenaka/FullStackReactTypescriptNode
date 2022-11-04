var ClassA = /** @class */ (function () {
    function ClassA() {
    }
    ClassA.getFullName = function () {
        return "ClassA " + ClassA.typeName;
    };
    return ClassA;
}());
var a = new ClassA();
ClassA.typeName = "type";
console.log(ClassA.typeName);
