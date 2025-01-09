import React, { useEffect, useState, useContext } from "react";
import { Dropdown, DropdownItem, DropdownTrigger, DropdownMenu, User } from "@nextui-org/react";
import { RiNotification3Line, RiArrowDownSLine, RiMoonFill, RiSunFill, RiSearchLine } from "react-icons/ri";
import AuthContext from '../login/Auth';
import axios from 'axios';

const Header = () => {
  const { logout, userName } = useContext(AuthContext);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('isDarkMode');
    return savedMode === 'true';
  });
  const [notifications, setNotifications] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
    localStorage.setItem('isDarkMode', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const fetchNotifications = async () => {
    try {
      const response = await axios.get('/api/notifications');
      setNotifications(Array.isArray(response.data) ? response.data : getTestNotifications());
    } catch (error) {
      setNotifications(getTestNotifications());
    }
  };

  const getTestNotifications = () => [
    { id: 1, message: "Nueva actualización disponible" },
    { id: 2, message: "Tienes un nuevo mensaje" },
    { id: 3, message: "Reunión programada para mañana" },
    { id: 4, message: "Recordatorio: Tienes una tarea pendiente" },
  ];

  useEffect(() => {
    fetchNotifications();
  }, []);

  const handleNotificationClick = (id) => {
    console.log(`Notificación ${id} clicada`);
  };

  return (
    <header className={`bg-white dark:bg-default shadow-md p-4 md:p-6 flex items-center justify-between ${isDarkMode ? 'shadow-gray-900' : 'shadow-gray-200'}`}>
      <div className="relative flex-grow">
        <input
          type="text"
          placeholder="Buscar..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className=" border border-primary rounded-full py-1 pl-10 pr-4 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 w-full md:w-48" // Tamaño reducido en móviles
        />
        <RiSearchLine className="absolute left-3 top-2 text-gray-400" />
      </div>
      <nav className="flex items-center gap-2 md:gap-4">
        <button onClick={toggleDarkMode} className="flex items-center justify-center w-8 h-8 rounded-full transition-colors hover:bg-gray-200 dark:hover:bg-gray-700">
          {isDarkMode ? <RiMoonFill className="text-white text-lg" /> : <RiSunFill className="text-gray-600 text-lg" />}
        </button>
        <Dropdown placement="bottom-start">
          <DropdownTrigger>
            <button className="relative flex items-center">
              <RiNotification3Line className="text-2xl" />
              {notifications.length > 0 && (
                <span className="absolute top-0 right-0 bg-red text-white  text-xs rounded-full px-1" style={{ transform: 'translate(50%, -50%)' }}>
                  {notifications.length}
                </span>
              )}
            </button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Notifications" variant="flat"  >
            {notifications.length === 0 ? (
              <DropdownItem className="text-gray-500 text-center">No hay notificaciones</DropdownItem>
            ) : (
              notifications.map(notification => (
                <DropdownItem key={notification.id} onClick={() => handleNotificationClick(notification.id)} className="text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                  {notification.message}
                </DropdownItem>
              ))
            )}
          </DropdownMenu>
        </Dropdown>
        <Dropdown placement="bottom-start">
          <DropdownTrigger>
            <User
            
              as="button"
              avatarProps={{
                isBordered: true,
                src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                className: "w-10 h-10", // Tamaño del avatar
              }}
              description={<span className="text-xs">IPS-TID</span>} // Tamaño del texto más pequeño
              name={
                <span className="text-xs sm:text-sm text-gray-900 dark:text-white truncate"> {/* Tamaño reducido en móviles */}
                  {userName} <RiArrowDownSLine className="inline-block text-lg" />
                </span>
              }
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="User Actions" variant="flat">
            <DropdownItem key="settings">Configuración</DropdownItem>
            <DropdownItem key="team_settings">Configuración del equipo</DropdownItem>
            <DropdownItem key="configurations">Configuraciones</DropdownItem>
            <DropdownItem onClick={logout} key="logout" className="text-danger" color="danger">Cerrar sesión</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </nav>
    </header>
  );
};

export default Header;
