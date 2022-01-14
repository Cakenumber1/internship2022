import NavBarComponent from '../func/NavBarComponent';
import { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  componentDidMount() {
    this.setState({user: this.props.fetchUser()})
  }

  render() {
    return (
      <NavBarComponent user={this.state.user}/>
    );
  }
}

export default App;
