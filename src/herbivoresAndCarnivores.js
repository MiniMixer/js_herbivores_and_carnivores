'use strict';

class Animal {
  // write your code here

  alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
  }
}

class Herbivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
    this.hidden = false;
    this.alive.push(this);
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  // write your code here
  constructor(name) {
    super(name);
    this.alive.push(this);
  }

  bite(animal) {
    if (animal.hasOwnProperty('hidden') && animal.hidden === false) {
      animal.health -= 50;
    }

    if (animal.health <= 0) {
      this.alive.splice(this.alive.indexOf(animal), 1);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
