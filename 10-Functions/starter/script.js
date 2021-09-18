'use strict';

// const bookings = [];

// // const createBooking = function (
// //   flightNum,
// //   numPassengers = 1,
// //   price = numPassengers * 23
// // ) {
// //   const booking = {
// //     flightNum,
// //     numPassengers,
// //     price,
// //   };
// //   console.log(booking);
// //   bookings.push(booking);
// // };

// // createBooking('LH23', undefined, 100);

// // const inWord = function (str) {
// //   return str.replace(/ /g, '').toLowerCase();
// // };

// // const upperFirstWord = function (str) {
// //   const [first, ...others] = str.split(' ');
// //   return [first.toUpperCase(), ...others].join(' ');
// // };

// // const trasformer = function (str, fn) {
// //   console.log(`Original String ${str}`);
// //   console.log(`Transformer string: ${fn(str)}`);

// //   console.log(`Transformed by: ${fn.name}`);
// // };

// // trasformer('Harshit Sourav', upperFirstWord);
// // trasformer('Harshit Sourav', inWord);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// // const greetHey = greet('Hey');
// // greetHey('Jonas');
// // greet('Hello')('Harshit');

// const arr_greet = greet_msg => name => console.log(`${greet_msg} ${name}`);

// arr_greet('Hello')('Harshit');

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
//   },
// };

// const airIndia = {
//   airline: 'Air India',
//   iataCode: 'AI',
//   bookings: [],
// };

// const book = lufthansa.book;

// book.call(airIndia, 231, 'Harshit');
// book.call(lufthansa, 342, 'Sourav');
// console.log(airIndia);
// console.log(lufthansa);

// const bookAi = book.bind(airIndia, 321);

// bookAi('Sourav');

// lufthansa.planes = 300;

// lufthansa.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };

// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favourite programming language?',
  options: ['1: JavaScript', '2: Python', '3: Rust', '4: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const numb = Number(
      prompt(
        `${this.question} \n ${this.options.join(
          '\n'
        )} \n (Write option number)`
      )
    );
    // console.log(numb);
    if (numb >= 1 && numb <= 4) {
      this.answers[numb - 1]++;
    } else {
      alert('Wrong Input');
    }
    this.displayResults();
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Polls results are ${[...this.answers]}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

const runOnce = function () {
  console.log('This will never run again');
};

runOnce();

//Immediate involved function expression

// (function () {
//   console.log('This will never run again');
// })();

// (() => console.log('This is using Arrow function'))();

// //Data is encapsulated
// {
//   const isPrivate = 23;
//   var notPrivate = 42;
// }
// console.log(notPrivate);

//Closers
//We don't create closers, it happens automatically
// const secureBooking = function () {
//   let passengerCount = 0;
//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking();

// console.dir(booker);

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
g();
f();
console.dir(f);

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

h();
f();

console.dir(f);

//Example 2

// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boardeing all ${n} passengers`);
//     console.log(`There are 3 Groups , each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// boardPassengers(180, 3);

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
