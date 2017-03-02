import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AppReducers from './reducers'
import App from './components/App';

let store = createStore(AppReducers);
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);