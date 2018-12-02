var john = ['John','Smith',1990,'designer',false]

var i = 0;
while (i < john.length){
    document.getElementById(i).innerHTML = (john[i]);
    i++;
}