import { GET_RECIPE } from "actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case GET_RECIPE:
      return action.payload;
    default:
      return state;
  }
};
