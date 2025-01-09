const express = require('express');
const { verifyToken } = require('../middelware/authMiddleware');
const { create } = require('../controllers/userController');
const { deleted } = require('../controllers/userController');
const { update } = require('../controllers/userController');
const router = express.Router();

// Ruta para obtenr los usuarios, protegida por autenticación
router.get('/create', verifyToken, create);
router.get('/deleted/', verifyToken,deleted);
router.get('/update/', verifyToken,update);

module.exports = router;
