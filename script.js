// 1- this - window/undefined object binding
var theOuterThis = this;
var topLevelVariable = 76;
// you: Create a few top-level variables. Can you find them on the window object?

console.log(window.topLevelVariable);

// 2- this - implicit binding
function foo() {
  return this;
}
// foo(); // <------ "window" binding
var obj = {
  name: 'luks',
  foo: foo,
}
// obj.foo(); // <------ implicit binding

// you: make an object with a method that uses the `this` keyword. What does `this` refer to?

var me = {
  name: 'Melquisedeque Pereira',
  speak: function () {
    return 'My name is ' + this.name;
  },
};

// 3- this - new keyword binding
function MyPerson(name) {
  this.name = name;
}
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
//        call & apply
//        bind
// you: make a simple function that takes 2 arguments and console.logs `this`.
// you: Invoke it with `call` and `apply`.
// you: make a copy of the function using `bind`. Does it work as expected?

// 5- making an object with methods manually (naive).
// you: make a naive object with a method that uses `this`.

// 6- making an object with constructor & prototype.
// you: make a constructor and tack a method to the prototype that uses `this`.

// 7- constructor functions can take anything we want
// you: make a constructor that takes two args and initializes a total of five fields.

// 8- methods have access to all of state
// you: make a constructor and tack a method to the prototype that uses several fields.

// 9- subclassing
// you: subclass of any of your constructors.
