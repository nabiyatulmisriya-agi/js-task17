// class method
class car {
  constructor(name, year) {
    this.name = name;
    this.greet = function () {
      return "car  name is" + this.name;
    };
  }
}
const mycar = new car("brizza");
console.log(mycar.greet());

//getter and setter
class person {
  constructor(name) {
    this.name = name;
  }
  get personName() {
    return this.name;
  }
  set personName(x) {
    this.name = x;
  }
}
const personOne = new person("misriya");
console.log(personOne.name);

//overriding
class personThree {
  constructor(name) {
    this.name = name;
    this.occupation = "MD";
  }
  greet() {
    console.log(`hello ${this.name}`);
  }
}
class student extends personThree {
  constructor(name) {
    super(name);
    this.occupation = "student";
  }
  greet() {
    console.log(`occupation is ${this.occupation}`);
  }
}
let studentOne = new student("misriya");
console.log(studentOne.greet());

//salary increement with inheritence
class salaryInc {
  constructor(name, dept, salary) {
    this.name = name;
    this.dept = dept;
    this.salary = salary;
  }
  greet() {
    console.log(" " + this.name, " " + this.dept, " " + (this.salary + 5000));
  }
}
class students extends salaryInc {}
var studentsOne = new salaryInc("arsh", "cse", 1000);
var studentsTwo = new salaryInc("prsh", "ise", 1000);
console.log(studentsOne.greet());
console.log(studentsTwo.greet());

//inheritence
class personfive {
  contructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`hello ${this.name}`);
  }
}
class studentfive extends personfive {
  constructor(name) {
    super(name);
  }
}
let studentsOnee = new studentfive("misriya");
console.log(studentsOnee.greet());
