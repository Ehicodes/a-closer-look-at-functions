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
/*
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
*/

//THE CALL METHODS
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightnNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightnNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightnNum}`, name });
  },
};

lufthansa.book(239, 'Osaigbovo Ehinomen');
lufthansa.book(645, 'John Doe');
//E.G THE LUFTHANSA GROUP CREATED A NEW ARILINE

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
// book(23, 'Sarah Williams'); does not work
//the call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 345, 'Mary Cooper');

//APPLY METHOD
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData); //another way

// Bind method
// book.call(eurowings, 23, 'Sarah Williams');
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(476, 'Poppins Achalugo');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

//with Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
console.log(addVAT(200));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);

console.log(addVAT2(100));
console.log(addVAT2(200));
