import React, {Component} from 'react'
import axios from 'axios';
// import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from "./components/containers/header/";
import Home from "./components/tools/home";

import authService from './components/services/authService';

import { updateConfig } from './store/actions';

class Routes extends Component{

    constructor(props){
        super(props);
        this.state = {configParamsUpdated: false}
        this.validateLogin = this.validateLogin.bind(this);
    }

    componentWillMount(){
        console.log("Routes container");

        var thisView = this;
        axios.get('configure.json')
        .then(function(res) {
            
            var configure = res.data;
            thisView.props.updatingConfig(configure);
            thisView.validateLogin(configure["api"], configure["dev"]);

        }).catch(function(res) {
            console.log(res);
            console.log('An error occurred configuration');
        });
    }

    componentDidMount(){
        
    }

    validateLogin(api, dev){
        
        if(!api){
            api = this.props.config.api;
        }

        if(dev){
            // thisView.props.updatingIsAuthenticatedFlag(true);
        } else {
        
            if(this.loginToken)
                this.loginToken.cancel();
            this.loginToken = axios.CancelToken.source();
            
            axios.all([authService.checkLogin(api, dev, this.loginToken.token)])
                .then(function(res) {
                    
                }).catch(function(res) {
                    console.log(res);
                    console.log('An error occurred auth service');
                });
        }
        
    }

    render(){
        return (
            
            this.props.userInfo && this.props.userInfo.username && this.props.userInfo.username.length > 0 && this.props.userInfo.status === "failed" ?
            <div className="no_access">
                <Router>
                    <div className="no_access_header">
                        <Header hide_option={true}/>
                    </div>
                </Router>
                <div className="no_access_container">
                    <div className="no_access_message">
                        <p>{this.props.userInfo.message}<br/>
                        Contact <a href="mailto:info@test.com?Subject=Access" target="_top">info@test.com</a>
                        </p>
                    </div>
                </div>
            </div> :
            
            (
                this.props.config.under_maintenance ? 
                <div className="maintenance">
                    <Router>
                        <div className="maintenance_header">
                            <Header hide_option={true}/>
                        </div>
                    </Router>
                    <div className="maintenance_container">
                        <h1>We’ll be back soon!</h1>
                    </div>
                </div>
                :
                <Router>
                    {
                        // this.state.configParamsUpdated &&
                        <Home />
                        // <Switch>
                        //     <Route path={"/search"} render={(props) => {  return <Tool1 {...props} />}}/>
                        //     <Route path={"/search1"} render={(props) => {  return <Tool2 {...props} />}}/>
                        //     <Redirect to='/search' />
                        // </Switch>
                    }
                </Router>
            )
        )
    }
}

const mapStateToProps = state => ({
    config: state.config
});
  
const mapDispatchToProps = dispatch =>({
    updatingConfig(data){
        dispatch(updateConfig(data));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Routes);