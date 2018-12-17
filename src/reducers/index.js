import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import RecipeListReducer from 'reducers/recipeListReducer';
import RecipeReducer from "reducers/recipeReducer";
import ModalReducer from "reducers/modalReducer";
import { reducer as flashReducer } from 'redux-flash';
import MessageDisplayReducer from "reducers/messageDisplayReducer";


const rootReducer = combineReducers({
  recipes: RecipeListReducer,
  selectedRecipe: RecipeReducer,
  recipeToDelete: ModalReducer,
  flash: flashReducer,
  form: formReducer
});

export default rootReducer;