// src/pages/Login.tsx
import React, { useState } from 'react';
import { login } from '../Auth/authService';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState<string>(''); // State för felmeddelande
  const [loginSuccess, setLoginSuccess] = useState<boolean>(false); // State för att indikera lyckad inloggning

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await login(email, password);
      setLoginSuccess(true);
      setLoginError('');
      // Redirect to dashboard
    } catch (error) {
      console.error("Login failed", error);
      setLoginSuccess(false);
      setLoginError('Login failed. Please check your credentials.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Login</button>
      {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
      {loginSuccess && <p style={{ color: 'green' }}>Login successful!</p>}
    </form>
  );
};

export default Login;
