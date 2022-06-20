<!--

NOTES WEEK 2

CSS

**Learn how to use display: flex; and how it's applied to parent element to style its children
**Learn how display:flex; ignores whitespace in HTML when positioning elements

-Use display:flex on the parent "container" div and then we can write our HTML
with our usual indentation and we can avoid having the new line and tabs between divs take up space.


::NOTE::

The align-items: center; will prevent the columns from stretching (inheriting the height of the parent container div). 

Try values flex-start and flex-end.

** Learn about align-items and justify-content

-Flex can also be used to position smaller elements (like images or boxes within a larger element.

- Properties like align-items and justify-content can be used to position the elements exactly where we 
want them within some larger elements.

-::FLEX BASICS::

THis HTML will stay in common with all the following examples:

the div with an id of #dojo will have a fixed size for each of the demos
HTML
<div id="dojo">
    <img src="blue.png" alt="blue ninja" >
    <img src="green.png" alt="green ninja" >
    <img src="purple.png" alt="purple ninja" >
    <img src="red.png" alt="red ninja" >
</div>

CSS
#dojo {
    width: 400px;
    height: 200px;
    background-color: grey;
}


APPLYING DISPLAY FLEX

- at first when we apply display: flex; the ninjas will appear distorted. Don't worry we can fix that
- now we can fix the weird stretch by applying align-items (just makes sure there is enough width so it affects all your divs)
-The justify-content property can be applied to the parent to affect the child elements. In this case when we just justify-content on the #dojo
it will reposition the ninjas.
    **HERE we'll use justify-content: flex-start; this will put all the ninjas at the left half of the page
    -justify-content: center will put all of the ninjas at the center of the page
    -justify-content: flex-end will put all of the ninjas at the end of the page. 
        **REMEMBER THERE NEEDS TO BE ENOUGH WIDTH PX FOR THIS TO WORK OTHERWISE THEY WON'T GO ANYWHERE
    -You can also use:
    -justify-content: space-between; (to put a generous amount of space around each div)
    -justify-content: space-evenly: (to put a little space between each div)
    -justify-content: space-around: (to put a medium amount of space between each div)

    





>
