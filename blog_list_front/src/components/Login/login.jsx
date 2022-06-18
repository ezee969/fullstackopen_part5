import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginContext } from '../../utils/context';
import loginService from '../../services/login';
import LoginSection from './login_section';
import SidePresentation from './side_presentation';

const Login = ({ setUser }) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [keepConnected, setkeepConnected] = useState(false);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedUser');

    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);

      if (user.keepConnected) {
        setUser(user);
        navigate('/blogs');
      }
    }
  }, [setUser, navigate]);

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const user = await loginService.login({ username, password });
      user.keepConnected = keepConnected ? true : false;

      window.localStorage.setItem('loggedUser', JSON.stringify(user));

      setUser(user);
      setUsername('');
      setPassword('');
      setkeepConnected(false);
      navigate('/blogs');
    } catch {
      setLoginError(true);
    }

    setLoading(false);
  };

  return (
    <section
      className='h-screen w-screen
                grid grid-cols-1 grid-rows-[9fr_2fr] 
                lg:grid-cols-[6fr_5fr] lg:grid-rows-none
                '
    >
      <loginContext.Provider
        value={{
          handleLogin,
          loading,
          username,
          password,
          setUsername,
          setPassword,
          loginError,
          keepConnected,
          setkeepConnected,
        }}
      >
        <LoginSection />
        <SidePresentation />
      </loginContext.Provider>
    </section>
  );
};

export default Login;
