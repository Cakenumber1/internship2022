import {useContext} from 'react';
import {Redirect, Route} from 'react-router-dom';

import {routes} from '../../constants';
import {AuthenticationContext} from '../../context/authenticationContext';

const AuthLayoutComponent = ({
  component: Component,
  ...restProps
}) => {
  const user = useContext(AuthenticationContext)[0];
  if (user) {
    return <Redirect to={routes.FEED}/>;
  }
  return (
    <Route {...restProps} render={(props) => {
      return (
        <Component {...props} {...restProps}/>
      );
    }}/>
  );
};

export default AuthLayoutComponent;
