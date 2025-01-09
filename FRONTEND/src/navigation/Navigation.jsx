import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../login/Auth';
import translation from '../languaje/translate';
import { RiAlignJustify, RiCloseLine } from "react-icons/ri";

const Navigation = () => {
  const { modulesAccess } = useContext(AuthContext);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {/* Hamburger for mobile */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className=" lg:hidden  top-3 left-4 z-50 fixed text-4xl p-1 rounded-full sm:top-3 md:top-5"
      >
        {showMenu ? <RiCloseLine /> : <RiAlignJustify />}
      </button>
      
      {/* Navigation Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-white dark:bg-default shadow-lg p-6 transition-transform duration-300
          ${showMenu ? "translate-x-0" : "-translate-x-full"} 
          xl:translate-x-0 xl:static xl:h-auto xl:w-auto z-40`}
      >
        <div>
          <h1 className="text-center text-3xl font-bold mb-6">
            IPS TID<span className="text-primary text-4xl">.</span>
          </h1>
          <ul className="space-y-4">
            {modulesAccess.length > 0 ? (
              modulesAccess.map(item => (
                item.module && translation[item.module] && (
                  <li key={item.module}>
                    <Link 
                      className='flex items-center gap-4 py-3 px-5 rounded-lg hover:bg-primary transition-colors dark:hover:bg-gray-600' 
                      to={`/${item.module}`}
                    >                       
                      {/* muestro el icono del traductor */}
                      {translation[item.module].icon}  
                      {/* muestro el texto del traductor */}
                      {translation[item.module].text}  
                    </Link>
                  </li>
                )
              ))
            ) : (
              <li>No hay módulos accesibles</li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navigation;
