import Persona from './classes';

class Employee extends Persona {
  //no need to define first and last name's access modification because they have been defined in the inherited class
  constructor(firstName: string, lastName: string, public position: string) {
    //use super to reference that the passed in properties are coming from the inherited class
    super(firstName, lastName);
  }
}

/**@NOTE typescript will overwrite methods from parent class if we redefine them in the child class */

let JohnD = new Employee("John", "Doe", "Java Engineer");
let JaneD = new Employee("Jane", "Doe", "Full-Stack Developer");

console.log(JohnD.fullName);
console.log(JaneD.sayHi(JohnD));