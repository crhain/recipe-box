import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import RecipeListReducer from 'reducers/recipeListReducer';
import RecipeReducer from "reducers/recipeReducer";


const rootReducer = combineReducers({
  recipes: RecipeListReducer,
  selectedRecipe: RecipeReducer,
  form: formReducer
});

export default rootReducer;