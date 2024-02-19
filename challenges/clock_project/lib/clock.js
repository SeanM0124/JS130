/*
Methods:

minutes in a day: 1440
minutes in an hour: 60

at -> returns an object. Takes two arguments, the 2nd is optional. the first argument represents the hour, the
second the minutes. If no minutes are passed, default to 00
will the numbers ever be larger than their max for this method? the test cases say no


add -> takes oen argument, a number representing minutes, and adds that amount of minutes onto the current time but returns a 
new object

subtract -> takes one argument, a number representing minutes, and subtracts that amount of minutes onto the current time but returns a 
new object

*/

class Clock {
  constructor(hours, minutes) {
    this.hours = hours;
    this.minutes = minutes;
  }

  static MINUTES_IN_DAY = 1440;

  static at(hour, minutes = 0) {
    return new Clock(hour, minutes);
  }

  toString() {
    let hour = this.hours < 10 ? `0${this.hours}` : `${this.hours}`;
    let minute = this.minutes < 10 ? `0${this.minutes}` : `${this.minutes}`;
    return `${hour}:${minute}`;
  }

  add(additionalMinutes) {
    let minutes = this._minutesSinceMidnight() + additionalMinutes;
    while (minutes >= Clock.MINUTES_IN_DAY) {
      minutes -= Clock.MINUTES_IN_DAY;
    }

    return this._computeTimeFrom(minutes);
  }

  subtract(minusMinutes) {
    let minutes = this._minutesSinceMidnight() - minusMinutes;
    while (minutes < 0) {
      minutes += Clock.MINUTES_IN_DAY;
    }
    return this._computeTimeFrom(minutes);
  }

  isEqual(comparent) {
    return (this.hours === comparent.hours && this.minutes === comparent.minutes);
  }

  _minutesSinceMidnight() {
    let totalMinutes = (60 * this.hours) + this.minutes;
    return totalMinutes % Clock.MINUTES_IN_DAY;
  }

  _computeTimeFrom(sinceMidnight) {
    let hours = Math.floor(sinceMidnight / 60);
    let finalMinutes = sinceMidnight % 60;
    hours %= 24;

    return new Clock(hours, finalMinutes);
  }
}


module.exports = Clock;