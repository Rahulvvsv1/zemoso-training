import React from 'react';
import './App.css';
import Navbar from  './Components/Navbar';
import Home from './Components/Home';
import AllUsers from './Components/AllUsers';
import AddUser from './Components/AddUser';
import EditUser from './Components/EditUser';
import NotFound from './Components/NotFound';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/all" element={<AllUsers/>}  />
        <Route path="/add" element={<AddUser/>}  />
        <Route path="/edit/:id" element={<EditUser/>}  />
        <Route element={<NotFound/>} />
      </Routes>
    </Router>
  );
}

export default App;