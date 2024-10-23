import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/authSlice';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (username.trim()) {
      dispatch(login(username));
      setUsername('');  // Clear input after login
    }
  };

  return (
    <div  className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-semibold mb-6 text-gray-800">Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
         className="border border-gray-300 p-2 rounded mb-4 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button onClick={handleLogin}   className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded shadow-md transition duration-200">Login</button>
    </div>
  );
};

export default LoginForm;