//////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.


// My solution

class townElement {
    constructor(name, buildYear){
        this.name = name;
        this.buildYear = buildYear;
    }
}

class park extends townElement {
    /// Area is in square kms
    constructor(name, buildYear, treeNumber = 0, area = 10){
        super(name, buildYear);
        this.treeNumber = treeNumber;
        this.area = area;
    }
    
    treeDensity () {
        const denity = this.treeNumber / this.area;
        return density;
    }

}

class street extends townElement {
    constructor(name, buildYear, length = 0, sizeClass = 'normal'){
        super(name, buildYear);
        this.length = length;
        this.sizeClass = sizeClass;
    }

}

const DawsonPark = new park('Dawson Park', 1903, 100, 10);
const OrcharPark = new park('Orchar Park', 1892, 1030, 25);
const CastleGreen = new park('Castle Green', 1876, 1, 1000);
const ClaypottsRoad = new street('Claypotts Road', 1901, 1434, 'big');
const BalgillowRoad = new street('Balgillow Road',1852, 452, 'small');
const GrayStreet = new street('Gray Street',1898, 4522, 'huge');
const BrookStreet = new street('Brook Street', 1906, 4354);

let parks = [DawsonPark, OrcharPark, CastleGreen];
let streets = [ClaypottsRoad, BalgillowRoad, GrayStreet, BrookStreet];

const averageParkAge = function (){
    ages = 0;
    for (i of parks){
        year = new Date().getFullYear();
        age = year - i.buildYear;
        ages += age;
    aveAge = ages / parks.length;
    }
    return aveAge;
}

const totalStreetLength = function (){
    let streetLength = 0;
    for (i of streets){
        streetLength += i.length;
    }
    return streetLength;
}

const aveStreetLength = function (){
    return totalStreetLength() / streets.length;
}

console.log(`---- PARKS REPORT ----`);
// 1. Average park age
console.log(`The average age of our ${parks.length} parks is ${averageParkAge()} years`);

// 2. Tree Density DONE
for (i of parks){
    console.log(`${i.name}'s tree density is ${i.treeDensity()} trees per square km`);
}

// 3. Name of any park with more than 1000 trees
for (i of parks){
    if (i.treeNumber > 1000){
    console.log(`${i.name}' has more than 1000 trees (${i.treeNumber}) to be exact!`);
    }
}
console.log(`---- STREETS REPORT ----`);

// 4. Total and average length of streets.
console.log(`The total length of our ${streets.length} streets is ${totalStreetLength()} metres`);
console.log(`The average street length is ${aveStreetLength()} metres`);

// 5. Size classification of all streets. Tiny/small/normal/big/huge  unknown = normal
for (i of streets){
    console.log(`${i.name} is a ${i.sizeClass} street`);
}

*/

class Element {
    constructor (name, buildYear){
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element {
    constructor (name, buildYear, area, numTrees){
        super(name, buildYear);
        this.area = area;  //km2
        this.numTrees = numTrees;
    }

    treeDensity() {
        const density = this.numTrees / this.area;
        console.log(`Tree density for ${this.name} has a density value of ${density} square km.`);
    }
}

class Street extends Element{
    constructor (name, buildYear, length, size = 3){
        super (name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, built in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
    }
}

const allParks = [new Park('Green Park', 1987, 0.2, 215),
                  new Park('National Park', 1894, 2.9, 3541),
                  new Park('Oak Park', 1953, 0.4, 949)];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4),
                    new Street('Evergreen Street', 2008, 2.7, 2),
                    new Street('4th Street', 2015, 0.8),
                    new Street('Sunset Boulevard', 1982, 2.5, 5)];

function calc(arr){
    
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0);

    return [sum, sum / arr.length];

}

function reportParks(p){
    
    console.log('----- Parks Report -----');

    //Density
    p.forEach(el => el.treeDensity());

    //Ave age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, aveAge] = calc(ages);
    console.log(`Our ${p.length} parks have an average length age of ${aveAge} years.`);

    //Which park has more than 1000 trees
    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees.`)

}

function reportStreets(s){

    console.log('----- Streets Report -----');
    
    //Total and ave of town's streets
    const [totalLength, aveLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${aveLength} km.`);

    //Classify sizes
    s.forEach(el => el.classifyStreet());

}

reportParks(allParks);
reportStreets(allStreets);