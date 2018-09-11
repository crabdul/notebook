import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ContactPage from './ContactPage';
import configureStore from './configureStore';

// formReducer is now passed to the store
const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <ContactPage />
    </Provider>,
    document.getElementById('root')
);
