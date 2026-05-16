const express = require("express");
const router = express.Router();

const db = require("../database");

router.get("/", (req,res)=>{
    const showRecipe = `SELECT * FROM recipes`;

    db.all(showRecipe,(err,rows)=>{
        if(err){
            res.status(500).json({error: err.message});
        }
        res.status(200).json(rows);
    })
})

module.exports = router;
