/*

//disappearing button

let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
	btn.style.display = "none";
	// console.log("you did it");
});

//alert

function pickAPet() {
	var petDropDown = document.getElementById("petDropDown");
	if (petDropDown.value == "1") {
		alert("You picked a Dog");
	} else if (petDropDown.value == "2") {
		alert("You picked a Cat");
	}
}

//petting button pepper

function incrementPets() {
	var element = document.getElementById("incrementText");
	var value = element.innerHTML;

	++value;

	console.log(value);
	document.getElementById("incrementText").innerHTML = value;
}

//petting button bruce

function incrementPets2() {
	var element = document.getElementById("incrementText2");
	var value = element.innerHTML;

	++value;

	console.log(value);
	document.getElementById("incrementText2").innerHTML = value;
}

//petting button oscar

function incrementPets3() {
	var element = document.getElementById("incrementText3");
	var value = element.innerHTML;

	++value;

	console.log(value);
	document.getElementById("incrementText3").innerHTML = value;

    */

/*

	WEEK 3 LEC 2

	INTRO TO JS

	var = 10;

	total += 5 // equivalent to total = total + 5

	the += can also be used to concactenate.

	var message = "hello";
	message += " world"; // message is now "hello world"


	TYPES OF DATA

	Some types of data are considered primitive which means they just store information
	wheras there are other types that can provide structure as well. 

	Primitive types are:
	number 
	string
	boolean

	There are also structural types like objects and arrays. 

INTRO TO FUNCTIONS

Functions allow us to wrie a block of code that will only be executed when we call on it. 
This also means we areable to call on it as many times as we need. 

function name)of_function() {
	//code to be executed
}

function counter () {
	for(var num= 0 ; num <= 5; num++){
		console.log(num);
	}
}

CALLING OR INVOKING THE FUNCTION

When the computer is reading the ocde and gets to a function, it does not execute it immediately. 
If we want to be exectued we call on it by its naeme and add ().

function counter() {    
    for (var num = 0; num <= 5; num++) {        
        console.log(num);    
    }
}
counter();    // run the function
counter();    // run the function again


we indicate what a function requires input by specifying parameters in the parentheses next to the function's name.
Then when we call on the function we pass in arguments or actual values to be used in the function. 

function counter(startNum) {    //The function is expecting some PARAMETER in order to run
    for (var num = startNum ; num >= 0 ; num--) {        
        console.log(num);    
    }
}
counter(6);    // Passing in an ARGUMENT of 6, the console would display: 6, 5, 4, 3, 2, 1, 0
counter(3);    // Passing in an ARGUMENT of 3, the console would display: 3, 2, 1, 0


RETURNING VS CONSOLE LOGGING

Suppose we wanted to have a function that when given a number created an array with values from 0 to that number.

function createArray(num) {
	var newArray =[];
	for (var i = 0; i <= num; i++) {
		newArray.push(i);
	}
}
createArray(5);
//the newArray only exists inside of the function .Out here it no longer exists.

THis code above creates an array [o,1,2,3,4,5] but then when the function ends the array is lost because we have no reference to it.

A return statement serves to end the function immediately. 

Whe n a function is called the value that is returned gets sent back to the piece of code it was called from. 

function createArray(num) {        
    var newArray = [];        
    for (var i = 0; i <= num; i++) {                
        newArray.push(i);        
    }        
    return newArray;        // added the return statement
}
var y = createArray(5);        // now y is the variable that is calling on createArray

*******

HOW TO TEST YOUR FUNCTION IS WORKING

1. Link your JS to your html page by adding <script src="script.js"></script> to your html page before the </body> tag.
2. Add a js file and add this function:
function custom () {
	//we can include more code here if we want to
	console.log("my js is working");
}
3. Open up your webpage, inspect the webpage and lick on console. Your printed message should be there if connected correctly.

************

THIS KEY WORD.

Using alert() to react to users clicking on elements in our page. If we wantt omanipulate the element that is clicked on we 
can make use of the this. It's a special parameter to pass into the custom JavaScript functions we can write.

HTML:
<button onclick="example(this)">Click me</button>
JS
function example(element) {
	console.log("element clicked", element);
}
**when this button is clicked on it should console log something that looks like the html of the function.

The power of this is that we can use JS to read the content of the element or manipulate it. We can change its style or its content. 
Text is one of the most comon things we can manipulate and we can do this by using the .innterText property

.innerText example

HTML 
<button onclick="turnOff(this)">On</button>
<button onclick="turnOff(this)">On</button>
<button onclick="turnOff(this)">On</button>
JS
function turnOff(element) {
    element.innerText = "Off";
}
This code creates "on" buttons and when you click them, they say "off" instead.

******

Another thing we can do with the element is to remove it from the page when clicked by using the method called .remove()

example:

HTML:
<img src="ninja.png" alt="ninja" onclick="hide(this)">
<img src="ninja.png" alt="ninja" onclick="hide(this)">
<img src="ninja.png" alt="ninja" onclick="hide(this)">
JS:
function hide(element) {
    element.remove();
}

*/
