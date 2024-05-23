import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Admin from './components/AdminDashBoard'
import UserForm from './components/UserForm';
import UpdateForm from './components/UpdateForm';
import Login from './components/Login';
import LoginSuccsess from './components/solo/LoginSuccess';
import AdminLogin from './components/AdminLogin';
import CreateCard from './components/solo/CreateCard';
import HistoryCard from './components/solo/HistoryCard';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
          <Routes>
              <Route path="/" element={<App />} />
              <Route path="/admindashboard" element={<Admin />} />
              <Route path="/userform" element={<UserForm />} />
              <Route path="/updateform" element={<UpdateForm />} />
              <Route path="/login" element={<Login />} />
              <Route path='/loginSuccess' element={<LoginSuccsess />} />
              <Route path='/adminLogin' element={<AdminLogin />} />
              <Route path='/createCard' element={<CreateCard/>} />
              <Route path='/historyCard' element={<HistoryCard/>} />
          </Routes>
      </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
