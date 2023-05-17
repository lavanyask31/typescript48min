"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var message = "hello world bb";
console.log(message);
// enum
// begins with 0
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 0] = "Red";
    Color1[Color1["Green"] = 1] = "Green";
    Color1[Color1["Blue"] = 2] = "Blue";
})(Color1 || (Color1 = {}));
var c1 = Color1.Green;
console.log("color c", c1); //1
// we can assign value
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 5] = "Red";
    Color2[Color2["Green"] = 6] = "Green";
    Color2[Color2["Blue"] = 7] = "Blue";
})(Color2 || (Color2 = {}));
var c2 = Color2.Green;
console.log("color c", c2); //6
// any
var randomValue = 10;
randomValue = true;
randomValue = "Vishwas";
// unknown type
var myVariable = 10;
// console.log(myVariable.name);
// myVariable();
// myVariable.toUpperCase();
function hasName(obj) {
    return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasName(myVariable))
    console.log(myVariable.name);
// (myVariable as string).toUpperCase();
// ******************** type inferance
var a;
a = true;
a = 10;
var b = 4;
// b = true;  // we can't assign value of different type because of type inferance
// ************** multi type
var multiType;
multiType = 20;
multiType = true;
// ***anyType
var anyType;
anyType = 20;
anyType = true;
// *********************** functions
function add1(num1, num2) {
    return num1 + num2;
    //   return "dd";
}
add1(5, 5);
// add(5, "5");
// optional parameter should always be after the required parameter
function add2(num1, num2) {
    if (num2) {
        return num1 + num2;
    }
    else
        return num1;
}
console.log("xx", add2(3));
function add3(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    return num1 + num2;
    //   return "dd";
}
console.log("xx", add3(3, 12));
console.log("xx", add3(3));
// *************************************Interface
function fullName(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p = {
    firstName: "Bruce",
    lastName: "ddd",
};
fullName(p);
function fullName1(person) {
    console.log("".concat(person.firstName, " ").concat(person.lastName));
}
var p1 = {
    firstName: "Bruce",
    //   lastName: "ddd",
};
fullName1(p1);
// ****************class
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good morning ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee("Vishwas");
console.log("emp1", emp1);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegateWork");
    };
    return Manager;
}(Employee));
var m1 = new Manager("Bruce");
m1.delegateWork();
m1.greet();
console.log("m1", m1);
//********************* Access modifier
var Employee1 = /** @class */ (function () {
    function Employee1(name) {
        this.employeeName = name;
    }
    Employee1.prototype.greet = function () {
        console.log("Good morning ".concat(this.employeeName));
    };
    return Employee1;
}());
var emp11 = new Employee1("Vishwas");
// console.log("emp11", emp11.employeeName); // can't access private property of class
emp11.greet();
var Manager1 = /** @class */ (function (_super) {
    __extends(Manager1, _super);
    function Manager1(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager1.prototype.delegateWork = function () {
        console.log("Manager delegateWork");
        // console.log(`Manager delegateWork ${this.employeeName}`); // can't access private property of parent class
        console.log("Manager delegateWork ".concat(this.employeeName1)); // protected property can be accessed by derived class
    };
    return Manager1;
}(Employee1));
var m11 = new Manager1("Bruce");
m11.delegateWork();
m11.greet();
// console.log("m11", m11.employeeName);  // can't access private property of parent class
