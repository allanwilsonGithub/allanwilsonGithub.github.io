console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
var john = ['John','Smith',1990,'designer',false]

for (var i = 0; i < john.length; i++){
    if (typeof john[i] !== 'string'){
        continue;
    }
    console.log(john[i])
}

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')

var i = john.length;
while (i > 0){
    document.getElementById(i).innerHTML = (john[i]);
    i--;
}