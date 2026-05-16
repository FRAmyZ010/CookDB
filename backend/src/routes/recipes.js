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

router.post("/",(req,res)=>{
     const {
        name,
        ingredients,
        instructions,
        image_url,
        category_id,
        cook_time,
        servings
     } = req.body;

     const insertRecipe = `
        INSERT INTO recipes (
        name,
        ingredients,
        instructions,
        image_url,
        category_id,
        cook_time,
        servings
        )
        VALUES (?,?,?,?,?,?,?)
     `;

     db.run(insertRecipe, [name, ingredients, instructions, image_url, category_id, cook_time, servings],(err)=>{
        if(err){
            res.status(500).json({error: err.message});
            console.log("Error inserting recipe:", err.message);
        }
        else{
            res.status(201).json({message: "Recipe added successfully"});
        }
     })
})

module.exports = router;
