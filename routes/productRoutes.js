//HOME RUTAS PRINCIPALES
const express =require('express');
const router = express.Router();
const path = require('path');
const prductController = require("../controllers/productController");

router.get('/detalle-producto', prductController.detalleDeProducto);

router.get('/ListaProductos', prductController.ListaProductos);

router.get('/carrito-de-compras', prductController.carritoDeCompras);

module.exports = router;