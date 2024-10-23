import React from 'react';
import { useSelector } from 'react-redux';
import LoginForm from './LoginForm';
import Logout from './Logout';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="App">
      {isAuthenticated ? <Logout /> : <LoginForm />}
    </div>
  );
}

export default App;