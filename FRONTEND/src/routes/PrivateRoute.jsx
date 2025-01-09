import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../login/Auth';

const ErrorMessage = ({ message }) => (
  <div className="flex justify-center items-center h-screen">
    <p className="text-red-500">{message}</p>
  </div>
);

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="spinner-border" role="status">
      <span className="sr-only">Cargando...</span>
    </div>
  </div>
);

const PrivateRoute = ({ element, requiredModule }) => {
  const { user, modulesAccess, loading, error } = useContext(AuthContext);

  // Si todavía se está cargando la información de autenticación
  if (loading) {
    return <LoadingSpinner />; // Muestra un spinner mientras se carga
  }

  // Manejo de errores
  if (error) {
    return <ErrorMessage message={error} />;
  }

  // Redirigir si no está autenticado
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // Verifica si el usuario tiene acceso al módulo requerido
  const hasAccess = requiredModule 
    ? modulesAccess.some(module => module.module === requiredModule) 
    : true;

  // Redirigir si no tiene acceso al módulo
  if (requiredModule && !hasAccess) {
    return <Navigate to="/access-denied" replace />;
  }

  // Renderiza el elemento si pasa las verificaciones
  return element;
};

export default PrivateRoute;
