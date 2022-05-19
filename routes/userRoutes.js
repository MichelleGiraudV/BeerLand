const express =require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const path = require('path');
const userController = require("../controllers/userController");
const multer = require('multer');
//methodOverride
const methodOverride = require('method-override');
const { registro } = require('../controllers/userController');
var app = express()
let historyDBMiddelware = require('../middelwares/historyDBMiddelware');

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
//ejecucion de multer
const upload = multer({storage});

//__dirname estoy dentro de routes
router.get('/login', userController.login);

router.get('/registro2',userController.registro2);

router.post('/registro2',historyDBMiddelware, upload.single('UserImage') ,userController.guardarRegistro);


module.exports = router;