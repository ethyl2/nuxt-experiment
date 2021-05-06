<template>
  <div class="mx-4 md:mx-10">
    <h1>Mocktails</h1>
    <div v-for="recipe in recipes" :key="recipe.name">
      <h2>{{ recipe.name }}</h2>
      <div v-for="ingredient in recipe.ingredients" :key="ingredient.name">
        <p>{{ ingredient.amount }} oz. {{ ingredient.name }}</p>
      </div>
      <p>{{ recipe.directions }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mocktails',
  data() {
    return {
      recipes: [
        {
          name: 'Oh My Gosh',
          ingredients: [
            { name: 'peach nectar', amount: 1.5 },
            { name: 'pineapple juice', amount: 1 },
          ],
          directions: 'Stir with ice; serve with lemon twist.',
        },
        {
          name: 'Blue Moon',
          ingredients: [
            { name: 'soda', amount: 1.5 },
            { name: 'blueberry juice', amount: 0.75 },
          ],
          directions: 'Stir with ice; serve with lemon twist.',
        },
      ],
    }
  },
}
</script>
