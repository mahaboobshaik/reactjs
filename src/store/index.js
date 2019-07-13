import appReducer from './reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

const consoleMessages = store => next => action => {
    
    let result;
    
    /*console.groupCollapsed(`dispatching action => ${action.type}`)
    
    console.log(`

        Data: ${JSON.stringify(action)}

    `)
    
    let { userData, errors } = store.getState()

    console.log(`

		user Data: ${JSON.stringify(userData)}
		errors: ${errors.length}

	`)
    
    console.groupEnd()*/

    result = next(action);
    return result;
}

export default (initialState = {}) => {
    return applyMiddleware(thunk, consoleMessages)(createStore)(appReducer, initialState);
}