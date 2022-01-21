import { useState } from 'react';
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';

function RegisterComponent({login}) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username && password && password2) {
      if (password === password2)
        login(username, password)
    }
  }

  return (
    <form style={{
      margin: '10px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    >
      <TextField sx={{marginBottom: '10px'}} label="Login*" type="text"
                 onChange={event => setUsername(event.target.value)}/>
      <TextField sx={{marginBottom: '10px'}} label="Password*" type="password"
                 onChange={event => setPassword(event.target.value)}/>
      <TextField sx={{marginBottom: '10px'}} label="Repeat Password*" type="password"
                 onEmptied={() => {
                   console.log(123)
                 }}
                 onChange={event => setPassword2(event.target.value)}/>
      <button onClick={handleSubmit}>Submit</button>
      <Link to="/login">Login</Link>
    </form>
  )
}

export default RegisterComponent;
