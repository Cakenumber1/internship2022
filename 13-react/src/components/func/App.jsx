import NavBarComponent from './NavBarComponent';
import { useEffect, useState } from 'react';

function App({fetchUser}) {
  const [user, setUser] = useState('')
  useEffect(() => {
    setUser(fetchUser())
  }, [fetchUser]) // or []

  return (
    <NavBarComponent user={user}/>
  );
}

export default App;
