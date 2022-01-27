import {TextField} from '@mui/material';
import {useCallback, useState} from 'react';
import {useDispatch} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';

import {loginAction} from '../../store/actions';

const sForm = {
  margin: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};
const sxMb10 = {marginBottom: '10px'};

function LoginComponent() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback((_event) => {
    _event.preventDefault();
    dispatch(loginAction(username));
    history.push('/');
  }, [password, username]);

  return (
    <form style={sForm}
    >
      <TextField sx={sxMb10} label="Login*" type="text"
        onChange={(event) => setUsername(event.target.value)}/>
      <TextField sx={sxMb10} label="Password*" type="password"
        onChange={(event) => setPassword(event.target.value)}/>
      <button onClick={handleSubmit}>Submit</button>
      <Link to="/register">Register</Link>
    </form>
  );
}

export default LoginComponent;
