import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ContactPage from './ContactPage';
import reducers from './reducers';
import { createStore } from 'redux';

// formReducer is now passed to the store
const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <ContactPage />
    </Provider>,
    document.getElementById('root')
);
