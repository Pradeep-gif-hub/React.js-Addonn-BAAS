import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((res) => {
        if (res) {
          dispatch(login({ res }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <h1>Charcha_chaupal</h1>
    </>
  );
}

export default App;
