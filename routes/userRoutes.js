const express =require('express');
const router = express.Router();
const path = require('path');
const userController = require("../controllers/userController");
//__dirname estoy dentro de routes
router.get('/login', userController.login);

router.get('/registro', userController.registro);

router.get('/registro2', userController.registro2);


module.exports = router;