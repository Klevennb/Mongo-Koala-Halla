import { combineReducers } from 'redux';


const koalaReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_KOALAS':
        console.log(action.payload);
        
            return action.payload;
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    koalaReducer,
});


export default rootReducer;