<script>
	import { addIngredient } from "../stores/ingredientStore";

    let ingredient = ''

    const handleSubmit = () => {
        addIngredient(ingredient);
        ingredient = '';
    }
</script>
<form class="my-6" on:submit|preventDefault={handleSubmit}>
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
    <div class="relative">
        <input  bind:value={ingredient} type="search" id="default-search" class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" placeholder="Insert fridge item" required>
        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-500 hover:bg-blue-800  focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">+</button>
    </div>
</form>
