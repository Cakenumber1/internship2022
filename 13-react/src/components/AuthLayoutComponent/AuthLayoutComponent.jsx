import {useSelector} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';

import {routes} from '../../constants';
import {userSelector} from '../../store/selectors';

const AuthLayoutComponent = ({
  component: Component,
  ...restProps
}) => {
  const user = useSelector(userSelector);
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
