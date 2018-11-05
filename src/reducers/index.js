import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import RecipeListReducer from 'reducers/recipeListReducer';
import RecipeReducer from "reducers/recipeReducer";
import ModalReducer from "reducers/modalReducer";


const rootReducer = combineReducers({
  recipes: RecipeListReducer,
  selectedRecipe: RecipeReducer,
  recipeToDelete: ModalReducer,
  form: formReducer
});

export default rootReducer;