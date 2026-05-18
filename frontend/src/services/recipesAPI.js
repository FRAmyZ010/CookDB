
const API_URL = "http://localhost:3000/recipes";

// ===========================
// GET RECIPES
// ===========================

export async function getRecipes(search=""){
    const response = await fetch(
        `${API_URL}?search=${search}`
    );

    if (!response.ok){
        throw new Error("Failed to fetch recipes")
    }
    return response.json();
}

// ===========================
// GET RECIPES by ID
// ===========================

export async function getRecipesId(id){
    const response = await fetch(
        `${API_URL}/${id}`,
        {method:"GET"}
    );

    if(!response.ok){
        throw new Error("Recieps not found")
    }
    return response.json();
}

// ===========================
// CREATE RECIPES
// ===========================

export async function createRecipes(recipeData){
    const response = await fetch(API_URL,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(recipeData)
    })

    if(!response.ok){
        throw new Error("Failed to create recipes")
    }
    return response.json();
}

// ===========================
// UPDATE RECIPES
// ===========================

export async function updateRecipes(recipeData){
    const response = await fetch(API_URL,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(recipeData)

    });

    if(!response.ok){
        throw new Error("Failed to update recipes")
    }

    return response.json();
}

// ===========================
// DELETE RECIPES
// ===========================

export async function deleteRecipes(id){
    const response = await fetch(
        `${API_URL}/${id}`,
        {
            method:"DELETE"
        }
    );

    if (!response.ok){
        throw new Error("Failed to delete recipes")
    }
    return response.json();
}