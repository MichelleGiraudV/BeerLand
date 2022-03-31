const path = require('path');

const controller = {
    detalleDeProducto: (req,res)=>{
        res.render(path.join('./products/detalle-producto'));
    },
    ListaProductos: (req,res)=>{
        const products = [
            {
                Nombre:"Producto1",
                Precio:"$50.000",
                Estrellas:"5" 
            },
            {
                Nombre:"Producto2",
                Precio:"$50.000",
                Estrellas:"5" 
            },
            {
                Nombre:"Producto3",
                Precio:"$50.000",
                Estrellas:"4" 
            },
            {
                Nombre:"Producto4",
                Precio:"$50.000",
                Estrellas:"5" 
            },
            {
                Nombre:"Producto5",
                Precio:"$50.000",
                Estrellas:"5" 
            },
            {
                Nombre:"Producto6",
                Precio:"$50.000",
                Estrellas:"5" 
            },
            {
                Nombre:"Producto7",
                Precio:"$50.000",
                Estrellas:"4" 
            },
            {
                Nombre:"Producto8",
                Precio:"$50.000",
                Estrellas:"5" 
            },
            {
                Nombre:"Producto8",
                Precio:"$50.000",
                Estrellas:"5" 
            }
        ];
        res.render("./products/ListaProductos",{products: products});

        res.render(path.join('./products/ListaProductos'));
    },
    carritoDeCompras: (req,res)=>{
        res.render(path.join('./products/carrito-de-compras'));
    },
    editarProducto: (req,res)=>{
        res.render(path.join('./products/editar-producto'));
    },
    crearProducto: (req,res)=>{
        res.render(path.join('./products/crear-producto'));
    }

}
module.exports = controller;