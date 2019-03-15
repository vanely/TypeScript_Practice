//the optional character denoted by a "?" can be put in an interface, effectively making those properties optional when the interface is used as a type

/**@NOTE instead of using a function signature as a function's type we can use the following approach within the Interface */
interface IPerson {
  firstName: string;
  lastName?: string;
  sayHi?(): void;
  otherMethod?: () => void;
}

//when creating an object we can even just pass the interface that this object will looklike as the object's type
const Person: IPerson = {
  firstName: "John",
  lastName: "Doe",
  sayHi: function() {
    console.log(`Hello, Mr.${this.lastName}`);
  }
}

//now if we want to pass the  type of the object person into the parameter of a function we can just use the interface that we created in the image of said function
function doSomething(person: IPerson) {
  console.log(person.firstName);
  person.sayHi();
}

doSomething({
  firstName: "Jane",
  sayHi: function() {
    console.log('garbage');
  }
});