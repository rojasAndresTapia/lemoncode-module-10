const peopleArrObject = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    age: 50,
    eyeColor: 'blue',
  },
  {
    firstName: 'Mr',
    lastName: 'Smith',
    age: 40,
    eyeColor: 'brown',
  },
];

const peopleArr = ['Juan', 'Pedro', 'Diego', 'Maria', 'Lucia', 'Paula'];

const numArr = [4, 7, 2, 9, 4, 6, 9, 1, 3];

const person = {
  id: 1,
  firstName: 'John',
  lastName: 'Doe',
  age: 50,
  eyeColor: 'blue',
};

const wordsArr = ["apple", "car", "window", "arm", "pencil", "banana", "face", "leg"];
const wordsArr2 = ["red", "rumble", "round", "risk", "robot"];

// 1 -   destructuring
const hasId = (object) => {
  const { id } = object;

  return id ? true : false;
};

console.log(hasId(person));

// 2 -   destructuring & rest

const head = (arr) => {
  const [firstElement, ...rest] = arr;
  return firstElement;
};

console.log(head(peopleArr));

// 3 -   destructuring & rest

const tail = (arr) => {
  const [firstElement, ...rest] = arr;
  return rest;
};

console.log(tail(peopleArr));

// 4 - destructuring & rest

const swapFirstToLast = (arr) => {
  const [firstElement, ...rest] = arr;
  rest.push(firstElement);
  return rest;
};

console.log(swapFirstToLast(peopleArr));

// 5 - destructuring & rest

const excludeId = (obj) => {
  const { id, ...rest } = obj;
  return rest;
};

console.log(excludeId(person));

// 6 - filter

const wordsStartingWithA = (array) => {
  const newArr = array.filter(arr => arr[0] === "a");
  return newArr;
};

console.log(wordsStartingWithA(wordsArr));

// 7 - Join

const concat = (arr) => {
  
  const newArr = arr.join(" | ");
  return newArr;
};

console.log(concat(peopleArr));

// 7 - map

const multArray = (array, x) => {
  
  const newArr = array.map(arr => arr * x);
  return newArr;
};

console.log(multArray(numArr, 2));

// 8 - reduce

const calcMult = (array) => {
  
  const result = array.reduce((multNum, arr) => multNum * arr, 1);
  return result;
};

console.log(calcMult(numArr));

// EXTRAS

// 1 spread

const swapFirstSecond = (array) => {

   let newArray = [...array];
   newArray[0] = array[1];
   newArray[1] = array[0];

  return newArray;
};

console.log(swapFirstSecond(wordsArr));

// 2 firstEqual

const firstEqual = (array, a) => {
const {firstLetter, ...rest} = array
const isFirstEqual = array.map(arr => arr[firstLetter] === a);
return isFirstEqual

};

console.log(firstEqual(wordsArr2, "a"));

