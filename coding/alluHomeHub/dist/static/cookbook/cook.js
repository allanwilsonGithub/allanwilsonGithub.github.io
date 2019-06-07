// Populate dropdown lists

function appendMain(recipe){
    
    var x = document.createElement("A");
    var t = document.createTextNode(recipe);
    x.appendChild(t); 
    document.getElementById("main-course-list").appendChild(x);
    
}

function appendSweet(recipe){
    
    var x = document.createElement("A");
    var t = document.createTextNode(recipe);
    x.appendChild(t); 
    document.getElementById("sweet-list").appendChild(x);
    
}

var mainRecipes = ['Pippuripihvi','Kinkku Kiusaus','Indian Sweet Potato and Dahl Pie','Swedish Meatballs',
                   'Satay Chicken','Asian Noodle Salad','Pytti Pannu','Bataatti Porkkana Keitto','Tofu Wok',
                   'Pork and Sweet Potato Wedges','Nasi Goreng','Thai Curry','Lentil Soup','Makaroni Laatikko',
                   'Spag Bol','Spiced Lamb and Coconut Pilaf','Carbonara','Steamed Salmon'];

var sweetRecipes = ['Cupcakes','Pannukakku','Mustikka Pirakka','Rahka','Cake of the Day','Porkanakakku'];

for (i = 0; i < mainRecipes.length; i++){
    appendMain(mainRecipes[i]);
}

for (i = 0; i < sweetRecipes.length; i++){
    appendSweet(sweetRecipes[i]);
}

//TODO: format the dropdown lists with <br>