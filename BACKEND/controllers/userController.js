// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
const db = require('../config/database');
const { all } = require('../routes/usersRoutes');
// const { SECRET } = require('../config/jwtConfig');

 
//Ruta para obtener todos los usuarios
const allUsers = async (req, res) => {
  
  try {
    const [alls] = await db.query('SELECT * FROM users');

    if (all.length === 0) {
      return res.status(404).json({ message: ' No se encontraron usuarios' });
    }
    // se retornan todos los usuarios
    res.json(data)     

  } catch (error) {
    console.error('Users error:', error);
    res.status(500).json({ message: 'Error al buscar los usuarios' });
  }
}
//Ruta para crear los usuarios
const create = async (req, res) => {
  const { username, password } = req.body;

  try {
    const [users] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
    const user = users[0];

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ message: 'Credenciales Incorrectas' });
    }

    const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: '1h' });
    res.json({ token });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

// Ruta para eliminar los usuarios
const deleted = async (req, res) => {
  try {
    const userId = req.userId;
    const modules = await getAccessibleModules(userId);
    res.json(modules);
  } catch (error) {
    console.error('Error fetching modules:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}
// 
const update = async (req, res) => {
  try {
    const userId = req.userId;    
    const [data] = await db.query('SELECT username FROM users WHERE users.id = ?', [userId]);

    if (data.length === 0) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.json(data)
  } catch (error) {
    console.error('Error fetching username:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}
module.exports = { create, deleted, update,allUsers};
