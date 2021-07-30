<template>
  <div
    class="flex flex-col items-center justify-center cursor-pointer text-xs transform hover:scale-105 md:text-base overflow-y-auto bg-white text-black p-4 rounded-3xl m-2 max-w-sm"
    :style="`border: 8px solid ${getColor()};`"
    tabindex="0"
    @click="showAnswer = !showAnswer"
    @keyup.enter="showAnswer = !showAnswer"
  >
    <p class="font-semibold text-center">
      <span class="font-bold">Q:</span> {{ joke.question }}
    </p>
    <p v-if="showAnswer" class="font-semibold text-center">
      <span class="font-bold">A:</span> {{ joke.answer }}
    </p>
    <p v-else class="font-semibold text-center">????????????????</p>
  </div>
</template>

<script>
export default {
  name: 'Joke',
  props: {
    joke: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showAnswer: false,
    }
  },
  methods: {
    getColor() {
      const colors = [
        '#e2d810',
        '#d9138a',
        '#12a4d9',
        '#d13ca4',
        '#ffea04',
        '#fe3a9e',
      ]
      const randomIndex = Math.floor(Math.random() * colors.length)
      return colors[randomIndex]
    },
  },
}
</script>
