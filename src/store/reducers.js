import C from './constants';
import { combineReducers } from 'redux';

export const config = (state = {}, action) =>
    (action.type === C.UPDATE_CONFIG_INFO) ? action.payload : state;

// export const configParams = (state = [], action) => {
//     switch (action.type) {
//         case C.UPDATE_CONFIGPARAMS:
//             return action.payload;
//         default:
//             return state;
//     }
// }

// export const userFetching = (state = false, action) => {

//     switch (action.type) {

//         case C.USER_DETAILS_FETCHING:
//             return true

//         case C.CANCEL_USER_DETAILS_FETCHING:
//             return false

//         default:
//             return state
//     }

// }

export default combineReducers({
    config,
    // userData: combineReducers({
    //     userFetching
    // })
})