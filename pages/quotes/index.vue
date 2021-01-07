<template>
  <div
    class="m-10 flex flex-col items-center space-y-4 min-h-screen text-center md:m-20"
  >
    <button
      type="button"
      class="text-xl bg-teal-700 py-1 px-2 rounded hover:bg-teal-400"
      @click="showQuote"
    >
      Get Inspiration
    </button>
    <div
      v-if="currentQuote"
      class="flex flex-col items-center justify-center space-y-4"
    >
      <h2 class="text-xl">{{ currentQuote.text }}</h2>
      <p v-if="currentQuote.author" class="md:self-end">
        - {{ currentQuote.author }}
      </p>
      <img
        :src="imgSrc"
        alt="random image from https://picsum.photos"
        class="rounded"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Quotes',
  async fetch() {
    this.quotes = await fetch('https://type.fit/api/quotes').then((res) =>
      res.json()
    )
  },
  data() {
    return {
      quotes: [],
      currentQuote: null,
      imgSrc: 'https://picsum.photos/400/500',
      imgOptions: [
        '/300',
        '/200/300',
        '/200/300?grayscale',
        '/300?grayscale',
        '/500',
        '/500?grayscale',
        '/600',
        '/600?grayscale',
        '/400/500',
        '/400/500?grayscale',
      ],
    }
  },
  methods: {
    showQuote() {
      this.currentQuote = this.quotes[
        Math.floor(Math.random() * this.quotes.length - 1)
      ]
      this.imgSrc = `https://picsum.photos${
        this.imgOptions[Math.floor(Math.random() * this.imgOptions.length)]
      }`
    },
  },
}
</script>
