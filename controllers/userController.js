//access and interact with the file system.
const { groupEnd } = require('console');
const fs = require('fs');
const path = require('path');
const { runInNewContext } = require('vm');
//guardar la ruta hacia donde est a la base de datos
const productsFilePath = path.join(__dirname,'../data/users.json');
// readFileSync-- read the file and return its content.
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const jsonTable = require('../data/jsonMethods');
const groupsModel = jsonTable('users');

const controller = {
    login: (req,res)=>{
        res.render(path.join('./users/login'));
    },
    registro: (req,res)=>{
        res.render(path.join('./users/registro'));
    },
    registro2: (req,res)=>{
        res.render(path.join('./users/registro2'));
    },
    guardarRegistro:(req,res)=>{
        console.log(req.file);
        let group = req.body;
        group.image = req.file.filename;
        groupsModel.create(group);
        return res.send("Registro creado");
    }
}
module.exports = controller;