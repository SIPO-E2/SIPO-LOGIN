import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.tsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Protected from './components/Protected.tsx';
import Signup from './pages/Signup.tsx';
import Login from './pages/Login.tsx';
import Home from './pages/Home.tsx';
import AdminPage from './pages/AdminPage.tsx';
import Manager from './pages/Manager.tsx';
import Staffer from './pages/Staffer.tsx';
const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Protected />}>
            <Route index element={<Home />} />
            <Route path="Admin" element={<AdminPage />} />
            <Route path="Manager" element={<Manager />} />
            <Route path="Staffer" element={<Staffer />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  rootElement
);