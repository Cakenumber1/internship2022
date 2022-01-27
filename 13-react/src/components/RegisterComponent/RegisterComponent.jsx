import {TextField} from '@mui/material';
import {useContext, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';

import {AuthenticationContext} from '../../context/authenticationContext';

const sForm = {
  margin: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};
const sxMb10 = {marginBottom: '10px'};


function RegisterComponent() {
  const history = useHistory();
  const setUser = useContext(AuthenticationContext)[1];
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password && password2) {
      if (password === password2) {
        console.log(username, password);
        setUser(username);
        history.push('/');
      }
    }
  };

  return (
    <form style={sForm}
    >
      <TextField
        sx={sxMb10} label="Login*" type="text"
        onChange={(event) => setUsername(event.target.value)}
      />
      <TextField
        sx={sxMb10} label="Password*" type="password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <TextField
        sx={sxMb10} label="Repeat Password*" type="password"
        onChange={(event) => setPassword2(event.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <Link to="/login">Login</Link>
    </form>
  );
}

export default RegisterComponent;