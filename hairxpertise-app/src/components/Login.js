import React from 'react';
import Button from './Button';

const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <Button to="./Signup" text="Signup" />
    </div>
  );
};

export default Login;
