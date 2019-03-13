let foo: string = 'foo';
let num: number = 5;
let cond: boolean = false;
let obj: object = {};
let nuthin: null;
let notYet: undefined;

//will search for key. If found, will return Symbol with this key.
//Else it will be created and add the key to global registry.
let symb1: symbol = Symbol.for('123');

//the key of a symbol created like this will not be stored in global registry.
let symb2: symbol = Symbol('456');

console.log('search: ', Symbol.for('123'))

console.log('key: ', Symbol.keyFor(symb1));

//type "function" can be defined when passing a function as a parameter for another function, by using a function signature
/**@NOTE parameter is a function that takes no parameters and returns void. */
function baz(fn: () => void) {
  
}

function addNums(a: number, b: number) {
  return a + b;
}

function addStrAndNum(a: string, b: number) {
  let regExMatch = /d/g;  
  
  return a.match(regExMatch);
}
console.log(addStrAndNum('12', 4));

