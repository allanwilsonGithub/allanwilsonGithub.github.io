function removeChar(str){
    str = str.substring(1);
    return str.slice(0, -1);
 };

 console.log(removeChar("abcdefg"));