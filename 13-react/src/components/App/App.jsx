import {Component, useContext} from 'react';

import {AuthenticationContext} from '../../authenticationContext';
import NavBarComponent from '../NavBarComponent/NavBarComponent';


export class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    this.setState({user: this.props.fetchUser()});
  }

  render() {
    return (
      <NavBarComponent user={this.state.user}/>
    );
  }
}

export function AppFunc() {
  return (
    <NavBarComponent user={useContext(AuthenticationContext)[0]}/>
  );
}
