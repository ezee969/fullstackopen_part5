import React, { useContext } from 'react';
import InputTextBox from '../input_text_box';
import InputCheckbox from './input_checkbox';
import LoginError from './login_error';
import Button from '../button';
import { loginContext } from '../../utils/context';

export default function Form() {
  const {
    handleLogin,
    loading,
    setPassword,
    setUsername,
    username,
    password,
    keepConnected,
    setkeepConnected,
  } = useContext(loginContext);

  return (
    <form
      onSubmit={handleLogin}
      className='flex flex-col gap-5'
      id='login-form'
      action=''
    >
      <InputTextBox
        value={username}
        onChange={({ target }) => {
          setUsername(target.value);
        }}
        type='text'
        name='Username'
        placeholder='Username'
        id='username-input'
      />
      <InputTextBox
        value={password}
        onChange={({ target }) => setPassword(target.value)}
        type='password'
        name='Password'
        placeholder='Password'
        id='password-input'
      />
      <LoginError />
      <InputCheckbox
        labelText='Keep me logged in'
        onChange={() =>
          keepConnected ? setkeepConnected(false) : setkeepConnected(true)
        }
        id='checkbox-remember-user'
      />
      {loading ? (
        <Button loading={true} text='Processing...' />
      ) : (
        <Button id={'login-button'} text='LOGIN' />
      )}
    </form>
  );
}
