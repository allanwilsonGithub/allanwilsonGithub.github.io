// Lecture: let and const

// ES5
var name5 = "Jane Smith";
var age5 = 23;
name5 = "Jane Miller";
console.log(name5);

// ES6
const name6 = "Samantha Fox";
let age6 = 22;
age6 = 25;
console.log(age6);

// ES5
function driversLicense5(passedTest){
    if (passedTest){
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
        console.log(firstName + ', born in ' + yearOfBirth + ' is now allowed to drive a car.');
}

driversLicense5(true);

//ES6
function driversLicense6(passedTest){
    
    let firstName;
    const yearOfBirth = 1990;

    if (passedTest){
        firstName = 'John';
    }
        console.log(firstName + ', born in ' + yearOfBirth + ' is now allowed to drive a car.');

}

driversLicense6(true);

/////////////////////////
// Blocks and IIFEs

//ES6 IIFE
{
    const a = 1;
    let b = 2;
    var c = 3;    // This works because var is not block scoped
}

//console.log(a + b);

/* ES5 IIFE
(function(){
    var d = 4;
})();


console.log(d);
*/

//////////////////////////////////
// Strings ES6

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year){
    return 2019 - year;
}
console.log(calcAge(yearOfBirth));

//ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born blah blah...');

//ES6 Template literals:
console.log(`This is ${firstName} ${lastName}`);

///////////// Arrow functions
const years = [1990, 1965, 1982, 1937];

//ES5
var ages5 = years.map(function(el){
    return 2016 - el;
})
console.table({ages5});

//ES6
const ages6 = years.map(el => 2016 - el);
console.table({ages6});

const ages6a = years.map((el, index) => `Age element ${index + 1}: ${2019 - el}.`);
console.table({ages6a});

ages6b = years.map((el, index) => {
    const now = new
    Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1};
    ${age}.`
});
console.table({ages6b});
















