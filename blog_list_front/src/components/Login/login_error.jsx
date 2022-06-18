import React, { useContext } from 'react';
import { loginContext } from '../../utils/context';

export default function LoginError() {
  const { loginError } = useContext(loginContext);
  return (
    <p
      className={`text-red-600 font-medium text-sm delay-150 transition-all ease-in-out ${
        loginError ? 'opacity-100' : 'opacity-0'
      }`}
    >
      Invalid username or password
    </p>
  );
}
