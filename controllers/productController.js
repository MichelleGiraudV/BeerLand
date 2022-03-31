const path = require('path');

const controller = {
    detalleDeProducto: (req,res)=>{
        res.sendFile(path.join(__dirname,'../views/detalle-producto.html'));
    },
    ListaProductos: (req,res)=>{
        res.sendFile(path.join(__dirname,'../views/ListaProductos.html'));
    },
    carritoDeCompras: (req,res)=>{
        res.sendFile(path.join(__dirname,'../views/carrito-de-compras.html'));
    }
}
module.exports = controller;