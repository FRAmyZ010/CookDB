const express = require("express");
const router = express.Router();

const db = require("../database");


// GET ALL RECIPES and SEARCH by NAME
router.get("/", (req,res)=>{

    const search = req.query.search;
    const showRecipe = `SELECT * FROM recipes`;
    const showSearch = `SELECT * FROM recipes WHERE name LIKE ?`;

    if(search){
        db.all(showSearch,[`%${search}%`],(err,row)=>{
        if(err){
            res.status(500).json({
                err:err.message
            })
        }else{
            res.status(200).json(row)
        }
    })
    }else{
       db.all(showRecipe,(err,rows)=>{
        if(err){
            res.status(500).json({error: err.message});
        }
        res.status(200).json(rows);
    }) 
    }

    
})

// GET RECIPE by ID
router.get("/:id",(req,res)=>{
    const id = req.params.id;

    const getByID = `SELECT * FROM recipes WHERE id = ?`;

    db.all(getByID,[id],(err,row)=>{
        if(err){
            return res.status(500).json({
                error:err.message,
                message:"Error Get Recipes by ID"
            })
        }
        res.status(200).json(row)
    })
})

// CREATE NEW RECIPE
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

// DELETE RECIPES
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

// UPDATE RECIPES
router.put("/:id",(req,res)=>{
    const id = req.params.id;
    const {
        name,
        ingredients,
        instructions,
        image_url,
        category_id,
        cook_time,
        servings
     } = req.body;
    const updtRecipe = `
    UPDATE recipes 
    SET 
        name = ?,
        ingredients = ?,
        instructions = ?,
        image_url = ?,
        category_id = ?,
        cook_time = ?,
        servings = ?
     WHERE id = ?
    `;

    db.run(updtRecipe,[name, ingredients, instructions, image_url, category_id, cook_time, servings, id],(err)=>{
        if(err){
            return res.status(500).json({
                err:err.message
            })
        }
        res.json({
            message:"Recipe updated successfully!",
            updatedID: id
        })
    })
})

module.exports = router;
