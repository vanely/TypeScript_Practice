/**@NOTE2 the signature of a classes constructor cannot be passed into an interface to be represented as part of an interface's signature because in typescript objects implement interfaces and objects don't have constructors, in other statically typed OOPLs classes implement interfaces. */


//multiple interfaces can be chained together using extends
interface IShape extends IArea{
  sideLength: number;
}
//if we decided that we wanted to make area a property instead of a method we can but would have to change its name within the classes from "area()" to "get area()" and keep the functionality the same 
interface IArea {
  area(): number; 
}

function getArea(shape: IShape) {
  return shape.area();
}

class Square implements IShape {
  constructor(public sideLength: number) {

  }

  area() {
    return this.sideLength * this.sideLength;
  }
}

class Triangle implements IShape {
  constructor(public sideLength:number) {

  }

  area() {
    return (Math.sqrt(3) / 4) * (this.sideLength ** 2);
  }
}

/**@NOTE the classes that these objects belong aren;t really implementing the IShape interface but rather the objects created are. Thus we can pass these objects into the getArea method that accepts a type of IShape */
let square = new Square(10);
let triangle = new Triangle(10);

console.log(getArea(square));
console.log(getArea(triangle));
