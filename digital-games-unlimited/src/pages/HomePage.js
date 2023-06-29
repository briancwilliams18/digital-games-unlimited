import React from 'react';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

function HomePage() {
  return (
    <div>
      <h1>Welcome to Digital Games Unlimited!</h1>
      <SignupForm />
      <LoginForm />
    </div>
  );
}

export default HomePage;


