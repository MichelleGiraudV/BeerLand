const path = require('path');

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