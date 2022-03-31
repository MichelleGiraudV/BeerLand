//HOME RUTAS PRINCIPALES
const express =require('express');
const router = express.Router();
const path = require('path');
const mainController = require("../controllers/mainController");
//__dirname estoy dentro de routes
router.get('/', mainController.main);

router.post('/', mainController.main);


module.exports = router;