import React, { useState, useContext } from "react";
import AuthContext from './Auth'; 
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
import EyeFilledIcon from './EyeFilledIcon';
import EyeSlashFilledIcon from './EyeSlashFilledIcon '; // Asegúrate de que la ruta sea correcta
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [isVisible, setIsVisible] = useState(false);  
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Estado de carga
  const navigate = useNavigate();

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Limpiar errores anteriores

    if (!credentials.username || !credentials.password) {
      setError('Por favor, completa todos los campos');
      return;
    }
    
    setLoading(true); // Inicia el estado de carga
    try {
      const result = await login(credentials);
       
      if (result.success) {
        navigate('/home'); // Redirige a la página de inicio
      } else {
        setError(result.message); // Muestra el mensaje de error
      }
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
      setError('Error desconocido. Intenta de nuevo.'); // Mensaje de error general
    } finally {
      setLoading(false); // Finaliza el estado de carga
    }
  };

  return (
    <>         
      <title>TID MEDICAL</title>
      <section className="border border-solid border-sky-500 bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-28 h-24 mr-2 text-center" src="../img/logoCompany.png" alt="logo" />
            TID MEDICAL
          </a>
          <div className="shadow-lg border w-full bg-prueba rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Hola, Bienvenidos a IPS TID
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>                
                <div className="flex w-full flex-wrap mb-6 md:mb-0 gap-4">
                  <Input
                    name="username"
                    onChange={handleChange}
                    type="text"
                    variant="underlined"
                    label="Usuario"
                  />
                  <Input
                    name="password"
                    label="Contraseña"
                    variant="underlined"
                    placeholder="*********"
                    endContent={
                      <button
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleVisibility}
                        aria-label="toggle password visibility"
                      >
                        {isVisible ? (
                          <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                          <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                        )}
                      </button>
                    }
                    type={isVisible ? "text" : "password"}
                    className="max-w-xl"
                    onChange={handleChange}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Recordar</label>
                    </div>
                  </div>
                  <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Olvidaste tu contraseña?</a>
                </div>
                <div className="w-full flex-wrap gap-4 items-center">
                  <Button
                    className="w-full"
                    type="submit"
                    color="primary"
                    disabled={loading} // Desactiva el botón mientras carga
                  >
                    {loading ? 'Cargando...' : 'INICIAR'}
                  </Button>                 
                </div>
                {error && <p className="text-danger text-center">{error}</p>} {/* Mostrar mensaje de error */}
              </form>
            </div>
          </div>
        </div>
      </section>      
    </>
  );
};

export default Login;
