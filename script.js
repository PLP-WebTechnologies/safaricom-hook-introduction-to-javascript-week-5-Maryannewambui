// Variables and Data Types
let name = "Maryanne Wambui"; 
let age = 22; 
let isStudent = true;
let hobbies = ["Swimming", "Cooking"];

console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);

// Calculator Function
function calculator() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let operation = prompt("Choose an operation (+, -, *, /):");

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

    let result;
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num2 !== 0 ? num1 / num2 : "Division by zero!";
            break;
        default:
            alert("Invalid operation.");
            return;
    }

    alert(`Result: ${result}`);
}
calculator();

// Greet User Function
function greetUser(name) {
    return `Hello, ${name}! Welcome to JavaScript!`;
}
document.body.innerHTML += `<p>${greetUser("Maryanne")}</p>`;


// If Statements
let userAge = parseInt(prompt("Enter your age:"));
if (!isNaN(userAge)) {
    let message = userAge >= 18 
        ? "You are eligible to vote." 
        : "You are not eligible to vote.";
    document.body.innerHTML += `<p>${message}</p>`;
} else {
    alert("Please enter a valid age.");
}

// Loops1
let numberList = document.getElementById("number-list");
for (let i = 1; i <= 10; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = i;
    numberList.appendChild(listItem);
}

// Introduction to the DOM
let heading = document.querySelector("h1");
heading.textContent = "JavaScript in Action!";

let dynamicDiv = document.getElementById("dynamic-content");
let newParagraph = document.createElement("p");
newParagraph.textContent = "This content was added dynamically using JavaScript.";
dynamicDiv.appendChild(newParagraph);
