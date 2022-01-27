import {useContext} from 'react';

import {AuthenticationContext} from '../../context/authenticationContext';
import NavBarComponent from '../NavBarComponent/NavBarComponent';

export default function AppFunc() {
  return (
    <NavBarComponent user={useContext(AuthenticationContext)[0]}/>
  );
}
