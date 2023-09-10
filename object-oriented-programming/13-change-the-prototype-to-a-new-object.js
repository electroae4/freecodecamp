function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  numLegs: 4,
  eat: function() {
    console.log('nyam naym');
  },
  describe: () => {
    console.log('Me name is ' + this.name);
  }
};