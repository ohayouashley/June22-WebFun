//disappearing button

let btn = document.getElementById("buttonAddDef");

btn.addEventListener("hide", () => {
	btn.style.display = "none";
	// console.log("you did it");
});

//likes

function message(id) {
	document.getElementById(id).innerHTML++;
}

function login(element) {
	if (element.innerText == "login") {
		element.innerText = "logout";
	} else {
		element.innerText = "login";
	}
}

function message() {
	alert("ninja was liked!");
}
