const express = require('express');
const { verifyToken } = require('../middelware/authMiddleware');
const { getModules } = require('../controllers/authController');
const { userNameById } = require('../controllers/authController');
const router = express.Router();

// Ruta para obtener los módulos accesibles, protegida por autenticación
router.get('/modulesAccess', verifyToken, getModules);
router.get('/userNameById/', verifyToken,userNameById);

module.exports = router;
