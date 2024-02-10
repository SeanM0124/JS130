/*
Create a class Robot. It has the instance methods name and reset

Robot names must start with two uppercase letters and end with 3 digits
The same name cannot be used twice. (used names must be recorded)

name - returns the robots generated name as a string. 
reset - restores the robot to factory default - any previous name should be wiped out and replaced.

DS: We need an array to hold any previouslt generated names.
*/

class Robot {
  static names = [];
  
  name() {
    if (this.robotName) return this.robotName;

    while (Robot.names.includes(this.robotName) || !this.robotName) {
      this.robotName = this.generateName();
    }
    Robot.names.push(this.robotName);
    return this.robotName;
  }

  reset() {
    let nameIndex = Robot.names.indexOf(this.robotName);
    Robot.names.splice(nameIndex, 1); //delete the name fro mstored names?
    this.robotName = null;
  }

  //helper function to make randome names
  generateName() {
    let name = '';
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (let count = 0; count < 2; count++) {
      name += letters[Math.floor(Math.random() * letters.length)];
    }

    for (let digit = 0; digit < 3; digit++) {
      name += (Math.floor(Math.random() * 10));
    }

    return name;
  }
}

module.exports = Robot;