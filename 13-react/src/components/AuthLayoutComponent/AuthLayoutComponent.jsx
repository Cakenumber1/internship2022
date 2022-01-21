import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { routes } from '../../constants'

const AuthLayoutComponent = ({
     component: Component,
     isAuthenticated,
     ...restProps
   }) => {
    if (isAuthenticated) {
      return <Redirect to={routes.FEED}/>
    }
    return (
      <Route {...restProps} render={props => {
        return (
          <Component {...props} {...restProps}/>
        );
      }}/>
    )
  }

export default AuthLayoutComponent
