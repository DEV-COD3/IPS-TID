import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { Spinner } from "@nextui-org/react";

const AuthContext = createContext(null);
const API_URL = 'http://localhost:5000/api';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState(null);
  const [modulesAccess, setModulesAccess] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Manejo de errores

  const checkTokenExpiration = (token) => {
    try {
      const decoded = jwtDecode(token);
      return decoded.exp > Date.now() / 1000;
    } catch (error) {
      console.error('Token decode failed', error);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setModulesAccess([]);
    setUserName(null);
  };

  const fetchModules = async (token) => {
    try {
      const { data } = await axios.get(`${API_URL}/modulesAccess`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setModulesAccess(data);
    } catch (error) {
      console.error('Error fetching modules:', error);
      setError('Error al obtener los módulos.');
      logout();
    }
  };

  const nameUser = async (token) => {
    try {
      const { data } = await axios.get(`${API_URL}/userNameById/`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUserName(data[0]?.username || "Usuario");
    } catch (error) {
      console.error('Error fetching username:', error);
      setError('Error al obtener el nombre de usuario.');
    }
  };

  const authenticateUser = async (token) => {
    const decoded = jwtDecode(token);
    setUser(decoded);
    await fetchModules(token);
    await nameUser(token);
  };

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      if (token && checkTokenExpiration(token)) {
        await authenticateUser(token);
      } else {
        logout();
      }
      setLoading(false);
    };

    fetchData().catch(err => {
      console.error('Fetch data error:', err);
      setError('Error al cargar los datos de autenticación.');
      setLoading(false);
    });
  }, []);

  const login = async (credentials) => {
    try {
      const { data } = await axios.post(`${API_URL}/auth/login`, credentials);
      const { token } = data;

      if (token) {
        localStorage.setItem('token', token);
        await authenticateUser(token);
        return { success: true };
      } else {
        return { message: data.message };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, message: 'Error al iniciar sesión' };
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen w-screen fixed top-0 left-0 bg-white bg-opacity-80 z-50">
        <Spinner label="Cargando..." color="success" labelColor="success" />
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, modulesAccess, userName, login, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
