<script>
    
	import { toggleIngredientExpired,  deleteIngredient } from "../stores/ingredientStore";
    /**
	 * @type {{ completed: boolean; id: string; text: string; }}
	 */
     export let ingredient;

</script>

<li class="bg-white flex-items-center shadow-sm border border-gray-200 rounded-lg my-2 py-2 px-4 list-none">
    <input type="checkbox" name="completed" checked={ingredient.completed} on:change={() => toggleIngredientExpired(ingredient.id)} class="mr-2 form-checkbox h-5 w-5"/>
    <span class={`flex-1 text-gray-800 ${ingredient.completed ? 'line-through' : ''}`} >{ingredient.text}</span>
</li>