import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import './Login.css';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);
  const [isSignup, setIsSignup] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleToggleForm = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className={`login-container ${isSignup ? 'signup-mode' : ''}`}>
      <Link to="/signup" className="back-link">
        ← Go to Signup
      </Link>

      <div className="slider" onClick={handleToggleForm}></div>

      <div className="login-form">
        <h2 className="form-title">{isSignup ? 'Signup' : 'Login'}</h2>
        <form onSubmit={handleFormSubmit}>
          {isSignup && (
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                className="form-input"
                placeholder="Enter your name"
                name="name"
                type="text"
                id="name"
                onChange={handleChange}
              />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              className="form-input"
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input
              className="form-input"
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>
          {error ? (
            <div>
              <p className="error-text">
                Error: Invalid Credentials. The email or password you entered is incorrect.
                Please verify your login details and try again.
              </p>
            </div>
          ) : null}
          <div className="form-group">
            <button type="submit" className="submit-button">
              {isSignup ? 'Signup' : 'Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
