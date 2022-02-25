import {TextField} from '@mui/material';
import {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';

import { fetchPost } from "../../fakeServer/fetch/fetchFunctions";


const sForm = {
  margin: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};
const sxMb10 = {marginBottom: '10px'};


function NewArticleComponent() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && url) {
      fetchPost(name, url)
      history.push('/');
    }
  };

  return (
    <form style={sForm}
    >
      <TextField
        sx={sxMb10} label="name*" type="text"
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        sx={sxMb10} label="url*" type="url"
        onChange={(event) => setUrl(event.target.value)}
      />
      <button onClick={handleSubmit}>Post</button>
      <Link to="/">Back</Link>
    </form>
  );
}

export default NewArticleComponent;
