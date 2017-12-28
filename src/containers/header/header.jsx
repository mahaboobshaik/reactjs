import { Component } from 'react';
import headerTemplate from './headerTemplate'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = '';
  }

  componentWillMount(){
  }

  render = headerTemplate;
}

export default Header;
