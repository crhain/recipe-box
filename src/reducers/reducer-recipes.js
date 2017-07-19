import types from '../constants/';

export const initialState = {
    recipes: []
};

export const reducer = (state = initialState, action) => {
    return [                
                {title: 'Beef Strogonoff'},
                {title: 'Lasagna'},
                {title: 'Spanish Rice'}
            ];
        
};

export default reducer;