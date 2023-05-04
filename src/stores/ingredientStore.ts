import {  writable } from "svelte/store";
import type { Ingredient } from "../interfaces/ingredient.model";

export const ingredients = writable<Array<Ingredient>>([]);
//helper functions
export const addIngredient = (text:string) => {
    ingredients.update((current) => {
        const newIngredients = [...current, {text,completed:false, id:Date.now().toLocaleString()}];
        return newIngredients;
    })
}

export const deleteIngredient = (id:string) => {
    ingredients.update(ingredients => ingredients.filter(ingredient => ingredient.id !== id))
}

export const toggleIngredientExpired = (id:string) => {
    ingredients.update(
        ingredients => {
            let index = -1;
            for (let i = 0; i < ingredients.length; i++) {
                if(ingredients[i].id === id){
                    index = i;
                    break;
                }
            }
            if(index !== -1){
                ingredients[index].completed = !ingredients[index].completed;
            }
            return ingredients;
        }
    )
}

