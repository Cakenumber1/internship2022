import {useSelector} from 'react-redux';

import NavBarComponent from '../NavBarComponent/NavBarComponent';

export default function AppFunc() {
  return (
    <NavBarComponent user={useSelector((state) => state.user)}/>
  );
}
