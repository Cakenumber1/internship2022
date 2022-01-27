import {useContext} from 'react';
import {Redirect, Route} from 'react-router-dom';

import {routes} from '../../constants';
import {AuthenticationContext} from '../../context/authenticationContext';

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
