const path = require('path');

const controller = {
    main: (req,res)=>{
        //sendFile y no es html entonces se descarga
        res.render(path.join('home'))
    },
}
module.exports = controller;