import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from './firebase.ts';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const userString = localStorage.getItem('user');
  const user = userString ? JSON.parse(userString) : null;

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1>Welcome to React Firebase Auth using email and password</h1>
      <h2>{user && user.email}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home