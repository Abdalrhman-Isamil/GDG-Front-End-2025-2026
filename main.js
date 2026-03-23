
//! 1. Data Types And Variables
const myName = "Ahmed";
const age = 25;
let isStudent = true;
const emptyValue = null;
let notDefined;

const person = {
    firstName: "Ali",
    lastName: "Omar"
};

const colors = ["Red", "Green", "Blue"];

console.log("--- Data Types & Variables ---");
console.log(myName, age, isStudent, emptyValue, notDefined, person, colors);

//! 2. Operators
const x = 10;
const y = 5;

const sum = x + y;
const diff = x - y;
const prod = x * y;
const div = x / y;
const mod = x % y;
const power = x ** 2;

console.log("\n--- Operators ---");
console.log(`Sum: ${sum}`);
console.log(`Diff: ${diff}`);
console.log(`Prod: ${prod}`);
console.log(`Div: ${div}`);
console.log(`Mod: ${mod}`);
console.log(`Power: ${power}`);

//! 3. Numbers
const numStr = "100.55";

const num = Number(numStr);
const parsedInt = parseInt(numStr, 10);
const parsedFloat = parseFloat(numStr);
const rounded = Math.round(10.6);
const maxNum = Math.max(10, 20, 50, 5);

console.log("\n--- Numbers ---");
console.log(num, parsedInt, parsedFloat, rounded, maxNum);

//! 4. Strings And Methods
const text = " Hello JavaScript World! ";

const trimmedText = text.trim();
const upperText = trimmedText.toUpperCase();
const indexOfJS = trimmedText.indexOf("JavaScript");
const sliceText = trimmedText.slice(0, 5);
const replaceText = trimmedText.replace("World", "Developer");

console.log("\n--- Strings And Methods ---");
console.log(`Original: '${text}'`);
console.log(`Trimmed: '${trimmedText}'`);
console.log(`Uppercase: '${upperText}'`);
console.log(`Index of 'JavaScript': ${indexOfJS}`);
console.log(`Sliced: '${sliceText}'`);
console.log(`Replaced: '${replaceText}'`);

//! 5. Comparison & Logical Operators
const a = 10;
const b = "10";
const c = 20;

console.log("\n--- Comparison & Logical Operators ---");
console.log(`a == b: ${a == b}`);     // loose equality
console.log(`a === b: ${a === b}`);   // strict equality
console.log(`a !== c: ${a !== c}`);
console.log(`(a < c) && (a == b): ${(a < c) && (a == b)}`);
console.log(`(a > c) || (a == b): ${(a > c) || (a == b)}`);
console.log(`!isStudent: ${!isStudent}`);

//! 6. If Condition
console.log("\n--- If Condition ---");
const degree = 85;

if (degree >= 90) {
    console.log("Grade: Excellent");
} else if (degree >= 80) {
    console.log("Grade: Very Good");
} else if (degree >= 70) {
    console.log("Grade: Good");
} else {
    console.log("Grade: Fail");
}

//! 7. Switch Statement
console.log("\n--- Switch Statement ---");
const day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Saturday";
        break;
    case 2:
        dayName = "Sunday";
        break;
    case 3:
        dayName = "Monday";
        break;
    default:
        dayName = "Other Day";
}

console.log(`Day ${day} is ${dayName}`);

//! 8. Loop - For
console.log("\n--- Loop - For ---");
for (let i = 1; i <= 5; i++) {
    console.log(`Iteration number ${i}`);
}

//! 9. Loop - While
console.log("\n--- Loop - While ---");
let counter = 1;

while (counter <= 3) {
    console.log(`While loop counter: ${counter}`);
    counter++;
}

//! 10. Function And Parameters (Arrow Function)
console.log("\n--- Function And Parameters ---");
const calculateArea = (width, height) => width * height;

const area = calculateArea(10, 20);
console.log(`Area of 10x20 is: ${area}`);

//! 11. Function And Scopes
console.log("\n--- Function And Scopes ---");
const globalVar = "I am global";

const testScope = () => {
    const localVar = "I am local";
    console.log(globalVar);
    console.log(localVar);
};

testScope();