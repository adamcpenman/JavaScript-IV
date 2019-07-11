/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

// function GameObject (attributes) { 
//   this.createdAt = attributes.createdAt,
//   this.name = attributes.name,
//   this.dimensions = attributes.dimensions;
//  }

 class GameObject {
     constructor(attributes) {
        this.createdAt = attributes.createdAt,
        this.name = attributes.name,
        this.dimensions = attributes.dimensions;
     }
    destroy() {
        return `${this.name} was removed from the game.`;
    }
}
// GameObject.prototype.destroy = function() {
//     return `${this.name} was removed from the game.`;


class CharacterStats extends GameObject {
    constructor(stats) {
        super(stats);
        this.healthPoints = stats.healthPoints;
    }
    takeDamage() {
        return `${this.name} took damage.`;
    }
}

// function CharacterStats (stats) { 
//   this.healthPoints = stats.healthPoints,
//   GameObject.call(this, stats);
//  }
 
// CharacterStats.prototype = Object.create(GameObject.prototype);

// CharacterStats.prototype.takeDamage = function() {
//     return `${this.name} took damage.`;
// }

class Humanoid extends CharacterStats {
    constructor(human){
        super(human);
        this.team = human.team,
        this.weapons = human.weapons,
        this.language = human.language;
    }
    greet() {
        return `${this.name} offer a greeting in ${this.language}.`;
    }
}

// function Humanoid(human) {
// CharacterStats.call(this, human),
//   this.team = human.team,
//   this.weapons = human.weapons,
//   this.language = human.language;
// }
// Humanoid.prototype = Object.create(CharacterStats.prototype);

// Humanoid.prototype.greet = function() {
//     return `${this.name} offers a greeting in ${this.language}.`;
// }

class Heros extends Humanoid {
    constructor(hero){
        super(hero);
        this.side = hero.side;
    }
    goodPerson() {
        return `${this.name} is on the ${this.side} side.`;
    }
}

class Villains extends Humanoid {
    constructor(villain) {
        super(villain);
        this.side = villain.side;
    }
    badPerson() {
        return `${this.name} is on the ${this.side} side`;
    }
}


// function Heros(hero) {
// Humanoid.call(this, hero);
//   this.side = hero.side;
// }

// Heros.prototype = Object.create(Humanoid.prototype);

// Heros.prototype.goodPerson = function() {
//     return `${this.name} is on the ${this.side} side.`;
// }

// function Villains(villain) {
// Humanoid.call(this, villain),
//   this.side = villain.side;
// }

// Villains.prototype = Object.create(Humanoid.prototype);

// Villains.prototype.badPerson = function() {
//     return `${this.name} is on the ${this.side} side.`;
// }

const fairy = new Heros ({
createdAt: new Date(),
    dimensions: {
      length: 3,
      width: 3,
      height: 1,
    },
    healthPoints: 15,
    name: 'Liza',
    team: 'Sunny Haven',
    weapons: [
      'Glitter Bomb',
    ],
    side: 'Good',
    language: 'All Tongue',
  });

  const demon = new Villains ({
createdAt: new Date(),
    dimensions: {
      length: 3,
      width: 3,
      height: 1,
    },
    healthPoints: 15,
    name: 'Hilary',
    team: 'Dark Haven',
    weapons: [
      'DoomsDay',
    ],
    side: 'Bad',
    language: 'Snake Tongue',
  });




const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    side: "bad",
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    hero: 'good',
    language: 'Elvish',
  });






  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  console.log(fairy.goodPerson());
  console.log(demon.badPerson());
