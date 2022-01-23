import {useContext} from 'react';
import {Redirect, Route} from 'react-router-dom';

import {AuthenticationContext} from '../../authenticationContext';
import {routes} from '../../constants';

const CommonLayoutComponent = ({
  component: Component,
  ...restProps
}) =>{
  const user = useContext(AuthenticationContext)[0];
  if (!user) {
    return <Redirect to={routes.LOGIN}/>;
  }
  return (
    <Route {...restProps} render={(props) => {
      return (
        <Component {...props} {...restProps}/>
      );
    }}/>
  );
};

export default CommonLayoutComponent;
