const express = require('express');
const { verifyToken } = require('../middelware/authMiddleware');
const { allinventory,inactiveActive} = require('../controllers/inventoryController');
const router = express.Router();

// Ruta para obtenr el inventario, protegida por autenticación
router.get('/searchInventory', verifyToken, allinventory);
router.get('/inactive', verifyToken, inactiveActive);
 
module.exports = router;
