const path = require('path');

const controller = {
    login: (req,res)=>{
        res.sendFile(path.join(__dirname,'../views/login.html'));
    },
    registro: (req,res)=>{
        res.sendFile(path.join(__dirname,'../views/registro.html'));
    },
    registro2: (req,res)=>{
        res.sendFile(path.join(__dirname,'../views/registro2.html'));
    }
}
module.exports = controller;