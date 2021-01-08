<template>
  <div
    class="m-10 flex flex-col items-center space-y-4 min-h-screen text-center md:m-20"
  >
    <img v-if="imageUrl" :src="imageUrl" :alt="quote.text" />
    <div class="w-1/2 mx-auto">
      <h2 class="text-xl">{{ quote.text }}</h2>
      <p v-if="quote.author" class="md:self-end">- {{ quote.author }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cats',
  data() {
    return {
      index: null,
      quote: null,
    }
  },
  computed: {
    quotes() {
      return this.$store.state.cats.quotes
    },
    imageUrl() {
      return this.quote.text.length < 60
        ? `https://cataas.com/cat/cute/says/${this.quote.text}`
        : 'https://cataas.com/cat'
    },
  },
  created() {
    this.index = Math.floor(Math.random() * this.quotes.length)
    this.quote = this.quotes[this.index]
  },
}
</script>
