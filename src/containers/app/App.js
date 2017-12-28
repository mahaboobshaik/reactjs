import { Component } from 'react';
import appTemplate from './appTemplate'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = '';
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount(){
    this.setState( {values: ["basha", "coconut", "orange"]} );
    this.setState({selected: 'coconut'});
  }

  handleChange(event, type){
    this.setState({selected: event.target.value});
  }

  render = appTemplate;
}

export default App;
