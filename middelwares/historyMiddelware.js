//dejar registro de donde entro el usuario 
const fs =require('fs');

function historyMiddelware(req,res,next){
    fs.appendFileSync('history.txt','Se ingreso en la página ' + req.url);
    next();
}

module.exports = historyMiddelware;