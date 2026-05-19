const API_URL = "http://localhost:3000/category";

// GET CATEGORY

export async function getCategory(search=""){
    const response = await fetch(
        `${API_URL}?search=${search}`
    )
    if (!response.ok){
        throw new Error("Failed to get category")
    }
    return response.json();
}

// CREATE CATEGORY

export async function createCategory(categoryData){
    const response = await fetch(
        API_URL,
        {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(categoryData)
        }
    );

    if (!response.ok) {
        throw new Error("Failed to create category")
    }

    return response.json();
}

// UPDATE CATEGORY

export async function updateCategory(categoryData) {

    const response = await fetch (
        API_URL,
        {
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(categoryData)
        }
    );

    if (!response.ok) {
        throw new Error("Failed to update category")
    }

    return response.json();
}

// DELETE CATEGORY

export async function deleteCategory(id) {
    const response = await fetch (
        `${API_URL}/${id}`,
        {
            method:"DELETE"
        }
    );

    if (!response.ok) {
        throw new Error("Failed to delete category")
    }

    return response.json();
}