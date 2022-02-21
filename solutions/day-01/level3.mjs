// 1. The following is an array of 10 students ages: 
//js const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)
// Find the range of the ages(max minus min)

import pkgCountries from "./level2/countries.mjs";

// Compare the value of (min - average) and (max - average), use abs() method
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// Sorting the Array
function sortAges(arr) {
    let sortedAges = arr.sort((a, b) => a - b);
    return sortedAges;
}
//console.log(sortAges(ages));
// Finding min and max
function min(arr) {
    let min;
    min = Math.min(...arr);
    return min;

}
function max(arr) {
    let max;
    max = Math.max(...arr);
    return max;
}
//console.log(max(ages));
//console.log(min(ages));
// Finding the median age
function medianAge(arr) {
    let sortedAges = sortAges(arr);
    let median;
    return median = sortedAges[sortedAges.length / 2];
}
//console.log(medianAge(ages));
// Finding average age
function averageAge(arr) {
    let sum = arr.reduce((a, b) => a + b);
    sum = sum / arr.length;
    return sum;
}
//console.log(averageAge(ages));
// Finding the range
function rangeOfAges(arr) {
    let range = sortAges(arr);
    return range[range.length - 1] - range[0];
}
//console.log(rangeOfAges(ages));
// Compare the value of (min - average) and (max - average), use abs() method
function compareValues(arr) {
    console.log(Math.abs(min(arr) - averageAge(arr)));
    console.log(Math.abs(max(arr) - averageAge(arr)));
    return Math.abs(min(arr) - averageAge(arr)) === Math.abs(max(arr) - averageAge(arr));
}
// console.log(compareValues(ages));

// 2. Slice the first ten countries from the countries array
const { countries } = pkgCountries;
function sliceTen(arr) {
    let tenCountries;
    tenCountries = arr.slice(0, 9);
    return tenCountries;
}
//console.log(sliceTen(countries));

// 3. Find the middle country(ies) in the countries array
function middleCountries(arr) {
    if (arr.length % 2 == 0) {
        let upperMiddleIndex = arr.length / 2;
        let lowerMiddleIndex = upperMiddleIndex - 1;
        let middleCountriesArray = arr.slice(lowerMiddleIndex, upperMiddleIndex + 1);
        return middleCountriesArray;
    }
    else {
        let middleIndex = Math.floor(arr.length / 2);
        return arr[middleIndex];
    }
}
// console.log(middleCountries(countries));

// 4. Divide the countries array into two equal arrays if it is even. 
// If countries array is not even , one more country for the first half.
function divideArray(arr) {
    let middleIndex = arr.length / 2;
    let partedArray = [];
    if (arr.length % 2 == 0) {
        partedArray.push(arr.slice(0, middleIndex));
        partedArray.push(arr.slice(middleIndex, arr.length));
        return partedArray;
    }
    else {
        partedArray.push(arr.slice(0, middleIndex + 1));
        partedArray.push(arr.slice(middleIndex + 1, arr.length));
        return partedArray;
    }
}
//console.log(divideArray(countries));