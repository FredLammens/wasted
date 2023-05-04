<script>
	import { addIngredient } from "../stores/ingredientStore";

    let ingredient = ''

    const handleSubmit = () => {
        addIngredient(ingredient);
        ingredient = '';
    }
</script>
<form class="my-6" on:submit|preventDefault={handleSubmit}>
    <div class="flex flex-col text-sm mb-2">
        <label class="font-bold mb-2 text-gray-800" for="ingredient">Add item</label>
        <input bind:value={ingredient} class="placeholder:italic placeholder:text-slate-400  appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg" type="text" name="ingredient" placeholder="insert fridge item">
    </div>
    <button type="submit" class="w-full shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4">Submit</button>
</form>