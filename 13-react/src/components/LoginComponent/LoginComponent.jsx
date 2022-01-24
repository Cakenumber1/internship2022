import {TextField} from '@mui/material';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';

import {loginAction} from '../../store/actions';

function LoginComponent() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    dispatch(loginAction(username));
    history.push('/');
  };

  return (
    <form style={{
      margin: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    >
      <TextField sx={{marginBottom: '10px'}} label="Login*" type="text"
        onChange={(event) => setUsername(event.target.value)}/>
      <TextField sx={{marginBottom: '10px'}} label="Password*" type="password"
        onChange={(event) => setPassword(event.target.value)}/>
      <button onClick={handleSubmit}>Submit</button>
      <Link to="/register">Register</Link>
    </form>
  );
}

export default LoginComponent;
