const express = require('express');
const bcrypt = require('bcryptjs');
const { dirname } = require('path');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3030;
const mainRouter = require("./routes/mainRoutes");
const productRouter = require("./routes/productRoutes");
const userRouter = require("./routes/userRoutes");
//methodOverride
const methodOverride = require('method-override');
//para no pisar el POST con el PUT y DELETE
app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname,'public')));
//ejs
app.set("view engine","ejs");
app.set("views","./views");

app.use("/", mainRouter);

app.use("/product", productRouter);

app.use("/user", userRouter);

app.listen(PORT, ()=>{
    console.log(`este servidor esta sirviendo en el puerto ${PORT}`);
});