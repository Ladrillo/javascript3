// 1- this - window/undefined object binding
var theOuterThis = this; // global or "window"
var topLevelVariable = 76;
// you: Create a few top-level variables. Can you find them on the window object?

// console.log(window.topLevelVariable);

// 2- this - implicit binding
function foo() {
  return this;
}
// foo(); // <------ "window" binding
var obj = {
  name: 'luks',
  foo: foo,
}
// obj.foo(); // <------ implicit binding, the this is the object itself

// you: make an object with a method that uses the `this` keyword. What does `this` refer to?

var me = {
  name: 'Melquisedeque Pereira',
  speak: function () {
    return 'My name is ' + this.name;
  },
};

// me.speak() <--- example of implicit binding, the this is the object

// 3- this - new keyword binding
function MyPerson(name) {
  this.name = name;
}
// the this is the object that gets created!
var personBuiltWithConstructor = new MyPerson('Luke');

// you: make a simple constructor that uses `this`. What does `this` refer to?

function Animal(name, type, age) {
  this.name = name;
  this.type = type;
  this.age = age;
}

let cat = new Animal('Garfield', 'Cat', 5);
let dog = new Animal('Scooby', 'Dog', 1);

// 4- this - explicit binding
//        call & apply are invocations
//        bind creates a copy of the function with a bound this

function baz(name, age) { // functions are objects
  // console.log(this); // side effect
  return name + ' your age is ' + age; // return value
}

baz.call('banana', 'Shaun', 35); // INVOCATION, we fix the this to banana
baz.apply('banana', ['Shaun', 35]); // INVOCATION, we fix the this to banana
var copyOfFunction = baz.bind('banana'); // COPY, the copy has the this as banana


// you: make a simple function that takes 2 arguments and console.logs `this`.
// you: Invoke it with `call` and `apply`.
// you: make a copy of the function using `bind`. Does it work as expected?

// 5- making an object with methods manually (naive).
var person = {
  name: 'Luke',
  age: 23,
  isVegetarian: true,
  orderFood: function () {
    if (this.isVegetarian) {
      return 'gimme veggies';
    }
    return 'gimme burger';
  },
  orderDrink: function () {
    if (this.age > 17) {
      return 'gimme beer';
    }
    return 'gimme soda';
  },
  rejuvenate: function () {
    this.age = 17;
  }
};
// you: make a naive object with a method that uses `this`.

// 6- making an object with constructor & prototype.
function Person(theName, theAge, whetherVegetarian) {
  // here we initialize the fields of the person instance
  // using the arguments as raw material
  this.name = theName;
  this.age = Number(theAge);
  this.isVegetarian = whetherVegetarian;
  this.isHappy = true;
}
Person.prototype.orderFood = function () {
  // this refers back to the instance!
  if (this.isVegetarian) {
    return 'gimme veggies';
  }
  return 'gimme burger';
};
Person.prototype.orderDrink = function () {
  if (this.age > 17) {
    return 'gimme beer';
  }
  return 'gimme soda';
};
Person.prototype.rejuvenate = function () {
  this.age = 17;
};

var luke = new Person('Luke', '25', false);
var gabe = new Person('Gabe', '42', false);
// you: make a constructor and tack a method to the prototype that uses `this`.


// 7- constructor functions can take anything we want
// you: make a constructor that takes two args and initializes a total of five fields.
// object with player1, player2,
function Game(data) {
  this.player1 = data.player1;
  this.player2 = data.player2;
  this.player1Score = 0;
  this.player2Score = 0;
}
Game.prototype.play = function (winner) {
  // this[winner + 'Score'] = this[winner + 'Score'] + 20;
  if (winner === 'player1') {
    this.player1Score += 20;
  } else {
    this.player2Score += 20;
  }
}
const myGame = new Game({ player1: 'Gabe', player2: 'Petar'});

// 8- methods have access to all of state
// you: make a constructor and tack a method to the prototype that uses several fields.

// 9- subclassing
// you: subclass of any of your constructors.
function Dad(name, age) {
  this.name = name;
  this.age = age;
}
Dad.prototype.greet = function () {
  return `Hey I am ${this.name} and I am ${this.age} years old`
}
var daddy = new Dad('Samar', 23);

function Child(name, age, favoriteToy) {
  Dad.call(this, name, age);
  this.favoriteToy = favoriteToy;
}
var sonny = new Child('Tom', 5, 'trains');