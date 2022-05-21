//access and interact with the file system.
const fs = require('fs');
const path = require('path');
//guardar la ruta hacia donde est a la base de datos
const productsFilePath = path.join(__dirname,'../data/users.json');
// readFileSync-- read the file and return its content.
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const jsonTable = require('../data/jsonMethods');
const groupsModel = jsonTable('users');
const { runInNewContext } = require('vm');
const { groupEnd } = require('console');
const { validationResult } = require('express-validator');

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
        const resultValidation = validationResult(req);
        if(resultValidation.errors.length > 0){
            return res.render(path.join('./users/registro2'), {
                errors: resultValidation.mapped()
            });
        }
        let group = req.body;
        group.image = req.file.filename;
        groupId_user = groupsModel.create(group);
        return res.send("Registro creado");
    }
}
module.exports = controller;