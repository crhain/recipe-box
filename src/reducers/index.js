import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import RecipeListReducer from './recipeListReducer';
import RecipeReducer from "./recipeReducer";


const rootReducer = combineReducers({
  recipes: RecipeListReducer,
  recipe: RecipeReducer,
  form: formReducer
});

export default rootReducer;