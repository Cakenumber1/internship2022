import {useSelector} from 'react-redux';
import {Redirect, Route} from 'react-router-dom';

import {routes} from '../../constants';

const CommonLayoutComponent = ({
  component: Component,
  ...restProps
}) =>{
  const user = useSelector((state) => state.user);
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
