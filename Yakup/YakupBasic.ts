// console.clear();
class Person {
  name: string;
  age: number;
  jobtitle: string;
  constructor(name: string, age: number, jobtitle: string) {
    this.name = name;
    this.age = age;
    this.jobtitle = jobtitle;
  }
  printPerson() {
    return `My Name is ${this.name}, i am ${this.age} years old and i am ${this.jobtitle}.`;
  }
}
let vartest = new Person("yakup", 30, "Web Developer");
console.table(vartest.printPerson());






// Basic ex1: class defined with variable. console log print var and function
