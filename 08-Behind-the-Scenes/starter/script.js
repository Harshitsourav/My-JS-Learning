'use strict';

// console.log(a);
// console.log(b);
// console.log(c);

var a = 12;
let b = 10;
const c = 14;

// console.log(addExp);

function addDecl(a, b) {
  return a + b;
}

var addExp = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// console.log(this);

// const thisTest = function (birthYear) {
//   console.log(this);
// };
// thisTest();

const jonas = {
  year: 1997,
  calcAge: function (param) {
    console.log(param);
    console.log(this.year);
  },
};

jonas.calcAge();

const mat = {
  year: 2017,
};

mat.calcAge = jonas.calcAge;
mat.calcAge();
