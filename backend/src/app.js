const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

// IMPORT ROUTES //

const recipesRoutes = require('./routes/recipes');
const categoryRoutes = require('./routes/category')
const uploadMiddleWare = require('./middleware/upload')

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get("/",(req,res)=>{
    res.json({
        message: "Welcome to the CookDB"
    });
});

app.use("/recipes",recipesRoutes);
app.use("/category",categoryRoutes);
app.use("/upload",uploadMiddleWare);

module.exports = app;