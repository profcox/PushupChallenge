//my-scripts.js
//creates the functionality for my habit tracker app

//create a counter and initialize to 0
if (localStorage.getItem("count") == null) {
	localStorage.setItem("count", 0)
}

//display the value of count on the screen
function update() {
	document.getElementById("count").innerHTML = localStorage.getItem("count")
}

update()

//when you click the add a day button, add 1 to count
function plusOne() {
	localStorage.setItem("count", Number(localStorage.getItem("count")) + 1)
	update()
}

//when you click reset, send up an alert
//if accept alert, reset counter to 0
function reset() {
	if (confirm("Are you sure you want to reset?")) {
		localStorage.setItem("count", 0)
		update()
	}
}

