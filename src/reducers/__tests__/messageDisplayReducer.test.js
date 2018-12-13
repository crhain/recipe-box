import messageDisplayReducer from "reducers/messageDisplayReducer";
import { SET_MESSAGE_DISPLAY } from "actions/types";

const mockModel = {
    setMessageDisplay: (message) => {
        return {actionType: "SET_MESSAGE_DISPLAY"}
    }
}

describe("messageDisplayReducer", () => {    
    it("Should return initial state of an empty string when no action type passed and inital state not set", () => {
        expect(messageDisplayReducer(undefined, {type: null, payload: null})).toEqual("");
    });
    
    it("Should return 'message' when called with a message", () => {
        let message = "Testing... testing... 1, 2, 3.";
        let action = { type: SET_MESSAGE_DISPLAY, payload: { message: message } };
        expect(messageDisplayReducer(undefined,  action) ).toEqual(message);
    });
});