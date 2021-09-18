// 'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// // Task 1
// const player1 = game.players[0];
// const player2 = game.players[1];
// console.log(player1, player2);
// //Task 2

// const [gk, ...fieldPlayers] = player1;
// console.log(gk, fieldPlayers);
// //Task 3

// const allPlayers = [...player1, ...player2];
// console.log(allPlayers);
// //Task 4
// const player1Final = [...player1, 'Thiago', 'Coutinho ', 'Perisic'];
// console.log(player1Final);

// //Task 5
// const { team1: team1, x: draw, team2: team2 } = game.odds;
// console.log(team1, draw, team2);

// //Task 6
// function printGoals(...scoringPlayers) {
//   console.log(scoringPlayers.length);
// }
// console.log(printGoals(...game.scored));

// //Task 7
// team1 > team2 && console.log('Team 1 is likly to win');
// team1 < team2 && console.log('Team 2 is likly to win');

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const [i, j] of menu.entries()) {
//   console.log(`${i + 1}:${j}`);
// }

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   // ES6 enhanced object literals
//   openingHours,

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta(ing1, ing2, ing3) {
//     console.log(
//       `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
//     );
//   },

//   orderPizza(mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };

// console.log(restaurant.order(0, 1) ?? 'Method does not exist');

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
//Task 1
// for (x of game.scored.entries()) {
//   console.log(`Goal ${x[0]} : ${x[1]}`);
// }

// //Task 2
// let sum = 0;
// for (x of Object.values(game.odds)) {
//   sum += x;
// }
// console.log(sum / 3);

// //Task 3
// for ([team, odd] of Object.entries(game.odds)) {
//   const teamName = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of ${teamName} : ${odd}`);
// }

// //Bonus
// scorers = new Object();
// for (x of game.scored) {
//   if (x in scorers) {
//     scorers[x]++;
//   } else {
//     scorers[x] = 1;
//   }
// }
// console.log(scorers);

// const rest = new Map();
// rest.set('name', 'Cristiano Ronaldo');
// rest.set('open', 11);
// rest.set('close', 23);
// rest.set(true, 'We are Open!!');
// rest.set(false, 'We are Close!!');
// const time = 24;

// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// //Task 1

// events = [...new Set(gameEvents.values())];
// console.log(events);

// //Task 2

// gameEvents.delete(64);
// console.log(gameEvents);

// //Task 3

// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes `
// );

// for ([min, even] of gameEvents) {
//   const ans =
//     min <= 45
//       ? console.log(`[First Half] ${min}: ${even}`)
//       : console.log(`[Second Half] ${min}: ${even}`);
// }

// const airline = 'Air India';
// const plane = 'A320';

// console.log(airline.indexOf('a'));
// console.log(airline.lastIndexOf('a'));
// console.log(airline.indexOf('India'));
// console.log(airline.slice(4)); //ALways return new string
// console.log(airline.slice(4, 8)); //ALways return new string

// console.log(airline.slice(0, airline.indexOf(' ')));

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log('You got middle seat');
//   } else console.log('You got lucky');
// };

// console.log(checkMiddleSeat('3A'));

// console.log(airline.toLocaleUpperCase());

// const passenger = 'jOnAs';
// const passLower =
//   passenger.toLowerCase()[0].toUpperCase() + passenger.toLowerCase().slice(1);

// console.log(passLower);

// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const arr = text.split('\n');
  let count = 1;
  for (x of arr) {
    x = x.toLowerCase().trim().split('_');
    x = x[0] + x[1][0].toUpperCase() + x[1].slice(1);
    x = x.padEnd(20) + '✅'.repeat(count++);
    console.log(x);
  }
});
