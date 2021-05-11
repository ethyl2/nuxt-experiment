<style scoped>
.hero-image {
  animation: fade-in 2s ease-in forwards;
}

.tooltip {
  position: relative;
  display: inline-block;
}

.tooltiptext {
  visibility: hidden;
  width: 250px;
  text-align: center;
  border-radius: 6px;
  padding: 20px;
  position: absolute;
  z-index: 1;
  bottom: 80%;
  left: 50%;
  margin-left: -125px;
  /* Fade in tooltip - takes 1 second to go from 0% to 100% opac: */
  opacity: 0;
  transition: opacity 1s;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

.tooltip .tooltiptext::after {
  content: ' ';
  position: absolute;
  top: 100%; /* At the bottom of the tooltip */
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: black transparent transparent transparent;
}

.main-title {
  background-color: #b80e52;
  animation-name: color-change;
  animation-duration: 4s;
  animation-iteration-count: 2;
  animation-direction: alternate;
}
.recipe-photo {
  animation-name: multi-color-change;
  animation-duration: 4s;
  animation-fill-mode: forwards;
}
.moving-text {
  animation-name: move-and-change-color;
  animation-duration: 10s;
  animation-delay: 2s;
}
.mocktails-graphic {
  animation-name: move-backwards;
  animation-duration: 5s;
  animation-direction: reverse;
  animation-timing-function: ease-in-out;
}
@keyframes fade-in {
  from {
    opacity: 0.1;
  }
  to {
    opacity: 1;
  }
}
@keyframes color-change {
  from {
    background-color: #b80e52;
  }
  to {
    background-color: yellow;
  }
}
@keyframes multi-color-change {
  0% {
    border-color: #b80e52;
  }
  25% {
    border-color: yellow;
  }
  50% {
    border-color: blue;
  }
  75% {
    border-color: green;
  }
  100% {
    border-color: black;
  }
}
@keyframes move-and-change-color {
  0% {
    background-color: #b80e52;
    left: 0px;
    top: 0px;
  }
  10% {
    background-color: yellow;
    left: 100px;
    top: 0px;
  }
  20% {
    background-color: blue;
    left: 100px;
    top: 100px;
  }
  30% {
    background-color: green;
    left: 0px;
    top: 100px;
  }
  40% {
    background-color: #b80e52;
    left: 0px;
    top: 0px;
  }
  50% {
    background-color: yellow;
    left: -100px;
    top: 0px;
  }
  60% {
    background-color: blue;
    left: -100px;
    top: 100px;
  }
  70% {
    background-color: green;
    left: 0px;
    top: 100px;
  }
  100% {
    background-color: #b80e52;
    left: 0px;
    top: 0px;
  }
}
@keyframes move-backwards {
  from {
    left: 0px;
  }
  to {
    left: 200px;
  }
}
</style>
<template>
  <div
    class="flex flex-col items-center justify-start bg-orange-100 rounded mx-5 pb-20 md:mx-20"
  >
    <img src="/mocktails/mocktails.jpg" alt="mocktails" class="hero-image" />
    <div class="tooltip relative cursor-pointer">
      <h1 class="main-title text-3xl p-2 rounded mt-2 text-black font-bold">
        Mocktails
      </h1>
      <span class="tooltiptext text-white bg-black"
        >Mocktails are non-alcoholic drinks made with a mixture of various
        ingredients, mixed in just the right ratios.</span
      >
    </div>
    <img
      src="/mocktails/mocktail-graphic.png"
      alt="mocktails in different colors"
      class="mocktails-graphic relative"
    />
    <div
      v-for="(recipe, index) in recipes"
      :key="recipe.name"
      class="flex flex-col justify-center items-center w-full my-4 md:w-3/4 lg:w-1/2 md:justify-between"
      :class="[index % 2 == 0 ? 'md:flex-row-reverse' : 'md:flex-row']"
    >
      <div class="mb-2 p-4 flex flex-col items-start justify-center">
        <h2 class="font-bold text-2xl">
          {{ recipe.name }}
        </h2>
        <div v-for="ingredient in recipe.ingredients" :key="ingredient.name">
          <p class="text-black font-semibold">
            {{ ingredient.amount }} oz. {{ ingredient.name }}
          </p>
        </div>
        <p class="text-black mt-2">{{ recipe.directions }}</p>
      </div>
      <img
        v-if="recipe.photo"
        :src="`/mocktails/${recipe.photo}`"
        :alt="recipe.name"
        class="recipe-photo w-32 rounded border-4 md:w-64"
      />
    </div>
    <div class="moving-text p-4 bg-black rounded my-4 relative">
      <h2 class="text-white">Which one will you try today?</h2>
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
          photo: '/oh-my-gosh.jpg',
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
        {
          name: 'Kiss on the Lips',
          ingredients: [
            { name: 'cherry juice', amount: 2 },
            { name: 'apricot nectar', amount: 7 },
          ],
          directions: 'Serve over ice with straw.',
          photo: '/kiss-lips.jpg',
        },
        {
          name: 'Hot Gold',
          ingredients: [
            { name: 'orange juice', amount: 6 },
            { name: 'peach nectar', amount: 3 },
          ],
          directions: 'Serve warm in mug.',
          photo: '/hot-gold.jpg',
        },
        {
          name: 'Year-Round Christmas',
          ingredients: [
            { name: 'cranberry juice', amount: 2 },
            { name: 'orange juice', amount: 2 },
            { name: 'seltzer', amount: 4 },
          ],
          directions:
            'Serve with orange slices, apple slices, cranberries, and basil leaves.',
          photo: '/sangria.jpg',
        },
      ],
    }
  },
}
</script>
