import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './login/Auth'; 
import Login from './login/Login'; 
import Home from './modules/Home'; 
import AccessDenied from './modules/AccessDenied'; 
import Users from './modules/users/Users'; 
import Programing from './modules/operaciones/Programing'; 
import Agend from "./modules/operaciones/Agend";
import PrivateRoute from './routes/PrivateRoute'; 
import { NextUIProvider } from "@nextui-org/react";
import Inventory from './modules/inventory/Inventory'
import './index.css';

const MainApp = () => (
  <AuthProvider>
    <NextUIProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/access-denied" element={<AccessDenied />} />
          <Route path="/home" element={<PrivateRoute element={<Home />} />} />
          <Route path="/users" element={<PrivateRoute element={<Users />} requiredModule="users" />} />
          <Route path="/programing" element={<PrivateRoute element={<Programing />} requiredModule="programing" />} />
          <Route path="/agend" element={<PrivateRoute element={<Agend />} requiredModule="agend" />} />
          <Route path="/inventory" element={<PrivateRoute element={<Inventory/>} requiredModule="inventory" />} />
        </Routes>
      </Router>
    </NextUIProvider>
  </AuthProvider>
);

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<MainApp />);
