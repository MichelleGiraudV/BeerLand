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
        const Argentina = products.filter(product => product.country == 'Argentina');
        const Belgica = products.filter(product => product.country == 'Bélgica');
        const Inglaterra = products.filter(product => product.country == 'Inglaterra');
        const Espana = products.filter(product => product.country == 'España');
        const Mexico = products.filter(product => product.country == 'México');
        const PaisesBajos = products.filter(product => product.country == 'Paises Bajos');
        return res.render("./products/ListaProductos",{Alemania,PaisesBajos,Belgica,Inglaterra,Mexico,Argentina,Espana});
    },
    carritoDeCompras: (req,res)=>{
        return res.render("./products/carrito-de-compras");
    },
    editarProducto: (req,res)=>{
         //guardar el id
         const id = req.params.id;
         //obtenemos un array de porductos
         const product= products.find(product => product.id == id)
         return res.render("./products/editar-producto",{product});
    },
    crearProducto: (req,res)=>{
        return res.render("./products/crear-producto");
    },
    guardarProducto:(req,res)=>{
        return res.send("Producto creado");
    },
    detallesDeUnProducto: (req,res)=>{
        //guardar el id
        const id = req.params.id;
        //obtenemos un array de porductos
        const product = products.find(product=>product.id == id)
        return res.render(path.join('./products/detalle-producto'),{product});
    },
    actualizacionProducto: (req,res)=>{
        const id = req.params.id;
        // products.forEach(product =>{
        //     if (product.id == id ){
        //         product.prod_name = req.body.productoNombre;
        //         //product.rating = req.body.id;
        //         product.description = req.body.productoDescripcion;
        //         product.price = req.body.productoPrecio;
        //         product.category = req.body.productoCategoria;
                // product.image = req.body.genero;
                // product.country = req.body.genero;
        return res.send("producto editado");
    },
    eliminar: (req,res)=>{
        return res.send(("producto eliminado"),{product});
    }

}
module.exports = controller;