import React, { useContext, useEffect, useState } from 'react';
import Navigation from '../../navigation/Navigation';
import AuthContext from '../../login/Auth';
import Header from '../../components/Header';
import { Spinner } from '@nextui-org/react';
import { InventoryTable } from './InventoryTable';
import useInventoryApi from './UseInventoryApi';

const Inventory = () => {
  const { user, loading: authLoading, error: authError } = useContext(AuthContext);
  const { inventory, loading: inventoryLoading, error: inventoryError, handleEdit, handleInactive } = useInventoryApi();

  // Si aún se está cargando la información de autenticación
  if (authLoading || inventoryLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner label="Cargando..." color="success" />
      </div>
    );
  }

  // Manejo de errores
  if (authError) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Text color="error">Error de autenticación: {authError}</Text>
      </div>
    );
  }

  // Si hay un error al cargar el inventario
  if (inventoryError) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Text color="error">Error al cargar el inventario: {inventoryError}</Text>
      </div>
    );
  }

  // Si el usuario no está autenticado
  if (!user) {
    return <div className="flex justify-center items-center min-h-screen">Please log in.</div>;
  }

  return (
    <div className="min-h-screen grid grid-cols-1 xl:grid-cols-6">
      <Navigation />
      <div className="xl:col-span-5">
        <Header />
        <div className="h-[90vh] overflow-y-scroll p-8">
          <InventoryTable 
            activos={inventory} 
            onEdit={handleEdit} 
            onDelete={handleInactive} 
          />
        </div>
      </div>
    </div>
  );
};

export default Inventory;
