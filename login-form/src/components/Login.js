import React, { useState } from 'react';
import './Login.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Username: ${username}\nPassword: ${password}\nLogin Successful`);
  }

  return (
    <form onSubmit={handleSubmit} className="main-div">
      <h1>Login Form</h1>
      <div className="minor-div">
        <label htmlFor="username" className="label">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input"
        />
      </div>
      <div>
        <label htmlFor="password" className="label">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
