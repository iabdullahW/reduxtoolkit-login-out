import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './features/authSlice';

const Logout = () => {
  const username = useSelector((state) => state.auth.username);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-semibold mb-4 text-gray-800">Welcome:</h2>
      <h1 className="text-7xl font-semibold mb-4 text-gray-800" >{username}</h1>
      <br />
      <button onClick={() => dispatch(logout())}   className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded shadow-md transition duration-200">Logout</button>
    </div>
  );
};

export default Logout; 