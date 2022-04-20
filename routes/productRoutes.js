//HOME RUTAS PRINCIPALES
const express =require('express');
const router = express.Router();
const path = require('path');
const productController = require("../controllers/productController");
//methodOverride
const methodOverride = require('method-override');
//para no pisar el POST con el PUT y DELETE
router.use(methodOverride('_method'));

router.get('/detalle-producto', productController.detalleDeProducto);



router.get('/carrito-de-compras', productController.carritoDeCompras);

//* 1
//listado de porductos
router.get('/ListaProductos', productController.ListaProductos);
//* 2
//Render la vista GET 
router.get('/crear', productController.crearProducto);
//* 3
//Detalle de producto particular
router.get('/:id/',productController.detallesDeUnProducto);
//* 4 
//Acción de creación (a donde se envía el formulario)
router.post('/',productController.guardarProducto);
//* 5 
router.get('/:id/editar-producto', productController.editarProducto);
//* 6 
router.put('/:id',productController.actualizacionProducto);
//*7
router.delete('/:id',productController.eliminar);

module.exports = router;