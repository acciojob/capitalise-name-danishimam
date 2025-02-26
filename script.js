//your JS code here. If required.
let inputName = document.getElementById("fname")

inputName.addEventListener("click", (event) => {
	event.preventDefault()
	inputName.value = inputName.value.toUpperCase()
});