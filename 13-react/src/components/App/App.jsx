import {useEffect, useState} from 'react';

import NavBarComponent from '../NavBarComponent/NavBarComponent';


function AppFunc({fetchUser}) {
  const [user, setUser] = useState('');
  useEffect(() => {
    setUser(fetchUser());
  }, [fetchUser]); // or []

  return (
    <NavBarComponent user={user}/>
  );
}

export default AppFunc;
