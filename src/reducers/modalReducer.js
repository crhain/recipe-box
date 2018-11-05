import { SET_RECIPE_TO_DELETE } from "actions/types";

export default (state = null, action) => {
    switch (action.type) {
        case SET_RECIPE_TO_DELETE:                                                            
            return action.id;     
        default:
            return state;
    }

}
