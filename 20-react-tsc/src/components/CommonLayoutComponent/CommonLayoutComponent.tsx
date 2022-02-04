import {RouteComponentProps} from '@reach/router';
import {FunctionComponent} from 'react';
import {Redirect, Route} from 'react-router-dom';

import {routes} from '../../constants';
import {useSelector} from "react-redux";
import {UserRootState} from "../../store/user/interface";


const CommonLayoutComponent
  : FunctionComponent<{component: FunctionComponent}
  & RouteComponentProps<any>> = ({
    component: Component,
    ...restProps
  }) => {
    const user = useSelector((state: UserRootState) => state.user);
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
