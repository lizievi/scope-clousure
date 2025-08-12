// 'use strict';

// pi = 3.1416;
// console.log(pi); // TypeError: Assignment to undeclared variable

function myFunction() {
  'use strict';
  pi = 3.1416; // TypeError: Assignment to undeclared variable
}

console.log(myFunction()); // TypeError: Assignment to undeclared variable