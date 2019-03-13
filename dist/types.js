//---------------
/**@VARIABLES */
//---------------
let foo = 'foo';
let num = 5;
let cond = false;
let obj = {};
let nuthin;
let notYet;
let regEx = /\d([a-z]{2, 6})/g;
//will search for key. If found, will return Symbol with this key.
//Else it will be created and add the key to global registry.
let symb1 = Symbol.for('123');
//the key of a symbol created like this will not be stored in global registry.
let symb2 = Symbol('456');
console.log('search: ', Symbol.for('123'));
console.log('key: ', Symbol.keyFor(symb1));
