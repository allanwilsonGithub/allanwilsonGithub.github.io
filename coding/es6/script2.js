// Proof that I know this without googling...

// Function
function add2numbers(a,b){
    console.log(a+b);
}
add2numbers(3,6);

// For loop
const names = ['Allan','Paula','Sampo','Seela'];
const birthYears = [1974,1974,2011,2014];
for (i = 0; i < names.length; i++){
    console.table(names[i], birthYears[i]);
}

// Template literals
let name = 'Sampo';
const age = 7;

const n = sampoAge = `My son ${name} is ${age} years old.`;
console.log(n.startsWith('M'));
console.log(n.endsWith('ld.'));
console.log(n.includes('year'));
console.log(`${name} `.repeat(5));

// Arrow functions