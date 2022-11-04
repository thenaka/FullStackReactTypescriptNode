var Runner = /** @class */ (function () {
    function Runner(typeName) {
        this.typeName = typeName;
    }
    Runner.prototype.run = function () {
        Runner.lastRunTypeName = this.typeName;
    };
    return Runner;
}());
var aa = new Runner("a");
var bb = new Runner("b");
bb.run();
aa.run();
console.log(Runner.lastRunTypeName);
