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

// ES5 IIFE
(function(){
    var d = 4;
})();

console.log(d);