//access and interact with the file system.
const { groupEnd } = require('console');
const fs = require('fs');
const path = require('path');
const { runInNewContext } = require('vm');
const { route } = require('../routes/mainRoutes');
//guardar la ruta hacia donde est a la base de datos
const productsFilePath = path.join(__dirname,'../data/users.json');
// readFileSync-- read the file and return its content.
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const jsonTable = require('../data/jsonMethods');
const groupsModel = jsonTable('users');

const User = require("../routes/users.js");

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
        let group = req.body;
        group.image = req.file.filename;
        groupId_user = groupsModel.create(group);
        User.create(req.body);
        return res.send("Registro creado");
    }
}
module.exports = controller;