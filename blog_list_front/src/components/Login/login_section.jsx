import React from 'react';
import LoginForm from './login_form';
import LoginHeader from './login_header';

export default function LoginSection() {
  return (
    <div
      className=' flex gap-8 flex-col justify-center
                  px-5
                  md:px-12
                  lg:px-24'
    >
      <LoginHeader />
      <LoginForm />
    </div>
  );
}
