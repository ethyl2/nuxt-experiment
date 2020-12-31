<template>
  <section class="py-6 mt-8 border-t flex flex-col space-y-3">
    <h2 class="text-xl font-bold text-center">A Few Examples</h2>
    <div
      v-for="(example, index) in examples"
      :key="index"
      class="flex flex-wrap justify-between items-center space-x-2 mx-auto w-full md:w-1/3 flex-col md:flex-row"
    >
      <p>{{ example.word }}</p>
      <div class="flex flex-wrap items-center space-x-2">
        <p
          v-for="(symbol, symbolsIndex) in example.symbols"
          :key="symbolsIndex"
          class="border p-1 rounded font-bold text-xs md:text-lg"
          :style="{ border: `4px solid #${getColor(symbol)}` }"
        >
          {{ symbol }}
        </p>
      </div>
    </div>
    <a
      href="https://sciencenotes.org/list-words-made-periodic-table-element-symbols/"
      target="_blank"
      class="mx-auto"
      >See More Examples</a
    >
  </section>
</template>

<script>
export default {
  name: 'WordExamples',
  computed: {
    elements() {
      return this.$store.state.elements.all
    },
    examples() {
      return this.$store.state.elements.examples
    },
  },
  methods: {
    getColor(symbol) {
      const currentElement = this.elements.find(
        (element) => element.symbol === symbol
      )
      return currentElement.cpkHexColor
    },
  },
}
</script>
