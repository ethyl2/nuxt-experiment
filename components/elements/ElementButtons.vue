<template>
  <section>
    <!-- Sorting -->
    <div class="flex flex-wrap justify-center">
      <button
        type="button"
        class="text-white rounded p-1 ml-3 mr-1 my-1 hover:bg-gray-700 text-xs md:text-base"
        :class="[
          sortKey === 'symbol'
            ? 'bg-gray-400 cursor-not-allowed opacity-50'
            : 'bg-black cursor-pointer opacity-100',
        ]"
        :disabled="sortKey === 'symbol'"
        @click="sortElementsBy('symbol')"
      >
        Sort by Symbol (Alphabetical)
      </button>
      <button
        type="button"
        class="text-white rounded p-1 m-1 hover:bg-gray-700 text-xs md:text-base"
        :class="[
          sortKey === 'atomicNumber'
            ? 'bg-gray-400 cursor-not-allowed opacity-50'
            : 'bg-black cursor-pointer opacity-100',
        ]"
        :disabled="sortKey === 'atomicNumber'"
        @click="sortElementsBy('atomicNumber')"
      >
        Sort by Atomic Number
      </button>
      <button
        type="button"
        class="bg-black text-white rounded p-1 m-1 hover:bg-gray-700 text-xs md:text-base"
        @click="shuffle"
      >
        Shuffle
      </button>
    </div>

    <!-- Buttons for Periodic Elements -->
    <div class="flex flex-wrap justify-center">
      <button
        v-for="element in elements"
        :key="element.atomicNumber"
        type="button"
        class="text-white font-bold m-1 p-1 text-sm md:text-lg rounded hover:text-black hover:bg-white"
        :style="{ border: `4px solid #${element.cpkHexColor}` }"
        @click="selectElement(element)"
      >
        {{ element.symbol }}
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ElementButtons',
  data() {
    return {
      elements: [],
      sortKey: null,
    }
  },
  mounted() {
    this.elements = JSON.parse(JSON.stringify(this.$store.state.elements.all))
  },
  methods: {
    sortElementsBy(key) {
      this.elements.sort((a, b) => (a[key] > b[key] ? 1 : -1))
      this.sortKey = key
    },
    shuffle() {
      this.elements.sort(() => 0.5 - Math.random())
      this.sortKey = null
    },
    selectElement(element) {
      this.$emit('select-element', element)
    },
  },
}
</script>
