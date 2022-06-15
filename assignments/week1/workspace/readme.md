<!--
SELECTORS

Selecting a class

Another way to select a tag is by it's class.

class attribute:
HTML

<h1 class="muffin">muffins are delicious</h1>

CSS
.muffin {
color: blue;
}

ID attribute:
HTML

<h1 id="muffin">muffins are delicious</h1>

CSS
#muffin {
color: purple;
}

---

Wildcard - the \* selector selects the entire page

- {
  outline: 1px solid red;
  }

This will draw a red outline around every element on the page.

If you have multiple attributes per element there is a hirearchy of what the code will return.

In this example:

- {
  color: blue;
  }

h1 {
color: rebeccapurple;
}
.green {
color: mediumseagreen;
}
#red {
color: tomato;
}

the result will be tomato because the ID is has the most strength.

- < h1 < class < ID

DESCENDENT SELECTOR

This is useful if you want to select a child element or a grandchild element from a block.
HTML

<div class ="quote">
<p>Blah blah blah</p>
</div>

CSS - if you just want to select the p element
.quote p {
font-style: italic;
}

DIRECT DESCENDANT SELECTOR - If you want to select a child element with selector >
but it won't select grandchildren

HTML

<div class="header">
    <img src="brand.img" alt="brand image">
    <img src="icon.img" alt="icon image">
</div>

CSS
.header > img {
height: 50px;
}

Here the height of the brand image will change but not the height of the icon image.

COMBINING SELECTORS

We can make stronger selectors by combining them.

ATTRIBUTE SELECTOR

If there is a situation where you want to style two similar elements that rely on an attribute. For example if you have
more than one button and you want one to be one color and size and another to be a different color and size.

HTML:

<form action="/process" method="post">
    <input type="text" name="username" value="Rebecca">
    <input type="submit" value="Enter Username">
</form>

CSS:
input {
padding: 5px;
border-color: rebeccapurple;
}
input[type="text"] {
border: none;
border-bottom: 2px solid rebeccapurple;
}
input[type="submit"] {
color: white;
background-color: rebeccapurple;
}

CSS PROPERTIES - COLOR

color types:
name - names of colors
-black,white,red,green,blue,pink

RGB - number between 0 and 225 and they are set for red,green and blue
-rgb(0,0,0), rgb(255,255,255),rgb(255,0,9)

hexadecimal - each also has a pain of numbers and letters representing red, green and blue
-#000000,#ffffff,#ff0000,#008000

(are all valid values for 0 through 15. The hexadecimal number FF when expressed in decimal (base 10) is 255)

---

Color: color of the font
background-color: color of the background

h1 {
color:black;
background-color:white;
}

---

CSS PROPERTIES - TEXT

text-align is a css property that adjusts the text alignment.
text-align: left;
text-align: right;
text-align: center;

text-decoration is a property that affects the text look
text-decoration: underline;
text-decoration: line through;
text-decoration:none;

font-style is a property you can use to add/remove italics
font-style: italic;
font-style: normal;

font-weight is a property that can change the width of the font
font-weight: normal;
font-weight: bold;
font-weight: light;

(it also accepts number values 100 - 900 etc

CSS PROPERTIES - FONT FAMILY

font-family is used to change the font of the text
font-family: serif;
font-family: monospace;
font-family: cursive;

---

CSS WIDTH AND HEIGHT

- width and height properties are used to determine the size of your elements.
  Values can be expressed in pixels (px) and percentage (%).

- if working with static content use px as it will not change

- if working with responsive design use % as it will change with your page

HEIGHT

- Be careful when setting height property. Will determine how much content element can hold.
  If left unset element will expand to fit the content it holds. To resize an image you can size one
  property (width or height) and the other will adjust appropriately to keep relative dimensions of the image.

  a {
  width: 25px;
  }
  div {
  width: 100%;
  height: 200px;
  }
  img {
  width: 250px;
  }

---

FONT-SIZE

-font-size property values can be expressed in 4 different units.
pt, px, em, %
point, pixels, em, percent:

h3 {
font-size: 10pt;
}
p {
font-size: 14px;
}
a {
font-size: 1.2em;
}
span {
font-size: 80%;
}

OVERFLOW PROPERTY

the overflow property determines what should happen when content inside a container
is too much for the container size. Set the container to hide the additional info that
doesn't fit, show in the info no matter what, or have a scroll bar added so content is
contained but still viewable.

div {
overflow: scroll;
}

---

BACKGROUND

The background property can modify the background of an element in one line.
This is a shorter version that splitting each property on its own life of code.

p {
background: #ffff url("cherries.png") no-repeat fixed center;
}

More background properties:

background-color | background-image | background-position | background-size | background-repeat

p {
background-color: blue;
}
div {
background-image: url("cherries.png");
background-position: center;
background-size: auto;
background-repeat: no-repeat;
}

BORDER

The border property adjusts all border elements in one line. It reads like this:

thickness | type | color

button {
border: 2px dotten green;
}

The border property can also be broken down into separate lines using
border-width, border-style, and border-color. You can also select very specifically which
border you want to style by using border-top, border-bottom, border-right, border-left.

border-radius

the border-radius property allows the corners of your border to be given a rounded appearance.
The values can be set up using px or %

button {
border-radius: 5px;
}

**************

THE BOX MODEL
HTML
<!DOCTYPE html>
<html lang="en">
    <head>...</head>
    <body>
        <div id="container">
        <div id="box-1"></div>
        <div id="box-2">></div>
        <div id="box-3">></div>
        <div class="clear"> </div>


        </div>
    </body>
</html>
CSS
#container {
    background-color: grey;
    width: 960px;
    overflow: hidden; (hides overflow OR DO ***2 adding demi-element)
}
#box-1, #box-2, #box-3{
    background-color: green;
    height: 200px;
    width: 200px;
    border: 1px solid black;
    margin: 20px; **pushed out from outside the border
    padding: 20px; **adds space to the inside of our border
}

#box-1, #box-2, #box-3{
    float: left;
}

.clear{
    clear: both; *** the invisible division causes container div to extend to full size
}


All web layouts are accomplished with block elements. Mostly <div> to create
rectangular areas into which all content fits. There are three rules:

1. total area: space an element occupies and affects.
2. float, clear, and overflow
3. nested elements

TOTAL AREA

- total width is how much horizontal space a block occupies. This includes block's margin,
border, and padding. MBP

You can set the margin, padding or border inside any element and the top, right, bottom, left.
Short hand is

25px - all around
25px 30px - top bottom 25px left right 30px
25px 30px 50px - top 25px left right 30px bottom 50px
25px 30px 50px 60px - top 25px right 30px bottom  50px left 60px
North South East West

MARGINS

There are other situations where elements do not have their margins collapsed:

floated elements
absolutely positioned elements
inline-block elements
elements with overflow property set to anything other than visible (They do not collapse margins with their children.)
cleared elements (They do not collapse their top margins with their parent block’s bottom margin.)

********

INLINE AND BLOCK

 - Some elements allow other elements next to them and others take all the space next to them regardless of
 how much content they have.

 - The ones that take up all the space are called "block" and the ones that share the space are called "inline".

 HTML

some block elements

<h1>Hello World</h1>
<h2>Goodbye World</h2>

some inline elements

<label>First Name:</label>
<input type="text" name="first_name">
<label>Last Name:</label>
<input type="text" name="last_name">

CSS

h1, h2 {
    display: inline;
    background-color: cyan;
}
label, input {
    display: block;
}

INLINE - BLOCK

-If you want to change the width and allow elements to be next to each other
you can use "inline-block".

h1, h2 {
    display: inline-block;
    background-color: cyan;
    width: 200px; /* this will work! */
}


- this is a great way to create columns in our code as well.
HTML
<p>Lorem ipsum dolor sit amet.</p>
<p>Lorem ipsum dolor sit amet.</p>

CSS
p {
  display: inline-block;
  width: 160px;
  box-sizing: border-box;
  padding: 20px;
  background-color: lightcyan;
  margin: 10px;
}

- Ensure that the width of each individual column is narrow enough they will
fit within their parent element. Often a div or body tage. Just applying inline-block won't
ensure the elements are the size you want.
HTML
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores quas quis, nemo dicta explicabo modi amet tenetur corrupti iste ducimus, aut totam.</p>

CSS

p {
  display: inline-block;
  width: 200px;
  box-sizing: border-box;
  padding: 20px;
  background-color: lightgreen;
  margin: 10px;
}

- you need to use vertical-align property to make sure the behavior for inline-block doesn't mess up your work.

-If you have elements that are traditionally inline and you want to change them to block elements, you can by using display:block

CODE TO CHANGE COMPUTER NAME:
<!-- ZSH_THEME="robbyrussell"
autoload -Uz vcs_info
zstyle ':vcs_info:*' enable git svn
zstyle ':vcs_info:git*' formats "- (%b) "
precmd() {
    vcs_info
}
setopt prompt_subst
prompt='ashleyohayou@iMac : %~/ ${vcs_info_msg_0_}> ' -->
