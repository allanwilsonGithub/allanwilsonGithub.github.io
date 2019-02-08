// BUDGET CONTROLLER
var budgetController = (function() {

    var x = 23;

    var add = function(a) {
        return x + a;
    }

    return {
        publicTest: function(b) {
            return add(b);
        }
    }

})();


// UI CONTROLLER
var UIcontroller = (function(){

    //some code

})();



// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){

    var ctrlAddItem = function(){

        // 1. Get the field input data
        
        // 2. Add the item to the budget controller

        // 3. Add the item to the user interface

        // 4. Calculate the budget

        // 5. Display te budget on the UI
 
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);
    
    document.addEventListener('keypress', function(event){
        if (event.keyCode === 13 || event.which === 13){
            ctrlAddItem();
        };
    })
})(budgetController, UIcontroller);