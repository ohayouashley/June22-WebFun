/* FOR LOOPS


for (intialization, conditional, Incrementation (or instructions))


for (let i = 0; i < 10; i++ ) {
    console.log("hi", i)
}
:: loop through a given array and print every other index:

var arr = [1,2,3,4,5,6,7,8,9]
//step#1 start the for loops with i = 0
step #2 tell it where to end. With an array you'll use arr.length
#3 tells how to increment each time. In this case you want to increment by 2 to skip every other number. 
Use i+2
#4 print out the result using console.log

for (var i = 0; i < arr.length; i += 2) {
    console.log("the value of the current index is: ", b[i])
}

function loop(arr {
    for (var i = 0; i < a.length; i+=2) {
        console.log("function loop value of I: ", i)
    }
})

//add a conditional

if the index is positive print the value. if it is negative print negative number

var array = (-1,3,6,-6,9,-24,8,-100,5000)
if i >= 0 print the value of i
if value is a negative number print "negative number"

#5 continue conditional statement with - else console.log "negative number"

function positive(a) {
    for (var i=0; i<a.length; i++)
        if (i >= 0) {
            console.log("the value is: ", i)
        } else {
            console.log("negative number")
        }
}
positive(array)





*/
