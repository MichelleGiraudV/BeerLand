//access and interact with the file system.
const fs = require('fs');
const path = require('path');
//guardar la ruta hacia donde est a la base de datos
const productsFilePath = path.join(__dirname,'../data/products.json');
// readFileSync-- read the file and return its content.
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
    detalleDeProducto: (req,res)=>{
        res.render(path.join('./products/detalle-producto'),{products});
    },
    ListaProductos: (req,res)=>{
        return res.render("./products/ListaProductos",{products});
    },
    carritoDeCompras: (req,res)=>{
        res.render(path.join('./products/carrito-de-compras'));
    },
    editarProducto: (req,res)=>{
         //guardar el id
         const id = req.params.id;
         //obtenemos un array de porductos
         const product= products.find(product=>product.id == id)
         return res.render(path.join('./products/editar-producto'),{product});
    },
    crearProducto: (req,res)=>{
        res.render(path.join('./products/crear-producto'));
    },
    guardarProducto:(req,res)=>{
        res.send("Producto creado");
    },
    detallesDeUnProducto: (req,res)=>{
        //guardar el id
        const id = req.params.id;
        //obtenemos un array de porductos
        const product= products.find(product=>product.id == id)
        return res.render(path.join('./products/detalle-producto'),{product});
    },
    actualizacionProducto: (req,res)=>{
        res.render("producto editado");
    },
    eliminar: (req,res)=>{
        res.render("producto eliminado");
    }

}
module.exports = controller;