<template>
  <div class="min-h-screen">
    <h1
      class="text-center text-xl md:text-3xl my-4 font-bold"
      style="color: #e2d810"
    >
      Favorite Jokes
    </h1>
    <main class="mx-4 flex flex-wrap justify-evenly items-stretch md:mx-20">
      <div
        v-for="(joke, index) in jokes"
        :key="index"
        class="bg-white text-black p-4 rounded-3xl m-2 max-w-sm flex flex-col justify-center items-start"
        :style="`border: 8px solid ${joke.borderColor};`"
      >
        <p class="font-semibold">
          <span class="font-bold">Q:</span> {{ joke.question }}
        </p>
        <p class="font-semibold">
          <span class="font-bold">A:</span> {{ joke.answer }}
        </p>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  name: 'Jokes',
  data() {
    return {
      jokes: [
        {
          question: "What do you call a snake that's shed its skin?",
          answer: 'Naked.',
          borderColor: this.getColor(),
        },
        {
          question: 'What do you call Santa at the South Pole?',
          answer: 'A lost Claus.',
          borderColor: this.getColor(),
        },
        {
          question: 'What side of a cat has the most fur?',
          answer: 'The outside.',
          borderColor: this.getColor(),
        },
        {
          question:
            'What did the buffalo say when he dropped his son off at school?',
          answer: 'Bye son.',
          borderColor: this.getColor(),
        },
        {
          question: 'Why was the pig in the kitchen?',
          answer: 'It was bacon.',
          borderColor: this.getColor(),
        },
        {
          question: "Why aren't koalas actual bears?",
          answer: "They don't meet the koalafications.",
          borderColor: this.getColor(),
        },
        {
          question: "What's smarter than a talking parrot?",
          answer: 'A spelling bee.',
          borderColor: this.getColor(),
        },
      ],
      colors: ['#e2d810', '#d9138a', '#12a4d9'],
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
