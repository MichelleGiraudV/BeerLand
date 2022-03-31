const path = require('path');

const controller = {
    login: (req,res)=>{
        res.render(path.join('login'));
    },
    registro: (req,res)=>{
        res.render(path.join('registro'));
    },
    registro2: (req,res)=>{
        res.render(path.join('registro2'));
    }
}
module.exports = controller;