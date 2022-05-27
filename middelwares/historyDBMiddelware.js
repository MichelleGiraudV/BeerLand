//registro de las rutas que creen cosas en la base de datos
const fs =require('fs');

function historyDBMiddelware(req,res,next){
    fs.appendFileSync('historyDB.txt','\n Se creo un resgistro al ingresar en la página ' + req.url);
    console
    next();
}

module.exports = historyDBMiddelware;