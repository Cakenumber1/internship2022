import { useState } from 'react';
import css from '../LoginComponent/LoginComponent.module.scss'

function LoginComponent({handleLogin}) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    handleLogin(username, password)
  }

  return (
    <form className={css.LoginComponent}>
      <table>
        <tbody>
        <tr>
          <td className={css.login}>login</td>
          <td><input name="login" type="text" onChange={event => setUsername(event.target.value)}/></td>
        </tr>
        <tr>
          <td className={css.password}>password</td>
          <td><input name="password" type="password" onChange={event => setPassword(event.target.value)}/></td>
        </tr>
        </tbody>
      </table>
      <button className={css.button} onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default LoginComponent;
