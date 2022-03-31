const express = require('express');
const { dirname } = require('path');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3030;
const mainRouter = require("./routes/mainRoutes");
const productRouter = require("./routes/productRoutes");
const userRouter = require("./routes/userRoutes");

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

