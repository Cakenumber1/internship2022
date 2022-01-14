import NavBarComponent from '../func/NavBarComponent';
import { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {user: props.func()}
  }

  render() {
    return (
      <>
        <NavBarComponent user={this.state.user}/>
      </>
    );
  }
}

export default App;
