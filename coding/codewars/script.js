function noSpace(x){
    y = x.replace(/ /g, '');
    return y;
}

console.log(noSpace('abc def    gh   i   j'));