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

    DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }
    
    return {
        getinput: function(){
            return {
                type: document.querySelector(DOMstrings.inputType).value,   // will be either inc or exp
                discription: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        
        getDOMstrings: function(){
            return DOMstrings;
        }
    };

})();



// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){

    var DOM = UICtrl.getDOMstrings();
    
    var ctrlAddItem = function(){

        // 1. Get the field input data
        var input = UICtrl.getinput();
        console.log(input);
        
        // 2. Add the item to the budget controller

        // 3. Add the item to the user interface

        // 4. Calculate the budget

        // 5. Display te budget on the UI
 
    }

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    
    document.addEventListener('keypress', function(event){
        if (event.keyCode === 13 || event.which === 13){
            ctrlAddItem();
        };
    })
})(budgetController, UIcontroller);