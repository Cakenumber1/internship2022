import NavBarComponent from '../NavBarComponent/NavBarComponent';
import { Component, useEffect, useState } from 'react';

export class AppClass extends Component {
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

export function AppFunc({fetchUser}) {
  const [user, setUser] = useState('')
  useEffect(() => {
    setUser(fetchUser())
  }, [fetchUser]) // or []

  return (
    <NavBarComponent user={user}/>
  );
}
