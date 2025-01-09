const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../config/database');
const { SECRET } = require('../config/jwtConfig');

// Obtiene los módulos accesibles para un usuario
async function getAccessibleModules(userId) {
  try {
    const [results] = await db.query(`
      SELECT DISTINCT m.name AS module
      FROM users u
      JOIN user_roles ur ON u.id = ur.user_id
      JOIN roles r ON ur.role_id = r.id
      JOIN role_modules rm ON r.id = rm.role_id
      JOIN modules m ON rm.module_id = m.id
      WHERE u.id = ?
    `, [userId]);
    return results;

  } catch (error) {
    console.error('Error fetching accessible modules:', error);
    throw error;
  }
}

// Maneja el inicio de sesión del usuario
const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const [users] = await db.query('SELECT * FROM users WHERE username = ?', [username]);
    const user = users[0];

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.send({ message: 'Credenciales Incorrectas' });
    }

    const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: '1h' });
    res.json({ token });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

// Ruta para obtener los módulos accesibles
const getModules = async (req, res) => {
  try {
    const userId = req.userId;
    const modules = await getAccessibleModules(userId);
    res.json(modules);
  } catch (error) {
    console.error('Error fetching modules:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

const userNameById = async (req, res) => {
  
  try {
    const userId = req.userId;    
    const [data] = await db.query('SELECT username FROM users WHERE users.id = ?',[userId]);    
    res.json(data);
    
  } catch (error) {
    console.log(error);
    
    
  }
};


module.exports = { login, getModules, userNameById };
