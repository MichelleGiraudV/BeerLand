//access and interact with the file system.
const fs = require('fs');
const path = require('path');
//guardar la ruta hacia donde est a la base de datos
const productsFilePath = path.join(__dirname,'../data/users.json');
// readFileSync-- read the file and return its content.
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const controller = {
    login: (req,res)=>{
        res.render(path.join('./users/login'));
    },
    registro: (req,res)=>{
        res.render(path.join('./users/registro'));
    },
    registro2: (req,res)=>{
        res.render(path.join('./users/registro2'));
    }
}
module.exports = controller;