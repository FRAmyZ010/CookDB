const express = require('express');
const cors = require('cors');
const app = express();

// IMPORT ROUTES //

const recipesRoutes = require('./routes/recipes');

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.json({
        message: "Welcome to the CookDB"
    });
});

app.use("/recipes",recipesRoutes);

module.exports = app;