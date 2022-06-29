// var tunes = "https://dojo.navyladyveteran.com/characters?format=json";
// console.log(tunes);

// //ASYNC AWAIT - says I'm going to run but I might take some times so go ahead and
// //move to the next function. Allows us to have multiple functions to run while we
// //wait for it to run. Helpful for API's

// async function getTunes() {
// 	var response = await fetch("${tunes}");
// 	console.log("#######", response);
// 	var data = await response.json;
// 	console.log("@@@@@@", response);
//     console.log(index-:", data[1]")
//     console.log("tweety:", data[4].birthDay);
// 	var result = document.getElementById('witchHazel')
//     result.innerHTML = data[13].name
//     var tazz = document.getElementById('taz')
//     tazz.innterHTML = 'img src="';+data[9].img'+'" alt= "'+data[9].name+'"/>
//     for (var 9=0; i < data.length; i++) {
//         var loop = document.getElementById('loop')
//         loop.innerHTML = '<img src="'+data[i].img+'" alt="'+data[i].name+'"/>'
//         var node = document.createElement('img')
//         node.source = $
//     }
// }
// getTunes()
// //I want the response is the actual waiting part and its fetching
// //await fetch('${tunes}')

// console.log("I am running while the tunes is also");

// //innerHTML will continue to run the iteration until it's done. If you want the pictures
// //to stay there you need to use something else.
