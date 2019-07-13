import React, { Component } from 'react'
import loading_icon from '../../images/home/loading.gif';
import './defaultLoading.css';
class DefaultLoading extends Component {
    render() {
      return <img src={loading_icon} className="initial_loading" alt='' />
    }
}

export default DefaultLoading;