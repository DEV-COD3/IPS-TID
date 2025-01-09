 
import Navigation from '../../navigation/Navigation'; // Ajusta la ruta según tu estructura de carpetas
import React, { useContext } from 'react';
import Header from '../../components/Header';

const Programing = () => {
 


  if (!user) {
    return <div>Please log in.</div>;
  }

  return (
    <div className="min-h-screen grid grid-cols-1 xl:grid-cols-6">
    <Navigation />
    <div className="xl:col-span-5">
      <Header />
      <div className="h-[90vh] overflow-y-scroll p-8">
        {/* <Tickets /> */}
        welcome a module programing
      </div>
    </div>
  </div>
  );
};

export default Programing;
