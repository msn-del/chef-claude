import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import List from "./List"
import {getRecipes} from "./ai"

export default function Main() {


    const [ingredients, setIngredients] = React.useState([])
    const [recipe, setRecipe] = React.useState("")
    
    async function getRecipe() {
        const recipeMarkdown = await getRecipes(ingredients)
        setRecipe(recipeMarkdown)
    }

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <List list={ingredientsListItems} getRecipe={getRecipe} />
            {recipe && <ClaudeRecipe Recipe = {recipe} />}
            
        </main>
    )
}