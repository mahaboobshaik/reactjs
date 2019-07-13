import qs from 'qs';
import axios from 'axios';
import storeProvider from '../../store/storeProvider';

var authService = {

    checkLogin: function(api, dev, token){
        const config = storeProvider.getAppConfig();
        
        return axios({
            cancelToken: token,
            cancelPreviousRequest: false,
            method: 'post',
            url: api,
            data: qs.stringify({
                call: 'Auth',
                type: 'validate_credentials',
                source: config.source
            })
        }).then(function(response) {
            var apiResponse = response.data;
            return apiResponse;
        }).catch(function(res) {
            console.log(res);
            console.log('An error occurred in check login');
        });
    }
    
}

export default authService;