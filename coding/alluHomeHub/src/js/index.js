import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import * as likesView from './views/likesView';
import { elements, renderLoader, clearLoader } from './views/base';
import Likes from './models/Likes';


/** Global state of the app
 * - Search object
 * - Current recipe object
 * - shopping list object
 * - liked recipes
 */

const state = {};
window.state = state;


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
    recipeView.renderRecipe(
        state.recipe,
        state.likes.isLiked(id)
      );
    } catch (err) {
        console.log(err);
        alert('Error processing recipe');
    }
    

  }
}


['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));


/**
 * LIST CONTROLLER
 */

const controlList = () => {
  // Create a new list IF there is none yet
  if (!state.list) state.list = new List();
  console.log(state.list);

  // Add each ingredient to the list and UI
  state.recipe.ingredients.forEach(el => {
      const item = state.list.addItem(el.count, el.unit, el.ingredient);
      listView.renderItem(item);
  });
}

// Handle delete and update list item events
elements.shopping.addEventListener('click', e => {
    const id = e.target.closest('.shopping__item').dataset.itemid;

    // Handle the delete button
    if (e.target.matches('.shopping__delete, .shopping__delete *')) {
      // Delete from state
      state.list.deleteItem(id);
      
      // Delete from UI
      listView.deleteItem(id);

    // Handle count update  
    } else if (e.target.matches('.shopping__count-value')){
        const val = parseFloat(e.target.value, 10);
        state.list.updateCount(id, val);
    }
})

/**
 * LIKE CONTROLLER
 */


const controlLike = () => {
    if (!state.likes) state.likes = new Likes();
      const currentID = state.recipe.id;

    // User has not yet liked current recipe
    if (!state.likes.isLiked(currentID)) {
      // Add like to the state
      const newLike = state.likes.addLike(
        currentID,
        state.recipe.title,
        state.recipe.author,
        state.recipe.img
      );
      // Toggle the like button
      likesView.toggleLikeBtn(true);

      // Add like to the UI list
      likesView.renderLike(newLike);

    // User has liked the current recipe
    } else {
      // Remove like from state
        state.likes.deleteLike(currentID);
      // Toggle the like button
        likesView.toggleLikeBtn(false);

      // Remove like from UI list
      likesView.deleteLike(currentID);
    }

    likesView.toggleLikeMenu(state.likes.getNumLikes());
};




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
    } else if (event.target.matches('.recipe__btn--add, .recipe__btn--add *')) {
        // Add ingredients to shopping list
        controlList();
    } else if (e.target.matches('.recipe__love, .recipe__love *')){
        // Like controller
        controlLike();
    }
});

window.l = new List();