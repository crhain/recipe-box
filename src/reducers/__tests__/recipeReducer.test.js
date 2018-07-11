import recipeReducer from "reducers/recipeReducer";
import { GET_RECIPE } from "actions/types";
import Model from "model";

const beef = {
    id: "beefstrogonoff", 
    title: "Beef Strogonoff", 
    ingredients: [
        "1 1/2 pounds beef sirloin steak", 
        "8 ounces fresh mushrooms",
        "2 medium onions, thinly sliced",
        "1 garlic clove, finely chopped",
        "1/2 cup butter",
        "1 1/2 cups Progresso, beef flavored broth",
        "1/2 teaspoon salt",
        "1 teaspoon Worcestshire sauce",
        "1/4 cup Gold Medal all-purpose flour",
        "1 1/2 cups sour cream",
        "3 cups hot cooked egg noodles"
    ]
};


describe("recipeReducer", () => {
    
    // it("Should return initial state of null when no action type passed and inital state not set", () => {
    //     expect(recipeReducer(undefined, {type: null, payload: null})).toEqual(null);
    // });
    Model.toggleTestMode();

    describe("GET_RECIPE", () => {
                   
        it("Should return the correct recipe when passed id for recipe in action", () => {        
            expect( recipeReducer( undefined, { type: GET_RECIPE, id: "beefstrogonoff" } ) ).toMatchObject(beef);
        });

        // it("should return null if id not found", () => {
        //     expect( recipeReducer( undefined, { type: GET_RECIPE, id: "beefstrogonoffff" } ) ).toEqual(null);
        // });

    });
            
});