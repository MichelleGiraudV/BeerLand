//access and interact with the file system.
const fs = require('fs');
const path = require('path');
const { route } = require('../routes/mainRoutes');
//guardar la ruta hacia donde est a la base de datos
const productsFilePath = path.join(__dirname,'../data/users.json');
// readFileSync-- read the file and return its content.
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
const jsonTable = require('../data/jsonMethods');
const groupsModel = jsonTable('users');
const { runInNewContext } = require('vm');
const { groupEnd } = require('console');
const { validationResult } = require('express-validator');

const User = require("../routes/users.js");
const res = require('express/lib/response');
const bcrypt = require('bcryptjs/dist/bcrypt');

const controller = {
    login: (req,res)=>{
        res.render(path.join('./users/login'));
    },
    processLogin: (req, res)=>{
        const errors = validationResult(req);

        if(errors.isEmpty()) {
            let usersJSON = fs.readFileSync('./data/users.json', {errors: errors.errors});
            let users;

            if (usersJSON == "") {
                users = [];
            } else {
                users = JSON.parse(usersJSON);
            }

            for (let i = 0; i < users.length; i++) {
                  if (users[i].email == req.body.email) {
                      if (bcrypt.compareSync(req.body.password, users[i].password)) {
                          var usuarioAlLoguearse = user[i];
                          break;
                      }
                  }
            }
            if (usuarioAlLoguearse == undefined) {
                res.render('./users/login', {errors: [
                    {msg: "Credenciales inválidas."}
                ]});
            }

            req.session.usuarioLogueado = usuarioAlLoguearse;
            res.render('success');

        } else {
            res.render(path.join('./users/login', {errors: errors.errors}));
        }

    },
    registro: (req,res)=>{
        res.render(path.join('./users/registro'));
    },
    registro2: (req,res)=>{
        res.render(path.join('./users/registro2'));
    },
    guardarRegistro:(req,res)=>{
        const resultValidation = validationResult(req);
        
        if (resultValidation.errors.length > 0) {
			return res.render(path.join('./users/registro2'), {
				errors: resultValidation.mapped(),
                oldData: req.body
			});
		}

        let group = req.body;
        group.image = req.file.filename;
        groupId_user = groupsModel.create(group);
        User.create(req.body);
        return res.send("Registro creado");
    }
}
module.exports = controller;