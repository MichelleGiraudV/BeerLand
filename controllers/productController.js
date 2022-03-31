const path = require('path');

const controller = {
    detalleDeProducto: (req,res)=>{
        res.render(path.join('detalle-producto.'));
    },
    ListaProductos: (req,res)=>{
        res.render(path.join('ListaProductos'));
    },
    carritoDeCompras: (req,res)=>{
        res.render(path.join('carrito-de-compras'));
    }
}
module.exports = controller;