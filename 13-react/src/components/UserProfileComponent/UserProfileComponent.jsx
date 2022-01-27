import {TextField} from '@mui/material';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

import {changeUserName} from '../../store/user/slice';

const sForm = {
  margin: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};
const sxMb10 = {marginBottom: '10px'};


function RegisterComponent() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState(useSelector((state) => state.user));

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changeUserName(username));
  };

  return (
    <form style={sForm}
    >
      <TextField
        value={username}
        sx={sxMb10} label="Username" type="text"
        onChange={(event) => setUsername(event.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <Link to="/feed">back</Link>
    </form>
  );
}

export default RegisterComponent;
