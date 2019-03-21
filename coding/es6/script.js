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
//1
const ages6 = years.map(el => 2016 - el);
console.table({ages6});

//2
const ages6a = years.map((el, index) => `Age element ${index + 1}: ${2019 - el}.`);
console.table({ages6a});

//3
ages6b = years.map((el, index) => {
    const now = new
    Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1};
    ${age}.`
});
console.table({ages6b});

/////// Arrow functions 2
// ES5
/*
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function(){

        var self = this;
        document.querySelector('.green').addEventListener('click', function(){
            var str = 'This is box number ' + self.position + ' and it is ' +  self.color;
            alert(str);
        });
    }
}
box5.clickMe();
*/

// ES6  preserves the THIS keyword
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function(){

        document.querySelector('.green').addEventListener('click', () => {
            var str = `This is box number ${this.position} and it is ${this.color}`;
            alert(str);
        });
    }
}
box6.clickMe();

//ES5
function Person(name){
    this.name = name;
}

Person.prototype.myFriends5 = function(friends){

    var arr = friends.map(function(el){
        return this.name + ' is friends with ' + el;        
    }.bind(this));

    console.log(arr);

}

var friends = ['Rod','Jane','Freddy'];

let Bungle = new Person('Bungle');
console.log(Bungle.myFriends5(friends));


//ES6
function Person(name){
    this.name = name;
}

Person.prototype.myFriends6 = function(friends){

    var arr = friends.map(el =>
    `${this.name} is friends with ${el}`);

    console.log(arr);

}

var friends = ['Rod','Jane','Freddy'];

let George = new Person('George');
console.log(George.myFriends6(friends));

//////////////////////////////////////////////////
// Destructuring

//ES5
var john = ['John', 26];
var name_5 = john[0];
var age_5 = john[1];

//ES6
const [name_6, age_6] = ['John',26];
console.log(name_6);
console.log(age_6);

const obj = {
    firstName_6: 'John',
    lastName_6: 'Smith'

}
const{firstName_6, lastName_6} = obj;








































