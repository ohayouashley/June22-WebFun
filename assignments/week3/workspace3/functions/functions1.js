/* 

FUNCTIONS 


::DECLARING A FUNCTION::
** No two functions can be named the same thing. However they can be used more than once.
Should in some way describe the idea of the function. myFunction is not a good name. 

function myFunction() {
    console.log("print to the console")

}

myFunction()

::FUNCTION INSTRUCTIONS::

**Instructions should always go under the function, inside curly brackets {}. It should also be indented for easier reading.

**They can also contain invocations of other functions. IE. A function that prints to the console and also makes an alert.
You can call them inside of one another. 

::INVOCATION OF A FUNCTION

**this can be found on the .js file or in the html file itself
can be found inside another function
may be used more than once. 

**Always after the function never before. Make sure the function you're calling within a function is after the function not before. 
Code is read from top to bottom. If the invocation is above the function, it won't read it if it's above the function. 

::BEST PRACTICES::

**always try to make your code reusable. keep it clean, comments should go outside of the functions
Pseudocode 1st - make sure you know what you want to build before you try to do it. Test your code often. 
Pseudocode (writing in plain english what you are trying to build)

function addingNumbers(a, b, c) {
    console.log("add numbers", a + b)
    console.log("print c:", c)
}

addingNumbers(4,6,'three')

*******

Multiply a*b */

function multiply(a, b) {
	var c = a * b;
	console.log("results:", c);
}

multiply(a, b);

// Rule of thumb if when declaring a function with parameters invoking the function must also have parameters. If I declare parameters in the function, I must als
// pass parameters when invoking the function.

{
	/* <input type button value 'conafdkla;'


<input type="number" name="a" id="">
<input type="number" name="a" id="">
<button onClick="multiply()" */
}

//line25 creating a function called show data line 26 creating a variable called nameand telling it where to find it on the html page

/* 

function multiplying() {
    var a = document.details.a.value
    var b = document.details.b.value
    var c = a * b
    console.log("results:", c)
}

function showData () {
    var name = document.details.name.value
    var location - document.details.location.value
    console.log("you submit following in the form to an alertbox: ", name, location)
    alert("my name is " +name+ "and my location is " + location)

    multiplying()
}
line 25 crating a function called show data
line 26creating a variable called name and telling it 
line 28 is doing what? printing to the console the text in "" and the vales of name and location
line 29 is creating an alert box on the html with a phrase that includes the values of name and location.
