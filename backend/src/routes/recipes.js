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
            res.status(201).json({
                message: "Recipe added successfully",
                id: this.lastID
            });
        }
     })
})

router.delete("/:id",(req,res)=>{
    const id = req.params.id;

    const deleteRecipe = `DELETE FROM recipes WHERE id = ?`;

    db.run(deleteRecipe,[id],(err)=>{
        if(err){
            return res.status(500).json({
                error: err.message,
                message: "Error deleting recipe"
            })
        }
        if (this.changes === 0){
            return res.status(404).json({
                message: "Recipe not found"
            })
        }

        res.status(200).json({
            message: "Recipe deleted successfully",
            id:id
        })
    })
})

module.exports = router;
