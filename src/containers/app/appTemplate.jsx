import React from 'react';

import Header from '../header/header';
import Routing from '../routing/routing';
// import Select from '../../elements/select';

const appTempalte = function() {

    return (
          <div>
            <Header />
            <Routing />
          </div>
            // <div className="App">
            //   <header className="App-header">
            //     <img src={require('../../images/logo.svg')} className="App-logo" alt="logo" />
            //     <h1 className="App-title" onClick={this.test}>Welcome to React</h1>
            //     <Select value={this.state.selected} onSelectChange={(e) => this.handleChange(e, 'test')} optionsList={this.state.values} />
            //     <Select value={this.state.selected} onSelectChange={(e) => this.handleChange(e, 'test1')} optionsList={this.state.values} />
            //   </header>
            //   <p className="App-intro">
            //     To get started, edit <code>src/App.js</code> and save to reload.
            //   </p>
            // </div>
          );
};

export default appTempalte;