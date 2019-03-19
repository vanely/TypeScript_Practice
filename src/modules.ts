import {mod2} from "./modules2";
//our newly created module that will contain functionality for DOM manipulation
/**@NOTE all properties and methods within a module that are not explicitly exported are private */

//within a module we can export absolutely anything. Variables methods classes interfaces and even other modules
module dom {

  export module foo {
    export module bar {
      export let baz = "Nested modules";
    }
  }

  let counter = 0;
  function generateID() {
    return `custom_id${(counter++).toString()}`;
  }

  export function create(tagName: string, autoID?: boolean): string;
  export function create(tagName: string, id?: string): string;
  export function create(tagName: string, obj?: any) {
    let el: HTMLElement = document.createElement(tagName);

    let type: any = typeof obj;

    if(type === 'undefined') {
      return el;
    }
    
    return el.id = (type === 'string') ? obj : generateID();
  }

  export function getById(id: string) {
    return document.getElementById(id);
  }
}

let elem1: string = dom.create('div');
let content: HTMLElement = dom.getById("content");

//modules2 import
console.log(mod2.moduleMethod("palavra"));

console.log(elem1);
console.log(content);
console.log(dom.foo.bar.baz);