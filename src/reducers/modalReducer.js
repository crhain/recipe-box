// @nots-check
import { SET_RECIPE_TO_DELETE } from 'actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case SET_RECIPE_TO_DELETE:
      return action.payload.id;
    default:
      return state;
  }
}
