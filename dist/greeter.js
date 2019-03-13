//---------------
/**@VARIABLES */
//---------------
let foo = 'foo';
let num = 5;
let cond = false;
let obj = {};
let nuthin;
let notYet;
//will search for key. If found, will return Symbol with this key.
//Else it will be created and add the key to global registry.
let symb1 = Symbol.for('123');
//the key of a symbol created like this will not be stored in global registry.
let symb2 = Symbol('456');
console.log('search: ', Symbol.for('123'));
console.log('key: ', Symbol.keyFor(symb1));
//---------------
/**@FUNCITONS */
//---------------
//type "function" can be defined when passing a function as a parameter for another function, by using a function signature
/**@NOTE parameter is a function that takes no parameters and returns void. */
function baz(fn) {
}
//func adding only numbers
function sum(a, b) {
    return a + b;
}
//func adding strings and numbers
function sum(a, b) {
    const regExMatch = /\d/g;
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
function sum(a, b) {
    const regExMatch = /\d/g;
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
console.log(addStrs('12', '10'));
