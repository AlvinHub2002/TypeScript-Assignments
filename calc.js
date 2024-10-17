var calc = /** @class */ (function () {
    function calc() {
    }
    calc.prototype.add = function (a, b) {
        return a + b;
    };
    calc.prototype.sub = function (a, b) {
        return a - b;
    };
    calc.prototype.mul = function (a, b) {
        return a * b;
    };
    calc.prototype.divide = function (a, b) {
        if (b == 0)
            console.log("cannot divide with 0");
        return a / b;
    };
    calc.prototype.calculate = function (option, a, b) {
        switch (option) {
            case 'add':
                console.log("The sum is : " + this.add(a, b));
                break;
            case 'sub':
                console.log("Difference is : " + this.sub(a, b));
                break;
            case 'mul':
                console.log("Product is : " + this.mul(a, b));
                break;
            case 'div':
                console.log("The result is : " + this.divide(a, b));
                break;
            default:
                break;
        }
    };
    return calc;
}());
var cal = new calc();
console.log(cal.calculate('add', 5, 7));
console.log(cal.calculate('mul', 9, 5));
