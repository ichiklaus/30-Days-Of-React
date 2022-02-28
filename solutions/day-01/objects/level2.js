const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

// 1. Find the person who has the most skills in the users object.
function mostSkills(object) {
  let arr = [];
  let maxNumOfSkills;
  for(item in object) {
    if(object[item].hasOwnProperty('skills')) {
      arr.push(object[item].skills.length);   
    }    
  }
  maxNumOfSkills = Math.max(...arr);
  for(item in object) {
    if(object[item].skills.length == maxNumOfSkills) {
      return `The person with the most skills is ${item} with ${maxNumOfSkills} skills`;
    }    
  }
  return false;
}
//console.log(mostSkills(users));

// 2. Count logged in users. 
// Count users having greater than equal to 50 points from the following object.
function loggedInUsers(object) {
  let countLoggedInUsers = 0;
  let countGreaterThanBaseScore = 0;
  for(item in object) {
    if(object[item].isLoggedIn) countLoggedInUsers++;    
    if(object[item].points >= 50) countGreaterThanBaseScore++;
  }
  return `There are ${countLoggedInUsers} logged in users. And there are ${countGreaterThanBaseScore} users with a score greater or equal than 50 points`;
}
//console.log(loggedInUsers(users));

// 3. Find people who are MERN stack developer from the users object
function findMern(object) {
  let counter = 0;
  let namesArr = [];
  let mern;
  

  for(item in object) {
   
    console.log(mern);
    //console.log(object[item].skills) 
    /*if(object[item].skills == 'MongoDB'
        && object[item].skills == 'Express'
        && object[item].skills == 'React'
        && object[item].skills == 'Node'
    ) {
      console.log(1);
      counter++;
      namesArr.push(item);
    }*/
  }
  let withoutLast = object.name;
  //console.log(withoutLast);
  return `There are ${counter} people who are MERN stack, these are: ${withoutLast}`;
}
console.log(findMern(users));

// 4. Set your name in the users object without modifying the original users object
// use Object.freeze
let setMyOwnName = (object) => {
  let newObject = {...object};
  Object.freeze(object)
  newObject.Nicolas = {
    email: 'nicola1994n@gmail.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Node', 'MySQL'],
    age: 27,
    isLoggedIn: true,
    points: 20
  };
  return newObject;
}
// console.log(setMyOwnName(users));
// console.log(users);

// 5. Get all keys or properties of users object
let getkeys = (object) => {
  return Object.keys(object);
}
//console.log(getkeys(users));

// 6. Get all the values of users object
let getvalues = (object) => {
  return Object.values(object);
}
// console.log(getValues(users));

// 7. Use the countries object to print a country name, capital, populations and languages.
// Couldn't find the countries' object