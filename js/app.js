

// Data Module
const budgetController = ( function() {


})();



// UI CONTROLLER
const UIController = ( function() {

  const DOMStrings = {
    inputType: '.add__type',
    description: '.add__description',
    valued: '.add__value'
  }

  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMStrings.inputType).value, // will be either inc or exp
        description: document.querySelector(DOMStrings.description).value,
        value: document.querySelector(DOMStrings.valued).value,
      }
    }, 

    getDomString: () => {
      return DOMStrings;
    }

  };

})();


// GLOBAL APP CONTROLLER
const controller = ( function(budgetCtrl, UICtrl) {

  const ctrlAddItem = function() {

      // 1. Get the field input data
      const input = UICtrl.getInput();
      console.log(input);
  
      // 2. Add the item to the budget controller
  
      // 3. Add the item to the UI
  
      // 4. Calculate the budget
  
      // 5. Display the budget on this UI 
  }

  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

  // handeling enter keypress
  document.addEventListener('keypress', function(e) {
    if (e.keyCode === 13 || e.which === 13) {
       ctrlAddItem(); 
    }
  });

})(budgetController, UIController); 