import { SET_MESSAGE_DISPLAY } from "actions/types";

export default (state = "", action) => {
    let newState = state;
    switch (action.type) {
        case SET_MESSAGE_DISPLAY:            
            return action.payload.message;     
        default:
            return newState;
    }

}