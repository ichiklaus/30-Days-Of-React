// Declare an empty array;
let emptyArray = [];

//Declare an array with more than 5 number of elements
let moreThanFive = [
    "SVI",
    "Pet Center",
    "Chacoy",
    "IntegralVet",
    "Hausser",
    "Theo Pets"
]

// Find the length of your array
function getLengthOfArray(arr) {
    return arr.length;
}

//Get the first item, the middle item and the last item of the array
function getFirstMiddleLast(arr) {
    let middle = arr.length
    return `First item: ${arr.slice(0, 1)}
Middle item: ${arr[Math.round(middle / 2)]}
Last item: ${arr.slice(arr.length - 1)}
`
}

// Declare an array called mixedDataTypes, put different data types in 
// the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = [
    "integer",
    "String",
    "bool",
    "reference",
    "pointer",
    "unsigned int"
]
function findLengthG5(arr) {
    return arr.length > 5 ? arr.length : null;
}

// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = [
    'Facebook',
    'Google',
    'Microsoft',
    'Apple',
    'IBM',
    'Oracle',
    'Amazon'
]

// Print the array using console.log()
//console.log(itCompanies);

// Print the number of companies in the array
//console.log(itCompanies.length);

// Print the first company, middle and last company
function printFirstMiddleLast (arr) {
    let middle = arr.length / 2;
    return `
    First: ${arr[0]}
    Middle: ${arr[Math.floor(middle)]}
    Last: ${arr[arr.length - 1]}
    `
}
//console.log(printFirstMiddleLast(itCompanies));

// Print out each company
function printAllCompanies(arr) {
    arr.map(compArr => {
        console.log(compArr);
    });
}
//printAllCompanies(itCompanies);

// Change each company name to uppercase one by one and print them out
function toUpperCase(arr) {
    arr.map(compArr => {
        console.log(compArr.toUpperCase());
    });
}
//toUpperCase(itCompanies);

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies
function printAsSentence(arr) {
    let newArr = arr.slice(0);
    newArr.splice((newArr.length - 1), 0, 'and');
    let tempStr =  newArr.join(', ').trim();
    tempStr = tempStr.replace(/and,/, 'and');
    return tempStr + " are big IT companies";
}
console.log(printAsSentence(itCompanies));
console.log(itCompanies);

// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
function itExists(arr, search) {
    return arr.some(searchVal => {
        return search === searchVal
    });
}
//console.log(itExists(itCompanies, 'Meta'));

// Filter out companies which have more than one 'o' without the filter method

// Sort the array using sort() method
function sortCompanies(arr) {
    return arr.sort();
}
//console.log(sortCompanies(itCompanies));

// Reverse the array using reverse() method
function reverseCompanies(arr) {
    return arr.reverse();
}
//console.log(reverseCompanies(itCompanies));

//Slice out the first 3 companies from the array
function sliceFirstThree(arr) {
    let newArr = arr.slice(0,3);
    return newArr;
}
//console.log(sliceFirstThree(itCompanies));

// Slice out the last 3 companies from the array
function sliceLastThree(arr) {
    let newArr = arr.slice(arr.length - 3, arr.length);
    return newArr;
}
//console.log(sliceLastThree(itCompanies));

// Slice out the middle IT company or companies from the array
function sliceMiddle(arr) {
    let middle = arr.length / 2;
    let newArr = arr.slice(middle, middle + 1);
    return newArr;
}
//console.log(sliceMiddle(itCompanies));

// Remove the first IT company from the array
function popFirst(arr) {
    let newArr = arr.slice();
    newArr.shift();
    return newArr;
}
//console.log(popFirst(itCompanies));

// Remove the middle IT company or companies from the array
function popMiddle(arr) {
    let newArr = arr.slice();
    let middle = newArr.length / 2;
    newArr.splice(middle, 1);
    return newArr;
}
//console.log(popMiddle(itCompanies));

// Remove the last IT company from the array
function popLast(arr) {
    let newArr = arr.slice();
    newArr.pop();
    return newArr;
}
//console.log(popLast(itCompanies));

// Remove all IT companies
function removeAllCompanies(arr) {
    let newArr = arr.slice();
    newArr.splice(0);
    return newArr;
}
//console.log(removeAllCompanies(itCompanies));