//---------------
/**@FUNCITONS */
//---------------
//type "function" can be defined when passing a function as a parameter for another function, by using a function signature
/**@NOTE parameter is a function that takes no parameters and returns void. */
function baz(fn: () => void) {

}

//func adding only numbers
function addNums(a: number, b: number) {
  return a + b;
}

//func adding strings and numbers
function addStrAndNum(a: string, b: number) {
  const regExMatch: RegExp = /\d/g;

  try {
    if (a.match(regExMatch) !== null) {
      return Number(a) + b;
    }
    else {
      console.log('Please make sure that parameter "a" is a number in string format!');
    }
  }
  catch (Error) {
    console.log(`Error: parameter "a" must be a number in string format\n${Error.message}`);
  }
}

//func adding strings
function addStrs(a: string, b: string) {
  const regExMatch: RegExp = /\d/g;

  try {
    if (a.match(regExMatch) !== null && b.match(regExMatch) !== null) {
      return Number(a) + Number(b);
    }
    else {
      console.log('Please make sure that parameter "a", and parameter "b" are numbers in string format!');
    }
  }
  catch (Error) {
    console.log(`Error: parameter "a", and parameter "b" must be numbers in string format\n${Error.message}`);
  }
}

//a better approach to over loading in javascript, is to separate the overload declaration from the overload definition.
//Declaration
function sumAny(a: string, b: number): number;
function sumAny(a: number, b: string): number;
function sumAny(a: number, b: number): number;
function sumAny(a: string, b: string): number;
//Definition
function sumAny(a: any, b:any) {
  const regExMatch = /\d/g;

  try{
    if (typeof a === 'string' && a.match(regExMatch) !== null) {
      a = Number(a.match(regExMatch).join(''));
    }
    if (typeof b === 'string' && b.match(regExMatch) !== null) {
      b = Number(b.match(regExMatch).join(''));
    }
  }
  catch(Error) {
    console.log(`Error: both parameters must either be, a 'number' or a number in 'string' format${Error.message}`);
  }

  return a + b;
}

console.log(`regEx any test: ${sumAny('30', 69)}`);