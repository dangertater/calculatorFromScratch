//q4e = questions for eric
//TODO = reminders to myself to do it
//

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

//next several lines cause buttons on webpage to update input's value with the innerText
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

//TODO all of these are shouting into the void probs
//---- q4e - I am aware that I could do all of this inline probs, is good callback practice...those would be callbacks right?
//solves power equations
let powerEquation = (num1, num2) => {
	return Math.pow(parseInt(num1), parseInt(num2))
}
//solves multiplication equations
let multiplyEquation = (num1, num2) => {
	return parseInt(num1) * parseInt(num2)
}
//solves division equations
let divideEquation = (num1, num2) => {
	return parseInt(num1) / parseInt(num2)
}
//solves addition equations
let addEquation = (num1, num2) => {
	return parseInt(num1) + parseInt(num2)
}
window = window.addEquation
//solves subtraction equations
let subtractEquation = (num1, num2) => {
	return parseInt(num1) - parseInt(num2)
}

//will loop through looking for operators prioritizing operators by order of operations
//---- takes operator and immediately surrounding elements and calls 'x'Equation to calculate them
//---- q4e - I am aware that I could do all of this inline probs, is good callback practice...those would be callbacks right?
//---- q4e - i created inputValue variable beacuse without it the 'let input.value' variable assignment under the if statements
//--------would have a red squigly line and say ', expected'...?
let operatorFinder = (inputValue) => {
	for (let i = 0; i < input.value.length; i++) {
		let inputValue = input.value
		let preEquationStringSliced = input.value.slice(0, i)
		let leftEquation1 =
			preEquationStringSliced -
			preEquationStringSliced[preEquationStringSliced.length]
		let leftEquation2 = leftEquation1 - leftEquation1[leftEquation1.length]
		let postEquationStringSliced = input.value.slice(i + 1)
		let preEle = i - 1
		let postEle = i + 1
		if (inputValue[i] === "^") {
			inputValue =
				leftEquation2 +
				powerEquation(inputValue[preEle], inputValue[postEle]) +
				postEquationStringSliced
			return operatorFinder(inputValue)
		} else if (inputValue[i] === "*") {
			inputValue =
				leftEquation2 +
				multiplyEquation(inputValue[preEle], inputValue[postEle]) +
				postEquationStringSliced
			return operatorFinder(inputValue)
		} else if (inputValue[i] === "/") {
			inputValue =
				leftEquation2 +
				divideEquation(inputValue[preEle], inputValue[postEle]) +
				postEquationStringSliced
			return operatorFinder(inputValue)
		} else if (inputValue[i] === "+") {
			inputValue =
				leftEquation2 +
				addEquation(input.value[preEle], input.value[postEle]) +
				postEquationStringSliced
			return operatorFinder(inputValue)
		} else if (inputValue[i] === "-") {
			inputValue =
				leftEquation2 +
				subtractEquation(inputValue[preEle], inputValue[postEle]) +
				postEquationStringSliced
			return operatorFinder(inputValue)
		}
	}
}

//evaluates string in input window, TODO change so hackers can't fuck it up
equals.addEventListener("click", (e) => {
	for (let i = 0; i < operators.length; i++) {
		let lastCharacter = input.value[input.value.length - 1]
		if (input.value === "") {
			input.value = "nothing to calculate...you bitch"
		} else if (lastCharacter === operators[i]) {
			input.value = "you are garbage, dont put an operator as last character"
		} else {
			console.log("test")
			return (input.value = operatorFinder(input.value))
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
