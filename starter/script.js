'use strict';

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
creatBooking('LH123', 5);
