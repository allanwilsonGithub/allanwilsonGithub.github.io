import Search from './models/Search';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import { elements, renderLoader, clearLoader } from './views/base';
import Recipe from './models/Recipe';

/** Global state of the app
 * - Search object
 * - Current recipe object
 * - shopping list object
 * - liked recipes
 */

const state = {};


const controlSearch = async () => {
      // 1) Get query from the view
        const query = searchView.getInput();
       
      if (query) {
      // 2) New search object and add it to state
        state.search = new Search(query);

      // 3) Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);


      try {
 
      // 4) Search for recipes
      await state.search.getResults();
    
      // 5) Render results on UI
        clearLoader();
        searchView.renderResults(state.search.result);

      } catch (err) {
        alert('Something went wrong with the search...');
        clearLoader();

      }

    }
}

elements.searchForm.addEventListener('submit',e => {
    e.preventDefault();
    controlSearch();
    }
)

elements.searchResPages.addEventListener('click', e => {
  const btn = e.target.closest('.btn-inline');  
  if (btn){
    searchView.clearResults();
    const goToPage = parseInt(btn.dataset.goto, 10);
    searchView.renderResults(state.search.result, goToPage);
  }
});

/**
 * RECIPE CONTROLLER
 */
const controlRecipe = async () => {
  // Get ID from url
  const id = window.location.hash.replace('#','');

  if (id){
    // Prepare the UI for changes
    recipeView.clearRecipe();
    renderLoader(elements.recipe)

    // Highlight selected search item
    if (state.search) searchView.highlightSelected(id);

    // Create new recipe object
    state.recipe = new Recipe(id);

    try {

    // Get recipe data and parse ingredients
    await state.recipe.getRecipe();
    state.recipe.parseIngredients();

    // Calculate servings and time
    state.recipe.calcTime();
    state.recipe.calcServings();

    // Render recipe
    clearLoader();
    recipeView.renderRecipe(state.recipe);

    } catch (err) {
        alert('Error processing recipe');
    }
    

  }
}


['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));

// Handling recipe button clicks
elements.recipe.addEventListener('click', e => {
    if (event.target.matches('.btn-decrease, .btn-decrease *')){
        // Decrease button is clicked
        if (state.recipe.servings > 1) {
        state.recipe.updateServings('dec');
        recipeView.updateServingsIngredients(state.recipe);
        }
    } else if (event.target.matches('.btn-increase, .btn-increase *')){
        // Increase button is clicked
        state.recipe.updateServings('inc');
        recipeView.updateServingsIngredients(state.recipe);
    }
    console.log(state.recipe);
});