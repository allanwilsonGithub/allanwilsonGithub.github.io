Javascript notes:

// Function constructor
function SmithPerson(firstName, yearOfBirth, lastName, nationality){
    this.firstName = firstName;
    this.lastname = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
console.log(john);

// Ternary operator
// if ___ ? then ___ : else
lastName === undefined ? lastName = 'Smith' : lastName = lastName;

function getFee(isMember) {
    return (isMember ? "$2.00" : "$10.00");
  }
  
  console.log(getFee(true));
  // expected output: "$2.00"
  
  console.log(getFee(false));
  // expected output: "$10.00"

  
//Arrays:
.map       returns a new array with each value replaced by the result of your function
.splice    deletes x items from a certain point
.indexOf   gives the location (index) in the array.


parseInt()   converts string to an integer.

//ES6:

const a = 23     // Block scope. Cannot be reassigned. Constant
let b = 34       // Block scope. Can be reassigned

// +++ ES6 Arrays  +++ //
// To create and array from some list...
const boxesArr6 = Array.from(boxes);

//  +++ ES6 Loops  +++ //
// of
for (const cur of boxesArr6){
    if (cur.className.includes('blue')){
        continue;
    } else {
        cur.textContent = 'woohoo';
    }
}

//Arrow Functions



/// +++  Spread operator  +++ //
// expands the array into it's components
const ages = [23, 45, 34, 23]
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily);


// +++  Rest parameters  +++ //
//used in function declaration to accept an arbitary number of arguments:
function isFullAge6(...years){                       // Years becomes an array of the arguments
    years.forEach(cur => console.log(2016 - cur)
    >= 18);
}
isFullAge6(1990,1999,1965, 2016, 1987);

function listTownsInScotland(...towns){
    towns.forEach(cur => console.log(cur));
}
listTownsInScotland('Edinburgh','Glasgow');


// +++  ES6 Destructuring  +++ //
const [name_6, age_6] = ['John',26];
console.log(name_6);
console.log(age_6);

const obj = {
    firstName_6: 'John',
    lastName_6: 'Smith'

}
const{firstName_6, lastName_6} = obj;


//  +++ ES6 Template Literals  +++ //
// Variable replacement in strings//Arrow Functions
let firstName = 'John';
let lastName = 'Smith';
console.log(`This is ${firstName} //Arrow//  +++ ES6 Loops  +++ //Functions{lastName}`);

// +++  ES6 Default parameters  ++//Arrow//  +++ ES6 Loops  +++ //Functions //
function car(colour, year, wheels //Arrow//  +++ ES6 Loops  +++ //Functions 4){
    
    this.colour = colour;// Ternar//Arrow Functions operator
    this.year = year;
    this.wheels = wheels;// Ternar//A//  +++ ES6 Loops  +++ //rrow Functions operator
}//  +++ ES6 Loops  +++ //
//  +++ ES6 Loops  +++ //
let skoda = new car('Gree// Ternary o//  +++ ES6 Loops  +++ //perator

// +++  ES6 Maps  +++ //
// ES6 builtin type
const question = new Map();
question.set('question', 'That is the official name of the latest JS version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');//Arrow Functions
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer :P');
question.set(false, 'Wrong, please try again!');

console.log(question.get('question'));
console.log(question.size);
if (question.has(4)){
    question.delete(4);// +++  ES6 Destructuring  +++ //
}
question.clear();   // Delete all content

for (let [key, value] of question.entries()){
    if (typeof(key) === 'number'){
        console.log(`Answer= ${key}: ${value}`);
    }
}


// +++  ES6 Classes +++ //

/*
//Arrays:
  .map       returns a new array with each value replaced by the result of your function
  .splice    deletes x items from a certain point
  .indexOf   gives the location (index) in the array.
  .reduce    loops through all elements adding them all together

//RANDOM
parseInt()   converts string to an integer.

// Callback functions
// ES6 Destructuring
// ES6 Template Literals
// ES6 Default parameters
// ES6 Maps
// ES6 builtin type
// Function Constructor
// ES6  Ternary operator
// ES6 Classes

class element {
    constructor (name, buildYear){
        this.name = name;
        this.buildYear = buildYear;
    }
}

// ES6 Superclasses

class Park extends Element {
    constructor (name, buildYear, area, numTrees){
        super(name, buildYear);
        this.area = area;  //km2
        this.numTrees = numTrees;
    }
// ES6 Subclasses
// ES6 Rest parameters
// Spread operator
// Arrow Functions
// ES6 Loops
// ES6 Arrays

*/