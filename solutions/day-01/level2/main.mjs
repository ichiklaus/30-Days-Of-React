// 1. Create a separate countries.js file and store the countries array into this file, 
// create a separate file web_techs.js and store the webTechs array into this file. 
// Access both file in main.js file
import pkgCountries from './countries.mjs'
import pkgWebTechs from './web_techs.mjs'

// 2. First remove all the punctuations and change the string to array and count the number of words in the array
let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
text = text.replace(/,/g, "");
let arr = text.split(" ");
// console.log(arr);
// console.log(arr.length);

// 1. In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
function itExists(arr, item) {
    return arr.some(searchItem => {
        return searchItem === item;
    });
};
function addFirst(arr, item) {
    if (!itExists(arr, item)) {
        arr.unshift(item);
    }
};
function addLast(arr, item) {
    if (!itExists(arr, item)) {
        arr.push(item);
    }
}
function removeHoney(arr) {
    let newArr;
    let allergic = true;
    return allergic ? newArr = arr.filter(itemHoney => itemHoney != 'Honey') : arr;
}
function modifyGreenTea(arr) {
    let newArr;
    return newArr = arr.filter(item => {
        if (item == 'Tea') {
            let ind = arr.indexOf(item);
            arr[ind] = 'Green Tea';
        }
    })
}
addFirst(shoppingCart, 'Meat');
addLast(shoppingCart, 'Sugar');
removeHoney(shoppingCart);
modifyGreenTea(shoppingCart);
//console.log(shoppingCart);

// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. 
// If it does not exist add to the countries list.
const {countries} = pkgCountries;
function isEthiopia(arr) {
    let ethiopia = arr.filter(country => {
        if(country === 'Ethiopia'){
            return country;
        }
    });
    return ethiopia;
}
//console.log(isEthiopia(countries));

// 5. In the webTechs array check if Sass exists in the array and if it exists print 
// 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
const {webTechs} = pkgWebTechs;
function isSass(arr) {
    let newArr = arr;
    let sass = arr.includes('Sass');
    if(!sass) {
        newArr.push('Sass');
    }
    else {
        newArr.filter(preprocessor => {
            if(preprocessor === 'Sass') {
                let ind = newArr.indexOf(preprocessor);
                newArr[ind] = "Sass is a CSS preprocessor";
            };
        })
    }
    return newArr;
}
//console.log(isSass(webTechs));
// console.log(countries);
// console.log(webTechs);

// 6. Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
let fullStackVar = frontEnd.concat(backEnd);
console.log(fullStackVar);