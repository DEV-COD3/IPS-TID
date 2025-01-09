 
const db = require('../config/database');
 
//Ruta para obtener todo el inventario
const allinventory = async (req, res) => {
  
  try {
    const [allinven] = await db.query(`
      SELECT 
        inv.id,
        inv.foto,
        inv.codigo,
        equipo.nombre AS equipo_id,
        marca.nombre AS marca_id,
        inv.modelo,
        inv.serial,
        inv.registroInviama,
        riesgo.riesgo,
        inv.ubicacion,
        users.names,
        inv.sistemaOperativo,
        inv.color,
        estado.estado,
        inv.observaciones
      FROM 
        inventario AS inv
      INNER JOIN marca ON marca.id = inv.marca_id
      INNER JOIN equipo ON equipo.id = inv.equipo_id
      INNER JOIN riesgo ON riesgo.id = inv.riesgo
      INNER JOIN users ON users.id = inv.responsable
      INNER JOIN estado ON estado.id = inv.estado;
    `);

    if (allinven.length === 0) {
      return res.status(404).json({ message: ' No se encontro ningun activo' });
    }
    // se retorna el inventario
    res.json(allinven)    
        

  } catch (error) {
    console.error('Users error:', error);
    res.status(500).json({ message: 'Error al buscar el inventario' });
  }
}   
// Maneja el inicio de sesión del usuario
const inactiveActive = async (req, res) => {
  // const { username, password } = req.body;
console.log(req);

  // try {
  //   const [users] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
  //   const user = users[0];

  //   if (!user || !bcrypt.compareSync(password, user.password)) {
  //     return res.send({ message: 'Credenciales Incorrectas' });
  //   }

  //   const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: '1h' });
  //   res.json({ token });

  // } catch (error) {
  //   console.error('Login error:', error);
  //   res.status(500).json({ message: 'Error interno del servidor' });
  // }
};
module.exports = {allinventory,inactiveActive};

