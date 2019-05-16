import Search from './models/Search';
import * as searchView from './views/searchView';
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
    
    if (query){
      // 2) New search object and add it to state
        state.search = new Search(query);

      // 3) Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

      // 4) Search for recipes
        await state.search.getResults();
    
      // 5) Render results on UI
        clearLoader();
        searchView.renderResults(state.search.result);
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

    // Create new recipe object
    state.recipe = new Recipe(id);
    
    // Get recipe data
    await state.recipe.getRecipe();

    // Calculate servings and time
    state.recipe.calcTime();
    state.recipe.calcServings();

    // Render recipe
    console.log(state.recipe);
  }
}


['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));