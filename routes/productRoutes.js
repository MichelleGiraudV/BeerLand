//HOME RUTAS PRINCIPALES
const express =require('express');
const router = express.Router();
const path = require('path');
const productController = require("../controllers/productController");


router.get('/detalle-producto', productController.detalleDeProducto);

router.get('/carrito-de-compras', productController.carritoDeCompras);

//* 1
//listado de porductos
router.get('/ListaProductos', productController.ListaProductos);
//* 2
//Render la vista GET 
router.get('/crear', productController.crearProducto);
//* 3 
//! FALTA
//Detalle de producto particular
router.get('/:id/',productController.detallesDeUnProducto);
//* 4 
//Acción de creación (a donde se envía el formulario)
router.post('/',productController.guardarProducto);
//* 5 
//mostrar el formulario
router.get('/:id/editar-producto', productController.editarProducto);
//* 6 
//! FALTA
router.put('/:id',productController.actualizacionProducto);
//*7
//! FALTA
router.delete('/:id',productController.eliminar);

module.exports = router;