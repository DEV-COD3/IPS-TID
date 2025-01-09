import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const UserContext = createContext(null);
const API_URL = 'http://localhost:5000/api/users'; // Cambia esta URL según tu API

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Función para cargar usuarios
  const fetchUsers = async () => {
    try {
      const { data } = await axios.get(API_URL);
      setUsers(data);
    } catch (err) {
      setError('Error al cargar los usuarios.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Efecto para cargar usuarios al montar el componente
  useEffect(() => {
    fetchUsers();
  }, []);

  // Función para agregar un usuario
  const addUser = async (newUser) => {
    try {
      const { data } = await axios.post(API_URL, newUser);
      setUsers((prevUsers) => [...prevUsers, data]);
    } catch (err) {
      setError('Error al agregar usuario.');
      console.error(err);
    }
  };

  // Función para editar un usuario
  const updateUser = async (id, updatedUser) => {
    try {
      const { data } = await axios.put(`${API_URL}/${id}`, updatedUser);
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user.id === id ? data : user))
      );
    } catch (err) {
      setError('Error al actualizar usuario.');
      console.error(err);
    }
  };

  // Función para eliminar un usuario
  const deleteUser = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (err) {
      setError('Error al eliminar usuario.');
      console.error(err);
    }
  };

  return (
    <UserContext.Provider value={{ users, loading, error, addUser, updateUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
