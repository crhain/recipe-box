// @nots-check
import { GET_RECIPE } from 'actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_RECIPE:
      return action.payload;
    default:
      return state;
  }
}
