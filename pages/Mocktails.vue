<style scoped>
.main-title {
  background-color: red;
  animation-name: color-change;
  animation-duration: 4s;
}
@keyframes color-change {
  from {
    background-color: red;
  }
  to {
    background-color: yellow;
  }
}
</style>
<template>
  <div
    class="flex flex-col items-center justify-start bg-orange-100 rounded mx-5 md:mx-20"
  >
    <img src="/mocktails/mocktails.jpg" alt="mocktails" />
    <h1 class="main-title text-2xl p-2 rounded mt-2 text-black">Mocktails</h1>
    <div
      v-for="recipe in recipes"
      :key="recipe.name"
      class="flex justify-around w-full"
    >
      <div>
        <h2>{{ recipe.name }}</h2>
        <div v-for="ingredient in recipe.ingredients" :key="ingredient.name">
          <p class="text-black">
            {{ ingredient.amount }} oz. {{ ingredient.name }}
          </p>
        </div>
        <p class="text-black">{{ recipe.directions }}</p>
      </div>
      <img
        v-if="recipe.photo"
        :src="`/mocktails/${recipe.photo}`"
        :alt="recipe.name"
        class="w-64 rounded"
      />
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
          photo: '/blue-moon.jpg',
        },
      ],
    }
  },
}
</script>
