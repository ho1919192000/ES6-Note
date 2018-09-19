/*ES6: Create Strings using Template Literals*/
/*Challenge*/
//Use template literal syntax with backticks to display each entry of the result object's failure array. Each entry should be wrapped inside an li element with the class attribute text-warning, and listed within the resultDisplayArray.
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};

function makeList(arr) {
    "use strict";

    // change code below this line
    const resultDisplayArray = arr.map((e) => {
        return `<li class="text-warning">${e}</li>`;
    })
    // change code above this line

    return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`, 
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);

/*ES6: Write Concise Object Literal Declarations Using Simple Fields*/
const createPerson = (name, age, gender) => {
    "use strict";
    // change code below this line
    return {
        name: name,
        age: age,
        gender: gender
    };
    // change code above this line
};

//Soultion 1
const createPerson = (name, age, gender) => {
    "use strict";
    // change code below this line
    return {
        name,
        age,
        gender
    }
    // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object

//Soultion 2
const createPerson = (name, age, gender) => ({
    name,
    age,
    gender
});

/*ES6: Write Concise Declarative Functions with ES6*/

const bicycle = {
    gear: 2,
    setGear: function (newGear) {
        "use strict";
        this.gear = newGear;
    }
};
// change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);

//Solution
const bicycle = {
    gear: 2,
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
    }
};

/*ES6: Use class Syntax to Define a Constructor Function*/
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
//->
class SpaceShuttle {
  constructor(targetPlanet){
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');

//Example:
function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Vegetable {
    constructor(name){
      this.name = name;
    }
  }
  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'

/*ES6: Use getters and setters to Control Access to an Object*/
function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat {
    constructor(f){
      this.c = 5/9 * (f-32);
    }
    get temperature() {
      return this.c;
    }

    set temperature(c) {
      this.c = c;
    }
  }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C