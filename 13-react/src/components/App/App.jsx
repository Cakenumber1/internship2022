import {useSelector} from 'react-redux';

import {userSelector} from '../../store/selectors';
import NavBarComponent from '../NavBarComponent/NavBarComponent';

export default function AppFunc() {
  return (
    <NavBarComponent user={useSelector(userSelector)}/>
  );
}
