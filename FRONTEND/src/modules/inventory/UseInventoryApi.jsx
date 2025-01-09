import { useState, useEffect } from 'react';
import axios from 'axios';

const useInventoryApi = () => {
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_URL = 'http://localhost:5000/api/inventory';
  const token = localStorage.getItem('token');  

  useEffect(() => {
    const fetchInventory = async () => {
      if (!token) {
        setError('No token found, please log in.');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${API_URL}/searchInventory`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setInventory(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error loading inventory data');
        setLoading(false);
      }
    };

    fetchInventory();
  }, [token]);

  const handleEdit = async (id, updatedItem) => {
    try {
      await axios.put(`${API_URL}/updateInventory/${id}`, updatedItem, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // Actualizar el inventario en el estado
      setInventory((prevInventory) =>
        prevInventory.map((item) =>
          item._id === id ? { ...item, ...updatedItem } : item
        )
      );
    } catch (error) {
      console.error('Error editing inventory:', error);
      setError('Error editing item');
    }
  };

  const handleInactive = async (id) => {
    console.log('deleted',id);
    
    // try {
    //   await axios.delete(`${API_URL}/deleteInventory/${id}`, {
    //     headers: { Authorization: `Bearer ${token}` },
    //   });

    //   // Eliminar el item del inventario
    //   setInventory((prevInventory) =>
    //     prevInventory.filter((item) => item._id !== id)
    //   );
    // } catch (error) {
    //   console.error('Error deleting inventory:', error);
    //   setError('Error deleting item');
    // }
  };

  return {
    inventory,
    loading,
    error,
    handleEdit,
    handleInactive,
  };
};

export default useInventoryApi;
