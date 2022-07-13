const express =require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const path = require('path');
const userController = require("../controllers/userController");
const multer = require('multer');
//methodOverride
const methodOverride = require('method-override');
const { registro } = require('../controllers/userController');
const { body, check } = require('express-validator');
let historyDBMiddelware = require('../middelwares/historyDBMiddelware');
var app = express()

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null,path.join(__dirname,'../public/img/users'));
    },
    filename: (req, file, callback) => {
        let imageUserNewName = "userProfilePicture-" + Date.now() + path.extname(file.originalname);
        callback(null,imageUserNewName);
    }
})
//ejecucion de multer
const upload = multer({storage});

const validations= [
    //notEmpty no puede estar vacio
    body('firstName').notEmpty().withMessage('Tienes que escribir un nombre').isLength({ min: 2}).withMessage('Tienes que escribir un nombre valido'),
    body('lastName').notEmpty().withMessage('Tienes que escribir un apellido').isLength({ min: 2}).withMessage('Tienes que escribir un apellido valido'),
    body('emailUser').notEmpty().withMessage('Tienes que escribir un correo').bail()
        .isEmail().withMessage('Debes de escribir un formato de correo válido'),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña').isLength({ min: 8}).withMessage('Tienes que escribir una contraseña con más de 8 caracteres'),
    body('userImage').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif'];
		
		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	})
]


//__dirname estoy dentro de routes
router.get('/login', userController.login);

router.post('/login', [
    check('email').isEmail(),
    check('password')
],
 userController.processLogin);

router.get('/registro2',userController.registro2);

router.post('/registro2',historyDBMiddelware, upload.single('userImage'),validations,userController.guardarRegistro);


module.exports = router;