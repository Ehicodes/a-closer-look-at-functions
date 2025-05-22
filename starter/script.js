'use strict';
/*
const bookings = [];
const creatBooking = function (
  flightnNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5 way
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightnNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

creatBooking('LHI23');
creatBooking('LH123', 2, 800);
creatBooking('LH123', undefined);

//passing arguments
const flight = 'LH234';
const ehi = {
  name: 'Ehinomen Osaigbovo',
  passport: 29020339049,
};

const checkIn = function (flightnNum, passenger) {
  flightnNum = 'LH459';
  passenger.name = 'Miss. ' + passenger.name;
  if ((passenger.passport = 29020339049)) {
    alert('Check in');
  } else {
    alert('Wrong passport');
  }
};
// checkIn(flight, ehi);
// console.log(flight);
// console.log(ehi);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000000);
};

newPassport(ehi);
checkIn(flight, ehi);
*/

//FUNCTIONS ACCEPTING CALLBACK FUNCTIONS
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
//higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best', oneWord);

//JS used callbacks all the time
const high5 = function () {
  console.log('✋🏻');
};

document.body.addEventListener('click', high5);
['Ehi', 'Martha', 'Adam'].forEach(high5);

//My example
const upperSecondWord = function (str) {
  const [first, second, third, fourth] = str.split(' ');
  return [first, second, third, fourth.toUpperCase()].join(' ');
};

const transformer2 = function (str, fn) {
  console.log(`Transformed String: ${fn(str)}`);
};

transformer('JavaScript is the best', upperSecondWord);

//functions returning functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey 🌺');
greeterHey('Ehi');

//another way
greet('Hello')('Ehinomen');

//arrow function
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Ehiii');
