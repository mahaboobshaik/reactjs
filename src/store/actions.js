import C from './constants';

export function updateConfig(configInfo) {
    return {
        type: C.UPDATE_CONFIG_INFO,
        payload: configInfo
    }
}

// export function updateConfigurationApi(status){
//     if(status)
//         return { type: C.SET_CONFIGURATION_API }
//     else
//         return { type: C.UNSET_CONFIGURATION_API }
// }