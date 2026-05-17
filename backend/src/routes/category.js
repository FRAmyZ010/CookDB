const express = require("express");
const router = express.Router();

const db = require("../database");

// GET ALL CATEGORIES
router.get("/",(req,res)=>{
    const showCat = `
    SELECT *
    FROM categories
    `;

    db.all(showCat,(err,row)=>{
        if(err){
            return res.status(500).json({
                err:err.message
            })
        }
        res.status(200).json(row)
    })
})



module.exports = router