export {};
let message = "hello world bb";
console.log(message);

// enum
// begins with 0
enum Color1 {
  Red,
  Green,
  Blue,
}

let c1: Color1 = Color1.Green;
console.log("color c", c1); //1
// we can assign value
enum Color2 {
  Red = 5,
  Green,
  Blue,
}
let c2: Color2 = Color2.Green;
console.log("color c", c2); //6

// any
let randomValue: any = 10;
randomValue = true;
randomValue = "Vishwas";

// unknown type
let myVariable: unknown = 10;

// console.log(myVariable.name);
// myVariable();
// myVariable.toUpperCase();

function hasName(obj: any): obj is { name: string } {
  return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasName(myVariable)) console.log(myVariable.name);
// (myVariable as string).toUpperCase();
// ******************** type inferance
let a;
a = true;
a = 10;

let b = 4;
// b = true;  // we can't assign value of different type because of type inferance

// ************** multi type
let multiType: number | boolean;
multiType = 20;
multiType = true;

// ***anyType

let anyType: any;
anyType = 20;
anyType = true;

// *********************** functions

function add1(num1: number, num2: number): number {
  return num1 + num2;
  //   return "dd";
}

add1(5, 5);
// add(5, "5");
// optional parameter should always be after the required parameter
function add2(num1: number, num2?: number): number {
  if (num2) {
    return num1 + num2;
  } else return num1;
}

console.log("xx", add2(3));

function add3(num1: number, num2: number = 10): number {
  return num1 + num2;
  //   return "dd";
}
console.log("xx", add3(3, 12));
console.log("xx", add3(3));

// *************************************Interface
function fullName(person: { firstName: string; lastName: string }) {
  console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
  firstName: "Bruce",
  lastName: "ddd",
};

fullName(p);

// here if no of parameter increases it will be  mess to maintain all.. tht;s why we have interface in typescript

interface Person {
  firstName: string;
  lastName?: string;
}

function fullName1(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`);
}
let p1 = {
  firstName: "Bruce",
  //   lastName: "ddd",
};

fullName1(p1);

// ****************class

class Employee {
  employeeName: string;
  constructor(name: string) {
    this.employeeName = name;
  }

  greet() {
    console.log(`Good morning ${this.employeeName}`);
  }
}

let emp1 = new Employee("Vishwas");
console.log("emp1", emp1);
emp1.greet();

class Manager extends Employee {
  constructor(managerName: string) {
    super(managerName);
  }
  delegateWork() {
    console.log("Manager delegateWork");
  }
}

let m1 = new Manager("Bruce");
m1.delegateWork();
m1.greet();
console.log("m1", m1);

//********************* Access modifier

class Employee1 {
  private employeeName: string; // only accessible inside the class
  protected employeeName1: string;
  constructor(name: string) {
    this.employeeName = name;
  }

  greet() {
    console.log(`Good morning ${this.employeeName}`);
  }
}

let emp11 = new Employee1("Vishwas");
// console.log("emp11", emp11.employeeName); // can't access private property of class
emp11.greet();

class Manager1 extends Employee1 {
  constructor(managerName: string) {
    super(managerName);
  }
  delegateWork() {
    console.log("Manager delegateWork");
    // console.log(`Manager delegateWork ${this.employeeName}`); // can't access private property of parent class
    console.log(`Manager delegateWork ${this.employeeName1}`); // protected property can be accessed by derived class
  }
}

let m11 = new Manager1("Bruce");
m11.delegateWork();
m11.greet();
// console.log("m11", m11.employeeName);  // can't access private property of parent class
