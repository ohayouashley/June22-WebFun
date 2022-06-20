/*

//Console.log is your best friend. They are little helpers that print something to your terminal to let you know
//if you screwed up or if you did well.

/* 

var - similar to let 
let - able to change
function - when you hit print on a computer you 
it's a verb
const - unchangeable
if/else if - if not this do this.
! - not
=== - exactly like this! if I put my name and I want to make sure it's spelled the right way
== - capitalizaction doesn't matter
= - assignment it is assigning something to something else
document."something" - manipulating the dom. 
DOM - super important and super fun. Right click and inspect element. 

**before curly brackets insdie urly brackets instfucton

for (i=0; i<10; i++) { i = 0 means i starts at 0. i < 10 means stop when i is no longer 10. i++ means increase the number by 1 everytime loop finishes.
    console.log(i) **print to the terminal/console the value of i while loops is running.
}
*/

// for (i = 0; i < 10; i++) {
// 	console.log(i);
// }

//node scripts.js to run code or play button top right corner

// console.log("Making sure JS runs correctly");
// console.log(1);

function firstAlert() {
	alert("Hey what's cookin");
	console.log("alert function ran");
}

firstAlert();

/* Change the color of the h1 tag
1. create the function h1Color
2. Tell it what to change = element name
3. How its going to change = text color
4. How it will be activated 
5. Could tell it to change back = using conditionals if color = white change to red
*/

function h1Color(element) {
	if ((element.style.color = "#ffff")) {
		element.style.color = "#ff0000";
	} else {
		element.style.color = "#ffff";
	}

	console.log("change color bro");
}

/*

function hideCat(element) {
    console.log("you clicked the profile pic")
    element.style.display = 'none'
}
*/
