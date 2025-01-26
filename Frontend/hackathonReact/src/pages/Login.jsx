import React, { useState } from 'react'; 
import './pages.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';  

const Login = () => {
  const [model, setModel] = useState({});
  const [error, setError] = useState('');  
  const navigate = useNavigate();

  
  const handleLogin = async () => {
    try {
      
      const response = await axios.post('http:// 192.168.1.7:4000/users/login', {
        email: model.email,
        password: model.password,
      });

      
      if (response.data && response.data.token) {
        
        localStorage.setItem('authToken', response.data.token);
        
        navigate('/home');
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('An error occurred while logging in');
      console.error(err);
    }
  };

  return (
    <div>
      <div className="flex flex-col loginMain justify-center gap-7">
        <h2 className="abc">Login to proceed to the  Dashboard!</h2>
        
  
        <input
          type="number"
          placeholder="Enter CNIC"
          value={model.CNIC || ''}  
          onChange={(e) => setModel({ ...model, CNIC: e.target.value })}
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
            id="password"
            placeholder="Enter Password"
            value={model.password || ''}  
            onChange={(e) => setModel({ ...model, password: e.target.value })}
          />
        </label>
        
       
        {error && <div className="error">{error}</div>}
        
      
        <button className="createAccBtn" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
