import NavBarComponent from './NavBarComponent';
import { useState } from 'react';

function App ( {func} ) {
  const [name] = useState(func);
  return (
    <>
      <NavBarComponent user={name}/>
    </>
  );
}

export default App;