import React, { Component } from 'react';
import { connect } from 'react-redux';

import {updateTestInfo} from '../../store/action'

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {};

    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter(){
    var counter = this.props.testInfo;
    this.props.updatingTestInfo(counter+1);
  }

  render(){
      return (
        <div>
          <span> home </span>
          <span>{this.props.testInfo}</span>
          <span onClick={this.incrementCounter}> Counter </span>
        </div>
      );
  }
}

const mapStateToProps = state => ({
  testInfo : state.testInfo
});

const mapDispatchToProps = dispatch =>({

  updatingTestInfo(data){
    dispatch(updateTestInfo(data));
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

