//access and interact with the file system.
const fs = require('fs');
const path = require('path');
//guardar la ruta hacia donde esta la base de datos
const productsFilePath = path.join(__dirname,'../data/products.json');
// readFileSync-- read the file and return its content.
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
    detalleDeProducto: (req,res)=>{
        res.render(path.join('./products/detalle-producto'),{products});
    },
    ListaProductos: (req,res)=>{
        const Alemania = products.filter(product => product.country == 'Alemania');
        const PaisesBajos = products.filter(product => product.country == 'Paises Bajos');
        const Bélgica = products.filter(product => product.country == 'Bélgica');
        const Inglaterra = products.filter(product => product.country == 'Inglaterra');
        const Mexico = products.filter(product => product.country == 'México');
        const Argentina = products.filter(product => product.country == 'Argentina');
        const Espana = products.filter(product => product.country == 'España');
        return res.render("./products/ListaProductos",{Alemania,PaisesBajos,Bélgica,Inglaterra,Mexico,Argentina,Espana});
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
        return res.render(path.join('./products/crear-producto'));
    },
    guardarProducto:(req,res)=>{
        return res.send("Producto creado");
    },
    detallesDeUnProducto: (req,res)=>{
        //guardar el id
        const id = req.params.id;
        //obtenemos un array de porductos
        const product= products.find(product=>product.id == id)
        return res.render(path.join('./products/detalle-producto'),{product});
    },
    actualizacionProducto: (req,res)=>{
        return res.render("producto editado");
    },
    eliminar: (req,res)=>{
        return res.render("producto eliminado");
    }

}
module.exports = controller;