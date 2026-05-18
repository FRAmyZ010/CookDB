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

// CREATE NEW CATEGORY
router.post("/",(req,res)=>{
    const name = req.body.name;
    const creatCat = `
    INSERT INTO categories (name) VALUES (?);
    `;

    db.run(creatCat,[name],(err)=>{
        if(err){
            return res.status(500).json({error:err.message})
        }
        res.status(201).json({
            message:`Created category "${name}" successfully!`,
            id : this.lastID
        })
    })
})

// UPDATE CATEGORY
router.put("/:id",(req,res)=>{
    const id = req.params.id;
    const name = req.body.name;

    const updtCat = `UPDATE categories SET name = ? WHERE id = ?`;
    
    db.run(updtCat,[name, id],(err,result)=>{
        if(err){
            return res.status(500).json({
                err:err.message
            })
        }
        
        res.status(201).json({
            message:"Updated successfully!",
            id:id,
            name:name
        })
    })
})

module.exports = router