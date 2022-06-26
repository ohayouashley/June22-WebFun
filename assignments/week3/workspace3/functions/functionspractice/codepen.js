// 1. Window/Global Binding
// function sayName(name) {
//   console.log(this);
//   return name;
// }
// sayName("D'Artagnan");

// 2. Implicit Binding
/*const myObj = {
    name : 'Shooter McGavin',
    sayName: function sayName() {
      return this.name;
      // return name;
      }
    }
  
  console.log(myObj.sayName());
  
  
  // 3. 'new' Binding
  function Cup(color, shape, handle) {
    this.color = color;
    this.shape = shape;
    this.handle = handle;
  }
  
  const cup1 = new Cup('blue', 'square', true);
  console.log(cup1.shape); // expected: "square"
  
  
  // 4. Explicit Binding (call/apply/bind)
  const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const person1 = {firstName:"John",lastName: "Doe"}
  const person2 = {firstName:"Mary",lastName: "Doe"}
  console.log(person.fullName.call(person1));
  // The call() method takes arguments separately.
  // The apply() method takes arguments as an array.
  
  
  
  
  // CONSTRUCTORS
  // A function that creates Objects on demand.
  function Transformer(name, faction, catchphrase) {
    this.name = name;
    this.faction = faction;
    this.catchphrase = catchphrase;
    // this.sayPhrase = function () {
    //   console.log(catchphrase);
    //   };
  }
  
  const tf1 = new Transformer("Optimus","Autobot","Roll out!");
  console.log(tf1.catchphrase);
  // tf1.sayPhrase();
  console.log(tf1);
  
  Transformer.prototype.height = 30;
  
  console.log(tf1);
  
  Transformer.prototype.calcPower = function (rating) {
      return rating * this.height;
      };
  
  console.log(tf1);
  
  // Making a child Constructor
  function Autobot(name, faction, catchphrase) {
    // Step 1: .call to copy parent's properties
    Transformer.call(this, name, faction, catchphrase);
    this.alignment = "good";
  }
  // Step 2: Set the child's prototype equal to parent's
  Autobot.prototype = Object.create(Transformer.prototype);
  
  const Bumblebee = new Autobot("Bumblebee","Autobot","BzZrz!");
  
  console.log(Bumblebee); */

/*
  *******************

FUNCTIONS:::

// Function

function addition(a,b) {
  return a + b;
}
console.log(addition(2, 2));



//Function Expression
let product = function(c, d) {
  return c * d;
}
console.log(product(2, 8));



//Arrow Function
let diff = (num5, num6) => {
  return num5 - num6
}
console.log(diff(10, 4));


//IIFE Function
let say = (function() {
  return "I was invoked!";
})();
console.log(say);


// VAR
var firstVar = "My 1st Var";
console.log(firstVar);

    // updating a var
var secondVar = "My 2nd Var";
var secondVar = "2nd var updated";
console.log(secondVar);

//LET

let firstLet = "My 1st let";
console.log(firstLet);

    // updating a let
let secondLet = "My 2nd let";
secondLet = "2nd let updated";
console.log(secondLet);


// OBJECT LITERALS

const myFamily = {
  members: 5,
  'Last Name': "Longenberger",
  address: "2nd Ave",
}

    // Pull whole object
console.log(myFamily);

   // Pull individual lines with dot
console.log(myFamily.members);

    // Pull individual lines with bracket
console.log(myFamily['Last Name']);
console.log(myFamily['address']);



// OBJECT METHODS

const myDaughter = {
  name: "Shannon",
  age: 17,
  loves: function(subject) {
     console.log(`${this.name} loves ${subject}!`);
  }
}
myDaughter.loves("Music");


  //create object outside of the method

myDaughter.play = function(something) {
  console.log(`${this.name} is an amazing ${something}!`);
}
myDaughter.play("singer");

  // Access entries
console.log(Object.entries(myDaughter));

// Access entry data
console.log(Object.entries(myDaughter)[1]);

//Access Keys only
console.log(Object.keys(myDaughter));

//Access Values only
console.log(Object.values(myDaughter));



const favoriteThings = [];

favoriteThings.push('My Kids', 'My Family', 'My Pets',);
console.log(favoriteThings);

//favoriteThings.push([{food: 'Pizza'}]);

//console.log(favoriteThings);

favoriteThings.unshift('Soda', 'Movies');

//above add both at the same time in the order typed

console.log(favoriteThings);

favoriteThings.shift();
console.log(favoriteThings);

favoriteThings.unshift('Coding');
favoriteThings.unshift('Soda');

/*above adds them 1 at a time in th e order they were typed...so adds coding 1st then soda as that is how it was coded.

console.log(favoriteThings);

favoriteThings.splice(2, 1);
console.log(favoriteThings);

favoriteThings.splice(1, 4);
console.log(favoriteThings);

favoriteThings.push('Coding', 'My Kids', 'My Family', 'My Pets');

favoriteThings.pop();
console.log(favoriteThings);

const arrayLength = favoriteThings.length;
console.log(arrayLength);

const last = favoriteThings[favoriteThings.length -1];
console.log(last);


*/

/*

**************************

// #2 Sum of all even numbers from 1-1000

function evenSum() {
    var add = 0
    for (var i = 1; i <= 1000; i++) { // How many times should i repeat this
        if (i % 2 == 0) { // number is even
            add = add + i
        }
    }
    return add
}
// console.log(evenSum()) // 250500

// // #3 Sum of all odd numbers from 1-5000

function oddSum() {
    var sum = 0
    for (var i = 1; i <= 8; i+=2) {
        if (i % 2 == 1) {
            sum = sum + i
//           1
//           1 + 3
//           4 + 5
//           9 + 7
        }
    }
    return sum
}
// console.log(oddSum())

function newArray() {
  var arr = []
  for (i = 1; i <= 255; i++){
    if (i <= 255) {
      arr.push[i] + i
    }
  }
  
  return arr
}
console.log(newArray())

arr = []
arr.push(1)
// console.log(arr)

*/

/* 

************************

// var lunch = "hamburger";
// console.log("***#1a***", lunch);

// var lunch = "pizza";
// console.log("***#2a***", lunch);
// // var is completely mutable you can reuse it's name and it will change the values

// let food = "tacos";
// console.log('***#1b***', food);

// // let food = "suchi";
// // console.log('***#2b***', food);

// food = "suchi";
// console.log('***#2b***', food);
// // let are also mutable but you can not re declair them you have to just state the variable in this case food and it's new value

// const animal = "dog";
// console.log('***1c***', animal);

// // const animal = "cat";
// // console.log('***2c***', animal);

// animal = "cat";
// console.log('***2c***', animal);
// // const is immutable and can not be changed

// // DATA Types

// var sum = 2 + 2;
// console.log("this is a integers data type: sum is equal to:", sum)
// var bigString = "I'm" + " a " + "string";
// console.log("***#3***, this is a string data type", bigString);
// var StarWarsIsNotDead = true;
// console.log("This is a boolean data type: the value of StarWarsIsNotDead: ", StarWarsIsNotDead)
// var lilArray = [3,8,3,6,00];
// console.log("printing the array: ", lilArray)
// var object = {name: "George", age: 5};
// console.log("printing the value or results of object:", object)

// // Arrays

// var cities =  ["Birmingham", "Austin", "Seattle", "Orlando"]
// //                0.            1.        2.         3
// console.log("***cities***", cities);
// console.log('***cities02***', cities[0])
// console.log('arraylength: ', cities.length)

// // adds to the end
// var cities2 =["Birmingham", "Austin", "Seattle", "Orlando"]
// console.log(cities2)
// cities2.push("Salt Lake City");
// console.log("***cities2***", cities2);

// // removes last one
// var cities3 =["Birmingham", "Austin", "Seattle", "Orlando"]
// console.log(cities3)
// cities3.pop();
// console.log("***cities3***", cities3);

// // removes from begining
// var cities4 =["Birmingham", "Austin", "Seattle", "Orlando"]
// console.log(cities4)
// cities4.shift();
// console.log("***cities4***", cities4);

// //adds to the  beginning
// var cities5 =["Birmingham", "Austin", "Seattle", "Orlando"]
// console.log(cities5)
// cities5.unshift("Berwick");
// console.log("***cities5***", cities5);    
      
// //  splits and removes
// var cities6 =["Birmingham", "Austin", "Seattle", "Orlando"]
// console.log(cities6)
// cities6.splice(2,1, "Wappingers Falls");
// console.log("***cities6***", cities6); 

// // pulls item at certain possition always starts at 0
// var cities7 =["Birmingham", "Austin", "Seattle", "Orlando"]
// console.log("***cities7[2]***", cities7[2]);

// // gives you the length
// var cities8 =["Birmingham", "Austin", "Seattle", "Orlando"]
// console.log("***cities8***", cities8.length); 
      
// // returns item at the possition based on the length - a number
// var cities9 =["Birmingham", "Austin", "Seattle", "Orlando"]
// console.log("***cities8***", cities9[cities9.length-2]); 

// // Objects

// //pulling info
// var duck = {bill: true, 
//               feet: "webbed",
//               featherColors: ["yellow", "brown", "blue"],
//               famousDucks: [
//                 {name: "Scrooge McDuck", company: "Disney"},
//                 {name: "Daffy", company: "Warner Brothers"},
//                 {name: "Darkwing Duck", company: "Disney"}
//               ]
//              }
// console.log("***objects#1***", duck.famousDucks)
// // console.log("***objects#1***", duck.famousDucks[1].name)

// //pulling information 2 == specific information
// var duck2 = {bill: true, 
//               feet: "webbed",
//               featherColors2: ["yellow", "brown", "blue"],
//               famousDucks2: [
//                 {name: "Scrooge McDuck", company: "Disney"},
//                 {name: "Daffy", company: "Warner Brothers"}
//               ]
//              }
// console.log("***objects#2***", duck2.famousDucks2[1])

// // show all objects in array
// var duck3 = {bill: true, 
//               feet: "webbed",
//               featherColors3: ["yellow", "brown", "blue"],
//               famousDucks3: [
//                 {name: "Scrooge McDuck", company: "Disney"},
//                 {name: "Daffy", company: "Warner Brothers"}
//               ]
//              }
// console.log("***objects#3***", Object.keys(duck3))
// console.log(Object.keys(duck3.famousDucks3[0]))

// // values
// var duck4 = {bill: true, 
//               feet: "webbed",
//               featherColors4: ["yellow", "brown", "blue"],
//               famousDucks4: [
//                 {name: "Scrooge McDuck", company: "Disney"},
//                 {name: "Daffy", company: "Warner Brothers"}
//               ]
//              }
// console.log("***objects#4***", Object.values(duck4.famousDucks4[1]))

// // entries
// var duck5 = {bill: true, 
//               feet: "webbed",
//               featherColors5: ["yellow", "brown", "blue"],
//               famousDucks5: [
//                 {name: "Scrooge McDuck", company: "Disney"},
//                 {name: "Daffy", company: "Warner Brothers"}
//               ]
//              }
// console.log("***objects#5***", Object.entries(duck5.famousDucks5[0]))

// // LOOPS

for ( let i = 0 ; i < 10 ; i++ ) {
    // declare a var | conditional expression | increment var
        console.log("***loop#1***", i);
    }

// for (let index in duck.featherColors) {
//    let newItem = duck.featherColors[index] + " feathers";
//    console.log("***loop#2***", newItem);
// }

// // sorting in this case alphabetizing them
// duck.featherColors.sort();
// console.log("***sort***", duck.featherColors);

// // FUNCTIONS

// // 1. Declaration -- you give it a name
// function addTwoNumbers (a,b) {
//   console.log(a + b);
// }
// addTwoNumbers("***function#1***", 2,4);

// // 2. Expression (Anonymous) -- unnamed function
// var sayHi = function(name) {
//   return `Hi, ${name}`;
// }
// console.log(sayHi("***function#2***", "Melissa"));

// // alternate #2
// var sayHello = function(name) {
//   console.log(`Hello ${name}!`);
// }
// sayHello("***function#3***", "Everyone");

// // 3. Arrow
// var squareNum = (num) => num * num;
// console.log("***function#4***", squareNum(3)); */
