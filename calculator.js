let input = document.getElementById("input")
let clear = document.getElementById("clear")
let equals = document.getElementById("equals")
let buttonClass = document.getElementsByClassName("button")
let parenthLeft = document.getElementById("(")
let parenthRight = document.getElementById(")")
let operators = ["+", "-", "*", "/", "^"]
let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let zero = document.getElementById("0")
let one = document.getElementById("1")
let two = document.getElementById("2")
let three = document.getElementById("3")
let four = document.getElementById("4")
let five = document.getElementById("5")
let six = document.getElementById("6")
let seven = document.getElementById("7")
let eight = document.getElementById("8")
let nine = document.getElementById("9")
let multiply = document.getElementById("*")
let divide = document.getElementById("/")
let add = document.getElementById("+")
let subtract = document.getElementById("-")
let power = document.getElementById("^")
let dot = document.getElementById(".")

//causes buttons to update input's value with the innerText
zero.addEventListener("click", (e) => {
	input.value = input.value + zero.innerText
})
one.addEventListener("click", (e) => {
	input.value = input.value + one.innerText
})
two.addEventListener("click", (e) => {
	input.value = input.value + two.innerText
})
three.addEventListener("click", (e) => {
	input.value = input.value + three.innerText
})
four.addEventListener("click", (e) => {
	input.value = input.value + four.innerText
})
five.addEventListener("click", (e) => {
	input.value = input.value + five.innerText
})
six.addEventListener("click", (e) => {
	input.value = input.value + six.innerText
})
seven.addEventListener("click", (e) => {
	input.value = input.value + seven.innerText
})
eight.addEventListener("click", (e) => {
	input.value = input.value + eight.innerText
})
nine.addEventListener("click", (e) => {
	input.value = input.value + nine.innerText
})
parenthLeft.addEventListener("click", (e) => {
	input.value = input.value + parenthLeft.innerText
})
parenthRight.addEventListener("click", (e) => {
	input.value = input.value + parenthRight.innerText
})
multiply.addEventListener("click", (e) => {
	input.value = input.value + multiply.innerText
})
divide.addEventListener("click", (e) => {
	input.value = input.value + divide.innerText
})
add.addEventListener("click", (e) => {
	input.value = input.value + add.innerText
})
subtract.addEventListener("click", (e) => {
	input.value = input.value + subtract.innerText
})
power.addEventListener("click", (e) => {
	input.value = input.value + power.innerText
})
power.addEventListener("click", (e) => {
	input.value = input.value + power.innerText
})

//clears input window
clear.addEventListener("click", (e) => {
	input.value = ""
})
//evaluates string in input window, will change so hackers can't fuck it up
equals.addEventListener("click", (e) => {
	for (let i = 0; i < operators.length; i++) {
		let lastCharacter = input.value[input.value.length - 1]
		if (input.value === "") {
			input.value = "nothing to calculate"
		} else if (lastCharacter === operators[i]) {
			input.value = "you are garbage, dont put operators last."
		} else {
			input.value = eval(input.value)
		}
	}
})
//test code for alerts on js
// let button7 = document.getElementById("7")
// button7.addEventListener("click", () => {
// 	alert("asdf")
// })

//TODO below code goal is to replace equals event listener so that if operator is last element
// equals.addEventListener("click", (e) => {
// 	for (let i = 0; i < operators.length; i++) {
// 		let lastCharacter = input.value[input.value.length - 1]
// 		if (input.value === "") {
// 			input.value = "nothing to calculate"
// 		} else if (lastCharacter === operators[i]) {
// 			input.value = input.value - lastCharacter
// 		} else {
// 			input.value = eval(input.value)
// 		}
// 	}
// })
