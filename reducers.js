import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    // Tell the store how to handle actions coming from the form components
    // The key used to pass the redux-form reducer should be named form
    form: formReducer
});

// formReducer is now passed to the store
const store = createStore(rootReducer);

export default store;
