let input = document.getElementById("input")
let clear = document.getElementById("clear")
let equals = document.getElementById("equals")
let buttonClass = document.getElementsByClassName("button")
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
let parenthLeft = document.getElementById("(")
let parenthRight = document.getElementById(")")
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

//will loop through looking for operators prioritizing operators by order of operations
//---- takes operator and immediately surrounding elements and calls a function to calculate them
let operatorFinder = () => {
    for (let i = 0; i<input.value.length;i++) {
        if (input.value.includes(operators[i]))
    }
}

//evaluates string in input window, TODO change so hackers can't fuck it up
equals.addEventListener("click", (e) => {
	for (let i = 0; i < operators.length; i++) {
		let lastCharacter = input.value[input.value.length - 1]
		if (input.value === "") {
			input.value = "nothing to calculate"
		} else if (lastCharacter === operators[i]) {
			input.value = "you are garbage, dont put an operator as last character."
		} else {
			input.value = input.value
		}
	}
})

//Planned steps for making a lit calculator
//----hit equals, send string to a function named X
//----have function loop through in order of operations, and take i-1, i(which will be the operator), and i+1
//----have that chunk of string calculated by another funcion Y, recursively call function X until only a single number is left.

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

//prior to me deciding i am not going to use objects
// ----let obj = {}
// ----//will break down input windows string into smaller pieces and recompile preventing .eval necessity
// ----let objMaker = () => {
// ----	for (let i = 0; i < input.value.length; i++) {
// ----		for (let j = 0; j < operators.length; j++)
// ----			if (input.value[i] === operators[j]) {
// ----				let obj = {
// ----					first: input.value[i - 1],
// ----					second: input.value[i],
// ----					third: input.value[i + 1],
// ----				}
// ----			}
// ----	}
// ----}
