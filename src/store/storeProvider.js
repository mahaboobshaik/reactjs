import sampleData from './initialState';

var store = undefined;

export default {
    init(configureStore){
        store = configureStore(sampleData);
    },
    getStore(){
        return store;
    },
    getCurrentState(){
        return store.getState();
    },
    getApi(){
        var currentState = this.getCurrentState();
        return currentState.config.api;
    }
};