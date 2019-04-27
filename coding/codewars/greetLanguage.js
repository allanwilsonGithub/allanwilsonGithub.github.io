function greet(language) {

    const greetingsObj = {
        english: 'Welcome',
        czech: 'Vitejte',
        danish: 'Velkomst',
        dutch: 'Welkom',
        estonian: 'Tere tulemast',
        finnish: 'Tervetuloa',
        flemish: 'Welgekomen',
        french: 'Bienvenue',
        german: 'Willkommen',
        irish: 'Failte',
        italian: 'Benvenuto',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Bienvenido',
        swedish: 'Valkommen',
        welsh: 'Croeso'
    }
    if (language in greetingsObj) {
        return(greetingsObj[language]);
    } else {
      return(greetingsObj['english']);
    }

}

console.log(greet('irish'));
console.log(greet('german'));
console.log(greet('Wibble'));

/*
store the languages as a database (eg an object). 
Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting
It should default to English if the language is not in the database, or in the event of an invalid input.
*/