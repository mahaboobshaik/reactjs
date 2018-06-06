import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/app/App';
import registerServiceWorker from './registerServiceWorker';

import sampleData from './store/initialState';
import storeFactory from './store';
import { Provider } from 'react-redux';

const initialState = sampleData;
const saveState = () =>
    localStorage["redux-store"] = JSON.stringify(store.getState());

const store = storeFactory(initialState)
store.subscribe(saveState)

ReactDOM.render(
    <Provider store = { store } >
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
