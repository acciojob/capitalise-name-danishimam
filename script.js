//your JS code here. If required.
let inputName = document.getElementById("fname")

inputName.addEventListener("keyup", function() {
	inputName.value = inputName.value.toUpperCase()
});