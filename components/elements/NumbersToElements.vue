<template>
  <section>
    <form
      class="flex flex-col justify-center items-center mt-8 pt-6 border-t"
      @submit.prevent="convertNumbersToElements"
    >
      <label
        for="number-input"
        class="text-center mx-auto w-full font-bold text-base md:text-xl text-orange-400"
        >Convert a Number Sequence Back to Elements</label
      >
      <div class="flex flex-wrap items-center justify-center space-x-2 w-full">
        <p class="text-xs text-center p-2 md:hidden">
          Type a number sequence here. Each atomic number should be separated by
          periods, e.g. 5.88.53.110
        </p>
        <input
          id="number-input"
          v-model="numberInput"
          type="text"
          class="text-black p-1 w-full md:w-4/6 rounded"
          placeholder="Each atomic number should be separated by periods, e.g. 5.88.53.110"
          required
        />
        <button
          type="submit"
          class="bg-black text-white rounded p-1 m-1 hover:bg-gray-700 text-xs md:text-base"
        >
          Convert
        </button>
        <button
          type="button"
          class="bg-black text-white rounded p-1 m-1 hover:bg-gray-700 text-xs md:text-base"
          @click="clearNumberInput"
        >
          Clear
        </button>
      </div>

      <p v-if="errorMessage" class="text-red-700">
        {{ errorMessage }}
      </p>
      <h3 v-if="numberResult" class="text-3xl text-center font-bold my-2">
        {{ numberResult }}
      </h3>
    </form>

    <div class="flex flex-wrap justify-center">
      <div
        v-for="element in numberResultArray"
        :key="element.atomicNumber"
        class="relative bg-white rounded p-1 m-1 w-20 h-20 flex flex-col"
        :style="{ border: `4px solid #${element.cpkHexColor}` }"
      >
        <p
          class="absolute text-right text-xs text-black my-0 ml-0 mr-1 p-0 top-0.5 right-0"
        >
          {{ element.atomicNumber }}
        </p>
        <p class="text-black text-center text-3xl font-bold m-0 p-0">
          {{ element.symbol }}
        </p>
        <p class="text-black text-center text-xs m-0 p-0">
          {{ element.name }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'NumbersToElements',
  data() {
    return {
      numberInput: '',
      numberResult: '',
      numberResultArray: [],
      errorMessage: '',
    }
  },
  computed: {
    elements() {
      return this.$store.state.elements.all
    },
  },
  watch: {
    numberInput() {
      this.errorMessage = ''
    },
  },
  methods: {
    convertNumbersToElements() {
      this.numberResultArray = []
      const allowedChars = /^[0-9.]+$/
      if (this.numberInput.match(allowedChars)) {
        const nums = this.numberInput.split('.')
        let result = ''
        nums.forEach((num) => {
          if (num <= 118) {
            const currentElement = this.elements.find(
              (element) => element.atomicNumber === parseInt(num)
            )
            if (currentElement) {
              result += currentElement.symbol.toLowerCase()
              this.numberResultArray.push(currentElement)
            }
          } else {
            this.errorMessage =
              'Sorry, the highest atomic number we can handle is 118. Please check your sequence and try again.'
          }
        })
        this.numberResult = result
      } else {
        this.errorMessage =
          'Sorry, your sequence was not formatted correctly. Please check your sequence and try again.'
      }
    },
    clearNumberInput() {
      this.numberResult = ''
      this.numberResultArray = []
      this.numberInput = ''
    },
  },
}
</script>
