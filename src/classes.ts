class Persona {
  //instead of declaring variables, followed by defining their value within a constructor. We could just pass them only into the constructor parameter, and use the public keyword to get the normal public usage that standard javaScript allows 
  // firstName: string;
  // lastName: string;

  constructor(public firstName: string, public lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHi() {
    return `Hi, my name is ${this.firstName} ${this.lastName}`;
  }
}