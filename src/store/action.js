import C from './constants';

export function updateTestFlag(status){
    if(status)
        return { type: C.SET_TEST_FLAG }
    else
        return { type: C.UNSET_TEST_FLAG }
}

export function updateTestInfo(status){
    return {
        type: C.UPDATE_TEST_INFO,
        payload: status
    }
}
