const express = require('express');
const bcrypt = require('bcryptjs');
const { dirname } = require('path');
const app = express();
const path = require('path');
const mainRouter = require("./routes/mainRoutes");
const productRouter = require("./routes/productRoutes");
const userRouter = require("./routes/userRoutes");

var session = require('express-session');
var historyMiddelware = require("./middelwares/historyMiddelware");
//methodOverride
const methodOverride = require('method-override');

const PORT = process.env.PORT || 3030;
//para no pisar el POST con el PUT y DELETE
app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname,'public')));
//ejs
app.set("view engine","ejs");
app.set("views","./views");

app.use(historyMiddelware);
//un middelware que recibe la info de un fomulario
app.use(express.urlencoded({extended: false}))
app.use(session({secret: 'Prueba'}));

app.use("/", mainRouter);
app.use("/product", productRouter);
app.use("/user", userRouter);

app.listen(PORT, ()=>{
    console.log(`este servidor esta sirviendo en el puerto ${PORT}`);
});