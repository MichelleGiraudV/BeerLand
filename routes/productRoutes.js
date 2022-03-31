//HOME RUTAS PRINCIPALES
const express =require('express');
const router = express.Router();
const path = require('path');
const productController = require("../controllers/productController");

router.get('/detalle-producto', productController.detalleDeProducto);

router.get('/ListaProductos', productController.ListaProductos);

router.get('/carrito-de-compras', productController.carritoDeCompras);

module.exports = router;