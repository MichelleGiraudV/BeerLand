const express = require('express');
const { dirname } = require('path');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3030;

app.use(express.static(path.join(__dirname,'public')));
app.listen(PORT, ()=>{
    console.log(`este servidor esta sirviendo en el puerto ${PORT}`);
});

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'views/home.html'))
});
app.post('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'views/home.html'))
});
app.get('/detalle-producto', (req,res)=>{
    res.sendFile(path.join(__dirname,'views/detalle-producto.html'));
});
app.get('/login', (req,res)=>{
    res.sendFile(path.join(__dirname,'views/login.html'));
});

app.get('/registro', (req,res)=>{
    res.sendFile(path.join(__dirname,'views/registro.html'));
});

app.get('/ListaProductos', (req,res)=>{
    res.sendFile(path.join(__dirname,'views/ListaProductos.html'));
});

app.get('/carrito-de-compras', (req,res)=>{
    res.sendFile(path.join(__dirname,'views/carrito-de-compras.html'));
});

app.get('/registro2', (req,res)=>{
    res.sendFile(path.join(__dirname,'views/registro2.html'));
});