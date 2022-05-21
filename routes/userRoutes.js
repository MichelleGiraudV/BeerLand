const express =require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const path = require('path');
const userController = require("../controllers/userController");
const multer = require('multer');
//methodOverride
const methodOverride = require('method-override');
const { registro } = require('../controllers/userController');
const { body } = require('express-validator');
let historyDBMiddelware = require('../middelwares/historyDBMiddelware');
var app = express()

const storage = multer.diskStorage({
    destination: (req, file, callback) => 
    {
        callback(null,path.join(__dirname,'../public/img/users'));
    },
    filename: (req, file, callback) =>
    {
        let imageUserNewName = "userProfilePicture-" + Date.now() + path.extname(file.originalname);
        callback(null,imageUserNewName);
    }
})
const validations= [
    //notEmpty no puede estar vacio
    body('firstName').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('lastName').notEmpty().withMessage('Tienes que escribir un apellido'),
    body('emailUser').notEmpty().withMessage('Tienes que escribir un correo'),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
]
//ejecucion de multer
const upload = multer({storage});

//__dirname estoy dentro de routes
router.get('/login', userController.login);

router.get('/registro2',userController.registro2);

router.post('/registro2',historyDBMiddelware, upload.single('UserImage'),validations,userController.guardarRegistro);


module.exports = router;