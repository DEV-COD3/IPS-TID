const mysql = require('mysql2');

// Crear un pool de conexiones para gestionar múltiples conexiones de forma eficiente
const bd = mysql.createPool({
  host: 'localhost',       // Dirección del servidor de la base de datos
  user: 'root',            // Usuario de la base de datos
//   password: 'password',    // Contraseña del usuario de la base de datos
  database: 'tid_medical'  // Nombre de la base de datos
});

module.exports = bd.promise();  // Exporta el db con promesas para su uso en consultas asíncronas
