class Persona {
  
  //instead of declaring variables, followed by defining their value within a constructor. We could just pass them only into the constructor parameter, and use the public keyword to get the normal public usage that standard javaScript allows 
  // firstName: string;
  // lastName: string;

  //we can also create overloads for our constructor in the same way that we write them for methods
  constructor(public firstName: string, public lastName: string) {
  }
  
  //getter function for concatinating first and last name
  get fullName() {
    return `${ this.firstName } ${ this.lastName }`;
  }

  sayHi(): string;
  sayHi(name: string): string;
  sayHi(person: Persona): string;

  sayHi(obj?: any) {
    let predicate: string = `! My name is ${this.fullName}.`;

    if(typeof obj === 'string') {
      return `Hi, ${obj}${predicate}`;
    }
    else if(obj instanceof Persona) {
      //casting obj to be type Persona this following way is bad javascript.
      // let person = <Persona> obj;

      //instead we should do the casting right at the call
      // return `Hi, ${(<Persona> obj).fullName}${predicate}`;

      //neutral approach is to not cast.
      return `Hi, ${obj.fullName}${predicate}`;
    }
    else {
      return `Hi${predicate}`;
    }
  }
}

const JohnDoe = new Persona("John", "Doe");
const JaneDoe = new Persona("Jane", "Doe");

console.log(JohnDoe.sayHi());
console.log(JaneDoe.sayHi("Jeremy"));
console.log(JohnDoe.sayHi(JaneDoe));

/**
 * @NOTE javascript does not have privacy. So if we were to set the "fullName" getter function 
 * to private we would still be able to access it using the following object bracket syntax 
 */
// alert(JohnDoe["fullName"]);