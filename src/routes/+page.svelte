<script>
	import Ingredient from "../components/Ingredient.svelte";
import IngredientsForm from "../components/IngredientsForm.svelte";
	import { ingredients } from "../stores/ingredientStore";
</script>

<main class="flex flex-col items-center justify-between h-16" >
	<h1 class="text-2xl font-bold text-center text-gray-800 md:text-3xl p-8">
		WASTED
	</h1>
	<IngredientsForm/>
	{#each $ingredients as ingredient}
	<Ingredient ingredient={ingredient}/>
	{/each}
</main>