import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useUser } from '../context/UserContext';

export default function Auth() {
  const { login } = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const location = useLocation();
  const history = useHistory();

  function handleSubmit(e) {
    try {
      e.preventDefault();
      await login(email, password);
      const url = location.state.origin ? location.state.origin.pathname : '/';
    } catch (error) {
      setError(error.message)
    }
  }
  return (
    <>
    <h1>auth</h1>
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        placeholder="Email" />
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Password" />
      <button type='submit'>Sign in</button>
      <p>{error}</p>
    </form>
    </>
    )
} 
