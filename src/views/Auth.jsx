import React from 'react';
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useUser } from '../context/UserContext';

export default function Auth() {
  const { login } = useUser();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('');
  const location = useLocation();
  const history = useHistory();

  function handleSubmit(e) {
    try {
      e.preventDefault();
      await login(email, password);
      const url = location.state.origin ? location.state.origin.pathname : '/';
    } catch (error) {
      
    }
  }
  return <div>Auth</div> 
} 
