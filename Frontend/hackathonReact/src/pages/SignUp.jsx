import React, { useState } from 'react';
import './pages.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [model, setModel] = useState({});
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {
    
    if (!model.fullname || !model.email || !model.password || !model.phone || !model.website) {
      setError('All fields are required');
      return;
    }

    try {
      const response = await axios.post('http://192.168.1.7:4000/users/register', {
        name: model.fullname,
        email: model.email,
        password: model.password,
        phone: model.phone,
        website: model.website,
      });

      if (response.data && response.data.message === 'User created successfully') {
        alert('User created successfully!');
        navigate('/login');
      } else {
        setError(response.data.message || 'Sign-up failed');
      }
    } catch (err) {
      if (err.response) {
        console.error('Response error:', err.response.data);
        setError(err.response.data.message || 'Sign-up failed');
      } else if (err.request) {
        console.error('Request error:', err.request);
        setError('No response from the server');
      } else {
        console.error('Error:', err.message);
        setError('An unexpected error occurred');
      }
    }
  };

  return (
    <div className="flex flex-col loginMain justify-center gap-7">
      <h2>Welcome to Dashboard Join us today!</h2>
      <input
        type="text"
        placeholder="Enter Name"
        value={model.fullname || ''}
        onChange={(e) => setModel({ ...model, fullname: e.target.value })}
      />
      <input
        type="email"
        placeholder="Enter Email"
        value={model.email || ''}
        onChange={(e) => setModel({ ...model, email: e.target.value })}
      />
      <label htmlFor="password">
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={model.password || ''}
          onChange={(e) => setModel({ ...model, password: e.target.value })}
        />
      </label>
      <input
        type="number"
        placeholder="Enter Contact Number"
        value={model.phone || ''}
        onChange={(e) => setModel({ ...model, phone: e.target.value })}
      />
      <input
        type="text"
        placeholder="Enter Website"
        value={model.website || ''}
        onChange={(e) => setModel({ ...model, website: e.target.value })}
      />
      {error && <div className="error">{error}</div>}
      <button className="createAccBtn" onClick={handleSignUp}>Create Account</button>
      <p>Already have an account? <button onClick={() => navigate('/login')}>Login</button></p>
    </div>
  );
};

export default SignUp;
