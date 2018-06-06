import C from './constants';
import { combineReducers } from 'redux';

export const testInfo = (state = {}, action) =>
    (action.type === C.UPDATE_TEST_INFO) ? action.payload : state

export const testFlag = (state = false, action) => {

    switch (action.type) {

        case C.SET_TEST_FLAG:
            return true

        case C.UNSET_TEST_FLAG:
            return false

        default:
            return state
    }

}


export default combineReducers({
    testFlag,
    testInfo
})