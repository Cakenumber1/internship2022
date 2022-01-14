import NavBarComponent from './NavBarComponent';
import { useEffect, useState } from 'react';

function App({func}) {
  const [user, setUser] = useState('')
  useEffect(() => {
    setUser(func())
  }, [func]) // or []

  return (
    <>
      <NavBarComponent user={user}/>
    </>
  );
}

export default App;
