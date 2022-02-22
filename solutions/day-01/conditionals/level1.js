// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , 
// give feedback:'You are old enough to drive' but if not 18 give another feedback 
// stating to wait for the number of years he needs to turn 18.
const prompt = require('prompt-sync')(); // calling prompt function
//let age = prompt('Enter your age: ');
function ableToDrive(age){
    return age >= 18 
    ? `You're old enough to drive.`
    : `You must first turn 18 so you can drive your first car. You need to wait ${18 - age} more years.`;
}
//let testDriveAge = ableToDrive(age);
//console.log(testDriveAge);

// 2. Compare the values of myAge and yourAge using if … else. 
// Based on the comparison and log the result to console stating who is older (me or you). 
// Use prompt(“Enter your age:”) to get the age as input.
function whoIsOlder(age) {
    let myAge = 27;
    return myAge > age
    ? `I'm ${myAge - age} years older than you.`
    : `You're ${age - myAge} years older than me`;
}
//let testAge = whoIsOlder(age);
//console.log(testAge);

// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways
let greaterThan1 = (a, b) => {
    return a > b
    ? `${a} is greater than ${b}.`
    : `${b} is greater than ${a}`;
};
let greaterThan2 = (a, b) => {
    if(a > b) {
        return `${a} is greater than ${b}`;
    } else {
        return `${b} is greater than ${a}`;
    }
}
// console.log(greaterThan1(4, 3));
// console.log(greaterThan2(4, 3));

// 4. Even numbers are divisible by 2 and the remainder is zero. 
// How do you check, if a number is even or not using JavaScript?
let number = prompt('Enter a number: ');
oddOrEven = (number) => {
    return (number % 2 === 0)
    ? `${number} is an even number`
    : `${number} is an odd number`;
}
console.log(oddOrEven(number));