import Navigation from '../navigation/Navigation';
import React, { useContext } from 'react';
import AuthContext from '../login/Auth';
import Header from '../components/Header';
import { Spinner } from '@nextui-org/react';

const Home = () => {
  const { user, loading, error } = useContext(AuthContext);

  // Si todavía se está cargando la información de autenticación
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner label="Cargando..." color="success" />
      </div>
    );
  }
    
  // Manejo de errores
  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Error: {error}</p>
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
          <p>Welcome, home!</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
