import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    // Tell the store how to handle actions coming from the form components
    // The key used to pass the redux-form reducer should be named form
    form: formReducer
});

export default rootReducer;
