import React, { Component } from 'react';
import './index.css';

import Routes from './routes';
import storeFactory from './store';
import { Provider } from 'react-redux';
import storeProvider from './store/storeProvider';

class App extends Component {

    render() {

        storeProvider.init(storeFactory);
        const store = storeProvider.getStore();
        const saveState = () =>
            localStorage["redux-store"] = JSON.stringify(store.getState());
        store.subscribe(saveState);

        return ( 
            <Provider store = { store } >
                <Routes/>
            </Provider>
        );
    }
}

export default App;