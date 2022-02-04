import {TextField} from '@mui/material';
import {ChangeEvent, CSSProperties, SyntheticEvent, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from 'react-router-dom';

import {changeUserName} from '../../store/user/slice';
import {UserRootState} from "../../store/user/interface";

const sForm : CSSProperties = {
  margin: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};
const sxMb10 = {marginBottom: '10px'};


function RegisterComponent() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState(useSelector((state: UserRootState) => state.user));

  const handleSubmit = (e : SyntheticEvent) => {
    e.preventDefault();
    dispatch(changeUserName(username));
  };

  return (
    <form style={sForm}
    >
      <TextField
        value={username}
        sx={sxMb10} label="Username" type="text"
        onChange={(event : ChangeEvent<HTMLInputElement>)=>
          setUsername(event.target.value)
          }
      />
      <button onClick={handleSubmit}>Submit</button>
      <Link to="/feed">back</Link>
    </form>
  );
}

export default RegisterComponent;
