import {RouteComponentProps} from '@reach/router';
import {FunctionComponent} from 'react';
import {useSelector} from "react-redux";
import {Redirect, Route} from 'react-router-dom';

import {routes} from '../../constants';
import {UserRootState} from "../../store/user/interface";


const AuthLayoutComponent
  : FunctionComponent<{component: FunctionComponent}
  & RouteComponentProps<any>> = ({
    component: Component,
    ...restProps
  }) => {
    const user = useSelector((state: UserRootState) => state.user);
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
