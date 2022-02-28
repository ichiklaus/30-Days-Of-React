/** Refreshing basic concepts of objects
 * These lines are to refresh my memory regarding objects and its basic methods
 */
/*
const person = {
    name: 'Nicolas',
    surname: 'Moreira',
    age: '27',
}

const copy = Object.assign({}, person); // copies the object

// console.log(person);
// console.log(copy);

const keys = Object.keys(person); // gets the key or property of an object as array
console.log(keys);
const values = Object.values(person); // gets the value of an object as array
console.log(values);
const entries = Object.entries(person) // gets both the property and value as array
console.log(entries);

console.log(person.hasOwnProperty('surname')); // checks if the object has such property
*/

/** Exercise solutions for level 1 */
// 1. Create an empty object called dog
let dog = {}

// 2. Print the the dog object on the console
console.log(dog);

// 3. Add name, legs, color, age and bark properties for the dog object. 
// The bark property is a method which return woof woof
dog.name = 'Tuty';
dog.legs = 4;
dog.color = 'Black and white';
dog.bark = function () { return `woof! woof!` };

// 4. Get name, legs, color, age and bark value from the dog object
function getDogInfo() {
    return `Dog's name is ${dog.name}. Has ${dog.legs} legs. She's ${dog.color}. And she says ${dog.bark()}`;
}
console.log(getDogInfo());

// 5. Set new properties the dog object: breed, getDogInfo
dog.breed = 'Husky';
// console.log(dog);
let getInfo = (object) => {
    return `Dog's name is ${dog.name}. Has ${dog.legs} legs. She's ${dog.color}. And she says ${dog.bark()}. And she's a ${dog.breed}`;
}

console.log(getInfo(dog));