// 1. Write a code which can give grades to students according to theirs scores:
let scores = (input) => {
    return !(input > 100) ? (
        (input >= 90 && input <= 100) ? `A`
            : (input >= 70 && input <= 89) ? `B`
                : (input >= 60 && input <= 69) ? `C`
                    : (input >= 50 && input <= 59) ? `D`
                        : `F`
    )
        : `Invalid input`;
}
//console.log(scores(-10));

// 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is
const prompt = require('prompt-sync')();
let input = prompt('Enter input: ');
let seasons = (input) => {
    let months =
        ['December', 'January', 'February', 'March', 'April', 'May', 'June', 'July',
            'August', 'September', 'October', 'November'];
    months = months.map(month => month.toLowerCase());
    input = input.toLowerCase();
    for (let property = 0; property <= months.length - 1; property++) {
        if (months[property] === input) {
            return (property <= 2) ? `The season is Winter`
            : (property >= 3 && property <= 6) ? `The season is Spring`
            : (property >= 7 && property <= 10) ? `The season is Summr`
            : `The season is Autumn`
        }
    }
    return `Not a correct month.`;
}
// console.log(seasons(input));

// 3. Check if a day is weekend day or a working day. Your script will take day as an input.
let whichWeekDay = (input) => {
    let days = ['Monday', 'Thursday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    days = days.map(day => day.toLowerCase());
    input.toLowerCase();
    for (let prop = 0; prop <= days.length; prop++) {
        if (days[prop] === input) {
            return (prop <= 4) ? `${days[prop].charAt(0).toUpperCase() + days[prop].slice(1)} is a workday`
            : `${days[prop].charAt(0).toUpperCase() + days[prop].slice(1)} is weekend`;
        }
    }
    return `Invalid input.`;
}
console.log(whichWeekDay(input));