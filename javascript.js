// var database = [
// 	{
// 		username: "charles",
// 		password: "david"
// 	},
	
// 	{
// 		username: "chima",
// 		password: "junior"
// 	},

// 	{
// 		username: "samuel",
// 		password: "emeka"
// 	}
// ];

// var newsFeed = [
// 	{
// 		username: database[0].username,
// 		timeline: "Hello everyone im actually new here",
// 	},

// 	{
// 		username: database[1].username,
// 		timeline: "hi " + database[0].username + " i\'m " + database[1].username + " its nice to meet you",
// 	},

// 	{
// 		username: database[0].username,
// 		timeline: "Hello " + database[1].username + " its nice to meet you too!",
// 	},

// 	{
// 		username: database[2].username,
// 		timeline: "wow this is nice",
// 	}
// ];

// var usernamePrompt = prompt("What\'s Your Username");
// var passwordPrompt = prompt("Enter Your Password");


// function isUserValid(username, password) {
// 	for (var i = 0; i < database.length; i++) {
// 	if (database[i].username === username && database[i].password === password) {

// 	return true;

// 		}
// 		return false;
// 	}
// }

// function signIn(username, password) {
// 	if (isUserValid(username, password)) {
// 		console.log(newsFeed);
// 	}
// 	else {
// 		alert("sorry wrong username or password");
// 	}



// }

// signIn(usernamePrompt, passwordPrompt);


// Make a keyless car!
// This car will only let you drive if you are over 18. Make it do the following:


//using prompt() and alert(), ask a user for their age.
// IF they say they are below 18, respond with:
// "Sorry, you are too young to drive this car. Powering off"

// IF they say they are 18, respond with:
// "Congratulations on your first year of driving. Enjoy the ride!"

// IF they say they are over 18, respond with:
// "Powering On. Enjoy the ride!"

// var acceptage = prompt("Please Enter Your Age");

// if (!Number(acceptage)) {
// 	alert("Please you must enter a number");
// }
// else if(acceptage < 18) {
// 	alert("Soorry, tou are too young to drive this car.")
// 	console.log("powering off.............");
// }
// else if(acceptage == 18) {
// 	alert("Congratulations on your first year of driving. Enjoy the ride!");
// }
// else {
// 	alert("Powering On..............Enjoy the Ride");
// }

// Make a keyless car EVEN BETTER!
// We are improving our car from previous exercise now.


//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
// Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?

//2. Create another function that does the same thing, called checkDriverAge2() using Function Expression.

//BONUS: Instead of using the prompt. Now, only use the return keyword and make the checkDriverAge() function accept an argument of age, so that if you enter:



// function checkDriverAge() {
// var age = prompt("enter age");
// if(Number(age) < 18) {
// 	alert("sorry you are too young to drive a car");
// 	console.log("Powering off...............");
// }
// else if(Number(age) == 18) {
// 	alert("welcome to your first year in driving");
// 	console.log("Powering On................")
// } 
// else {
// 	alert("age verified. Powering On...............");
// }

// }
// checkDriverAge();



// using this array,
// var fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

// fruits.shift();
// fruits.sort();
// fruits.push("kiwi");



// 1. Remove the Banana from the array.

// 2. Sort the array in order.

// 3. Put "Kiwi" at the end of the array.

// 4. Remove "Apples" from the array.

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])

// you should have at the end:
// ["Kiwi", "Oranges", "Blueberries"]

// using this array,
//var fruits2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];



// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.


// 2. Create an array which contains the object you have made above and name the array "database".

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

// JAVASCRIPT TYPES
// -----------------
// 1. Number 
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// <!-- 6. Symbol (new in ECMAScript 6) -->
// 7. Object

// JAVASCRIPT COMPARISONS
// -----------------

// !==
// ===
// >=
// <=
// >
// <

// JAVASCRIPT VARIABLES
// -----------------
// var
// <!-- let (new in ECMAScript 6)-->  
// <!-- const (new in ECMAScript 6)-->

// JAVASCRIPT CONDITIONALS
// -----------------
// if
// else
// else if
// <!-- ternary operator -->
// <!-- switch -->


// JAVASCRIPT LOGICAL OPERATORS
// -----------------
// &&
// ||
// !

// JAVASCRIPT FUNCTIONS
// -----------------
// var a = function name() {}
// function name() {}
// return
// <!-- () => (new in ECMAScript 6) -->

// JAVASCRIPT DATA STRUCTURES
// -----------------
// Array
// Object

// JAVASCRIPT LOOPING
// -----------------
// for
// while
// do 
// forEach (new in ECMAScript 5) 


// JAVASCRIPT KEYWORDS
// -----------------
// break
// case
// catch
// class
// const
// continue
// debugger
// default
// delete
// do
// else
// export
// extends
// finally
// for
// function
// if
// import
// in
// instanceof
// new
// return
// super
// switch
// this
// throw
// try
// typeof
// var
// void
// while
// with
// yield


// var button = document.getElementById("enter");
// var input = document.getElementById("userinput");
// var ul = document.querySelector("ul");

// function getInputLength() {
// 	return input.value.length;
// }

// function createListElement() {
// 	var li = document.createElement("li");
// 	li.appendChild(document.createTextNode(input.value));
// 	ul.appendChild(li);
// 	input.value = "";
// }

// function addListAfterClick() {
// 	if (getInputLength() > 0) {
// 		createListElement();
// 	}
// }

// function addListAfterKeypress(event) {
// 	if (getInputLength() > 0 && event.keycode === 13) {
// 		createListElement();
// 	}
// }

// button.addEventListener("click", addListAfterClick);
// input.addEventListener("Keypress", addListAfterKeypress);

// var wrapper = document.getElementById("wrapper");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var css = document.querySelector("h5");


// function setGradient() {
// 	wrapper.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

// 	css.textContent = wrapper.style.background + ";";
// }

// color1.addEventListener("input", setGradient);
// color2.addEventListener("input", setGradient); 
// function isUserValid(bool) {
// 	return bool;
// }
// var automatedAnswer = "Your account number is " + (isUserValid(true) ? " 1234" : " not available");


// function moveCommand(direction) {
// 	var whatHappens;
// 	switch (direction) {
// 		case "forward":
// 		whatHappens = "you encountered gold";
// 		break;
// 		case "back":
// 		whatHappens = "you\'ve arrived home";
// 		break;
// 		case "left":
// 		whatHappens = "you encountered a river";
// 		break;
// 		case "right":
// 		whatHappens = "you\'ve run into diamonds";
// 		break;
// 		default:
// 		whatHappens = "For God\'s sake just make a move!";
// 	}
// 	return whatHappens;
// }



// function experiencePoints() {
//     if (winBattle()) {
//         return 10;
//     } else {
//         return 1;
//     }
// }
// var experiencePoints = winBattle() ? return 10 : return 1;
// //Using this function, answer the questions below:
// function moveCommand(direction) { 
//     var whatHappens;
//     switch (direction) {
//         case "forward":
//             break;
//             whatHappens = "you encounter a monster";
//         case "back":
//             whatHappens = "you arrived home";
//             break;
//             break;
//         case "right":
//             return whatHappens = "you found a river";
//             break;
//         case "left":
//             break;
//             whatHappens = "you run into a troll";
//             break;
//         default:
//             whatHappens = "please enter a valid direction";
//     }
//     return whatHappens;
// }




// const player = "Johnny";
// let experience = 100;
// let wizardlevel = false;

// if (experience > 90) {
// 	let wizardlevel = true;
// 	console.log("inside", wizardlevel);
// }
// console.log("outside", wizardlevel);


//Destructuring
// const obj = {
// 	player2: "Frankie",
// 	experience: 100,
// 	wizardlevel: false
// }

// const {player2, experience} = obj;
// let {wizardlevel} = obj;
// const age = 10;
// const name = "sally";
// const pet = "horse";
//let greeting = `Hello ${name} you were ${age} years old yersterday but now you're ${age + 1}, as your gift i've bought you your own ${pet}, wish you the best love you! :)`;

//default arguments

// function greet(name='', age=14, pet='cat') {
// 	return `Hello ${name} you were ${age} years old yersterday but now you're ${age + 1}, as your gift i've bought you your own ${pet}, wish you the best love you! :)`;

// }

//arrow functions

// function add2(a, b) {
// 	return a + b;
// }

// const add = (a, b) => a + b;



// const first = () => {
// 	const greet = 'HI';
// 	const second = () => {
// 		alert(greet);
// 	}
// 	return second;
// }

// const newFunc = first();
// newFunc();

// const multiply = (a, b) => a * b;
// const curriedMultiply = (a) => (b) => a * b;
// const multiplyby5 = curriedMultiply(3);

// //Compose
// const compose = (f, g) => (a) => f(g(a));
// const sum = (num) => num + 1;
// compose(sum, sum)(5);

// //Avoiding Side Effects and Functional Purity


//  const array = [1, 2, 10, 16];
// // const double = []
// // const newArray = array.forEach((num) => {
// // 	double.push(num + 2);
// // })
// // console.log(double);

// //map, filter, reduce
// const mapArray = array.map((num) => {
// 	return num * 2;
// })
// console.log('map', mapArray);

// const first = () => {
// 	const greet = "HI";
// 	const second = () => {
// 		alert(greet);
// 	}
// 	return second;
// }
// const newFunc = first();
// newFunc();

// const curriedMultiply = (a) => (b) => a * b;
// curriedMultiply(5);

// //compose
// const compose = (f, g) => (a) => f(g(a));
// const sum = (num) => num + 1;
// compose(sum, sum)(10);

// const numbers = [1, 2, 4, 5, 16];
// const double = [];
// const newNumbers = numbers.forEach((num) => {
//  double.push(num * 6);
// }); 

// console.log(double);

// const anotherNum = numbers.map((num2) => {
// 	return num2 * 2;
// });
// console.log("second", anotherNum);

// const filterNumber = numbers.filter((num) => {
// 	return num < 5;
// });
// console.log('filter', filterNumber);

// const reduceNumber = numbers.reduce((accumulator, num) => {
// 	return accumulator + num;
// }, 10);
// console.log('reduce', reduceNumber);

// class Player {
// 	constructor(name, type) {
// 		console.log('player', this);
// 		this.name = name;
// 		this.type = type;
// 	}
// 	introduce() {
// 		console.log(`Hi i'm ${this.name} and i'm a ${this.type}`);
// 	}
// }

// class Wizard extends Player {
// 	constructor(name, type) {
// 		super(name, type)
// 		console.log('wizard', this)
// 	}
// 	play() {
// 		console.log(`HELLOOO i'm a ${this.type}`);
// 	}
// }

// const wizard1 = new Wizard("Shelly", "Healer");
// const wizard2 = new Wizard("Paul", "Dark Magic");
// const wizard3 = new Wizard("Helen", "Charmer");

// class Animal {
// 	constructor(name, type, color) {
// 		this.name = name;
// 		this.type = type;
// 		this.color = color;
// 	}
// }

// class Mamal extends Animal {
// 	constructor(name, type, color) {
// 		super(name, type, color);
// 		console.log(this);
// 	}
// 	moo() {
// 		console.log(`hello im ${this.name}, and i'm a ${this.type} and my color is ${this.color}`);
// 	}
// }

// const cow1 = new Mamal('Rickles','Cow','White');
// const cow2 = new Mamal('Freckles', 'Cow', 'Black');



// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragons.includes('john');

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];


// #3) Create a function that calulates the power of 100 of a number entered as a parameter

const square = (x) => x**100;

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result