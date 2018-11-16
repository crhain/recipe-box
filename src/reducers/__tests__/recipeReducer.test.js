import recipeReducer from "reducers/recipeReducer";
import { GET_RECIPE } from "actions/types";
import Model from "model";
import seed from "model/seed.js";

const beef = seed[0];


describe("recipeReducer", () => {
    
    // it("Should return initial state of null when no action type passed and inital state not set", () => {
    //     expect(recipeReducer(undefined, {type: null, payload: null})).toEqual(null);
    // });
    Model.toggleTestMode(true);

    describe("GET_RECIPE", () => {
                   
        it("Should return the correct recipe when passed id for recipe in action", () => {        
            expect( recipeReducer( undefined, { type: GET_RECIPE, id: "beefstrogonoff" } ) ).toMatchObject(beef);
        });

        // it("should return null if id not found", () => {
        //     expect( recipeReducer( undefined, { type: GET_RECIPE, id: "beefstrogonoffff" } ) ).toEqual(null);
        // });

    });
            
});