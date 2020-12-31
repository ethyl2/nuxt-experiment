<template>
  <div class="m-2 md:m-4">
    <h1 class="mx-auto text-xl md:text-5xl font-bold text-center mb-2">
      Elemental Words
    </h1>
    <h2 class="mx-auto text-base md:text-lg text-center mb-2">
      Can you create words (real or imaginative) with symbols from the periodic
      table?
    </h2>
    <h3 class="text-sm md:text-base text-center mb-4">
      Click on the elements to create words and sequences of atomic numbers --
      which might be handy for creating passwords.
    </h3>

    <!-- Sorting -->
    <div class="flex flex-wrap justify-center">
      <button
        type="button"
        class="bg-black text-white rounded p-1 ml-3 mr-1 my-1 hover:bg-gray-700 text-xs md:text-base"
        @click="sortElementsBy('symbol')"
      >
        Sort by Symbol (Alphabetical)
      </button>
      <button
        type="button"
        class="bg-black text-white rounded p-1 m-1 hover:bg-gray-700 text-xs md:text-base"
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

    <!-- Display Results of Making Word -->
    <div v-if="elementString" class="flex flex-col justify-center items-center">
      <h3
        class="text-center font-bold my-2"
        :class="[
          elementString.length < 18 ? 'text-3xl' : 'text-lg md:text-2xl',
        ]"
      >
        {{ elementString }}
      </h3>
      <input id="element-string" v-model="elementString" type="hidden" />
      <div class="flex flex-wrap justify-center items-center">
        <button
          type="button"
          class="bg-black text-white rounded p-1 m-1 hover:bg-gray-700 text-xs md:text-base"
          @click="copyElementString"
        >
          Copy Word
        </button>
        <button
          type="button"
          class="bg-black text-white rounded p-1 m-1 hover:bg-gray-700 text-xs md:text-base"
          @click="clear"
        >
          Clear
        </button>
      </div>
    </div>

    <div class="flex flex-wrap justify-center my-2">
      <div
        v-for="(element, index) in selectedElements"
        :key="`${element.atomicNumber}-${index}`"
        class="relative bg-white rounded p-1 m-1 w-20 md:w-32 h-20 md:h-32 flex flex-col"
        :style="{ border: `2px solid #${element.cpkHexColor}` }"
      >
        <p
          class="absolute text-right text-xs text-black my-0 ml-0 mr-px md:mr-1 p-0 top-0 md:top-0.5 right-0"
        >
          {{ element.atomicNumber }}
        </p>
        <p
          class="text-black text-center text-3xl md:text-5xl font-bold m-0 p-0 md:leading-tight"
        >
          {{ element.symbol }}
        </p>
        <p
          class="text-black text-center font-bold m-0 p-0 truncate text-xs md:text-base"
        >
          {{ element.name }}
        </p>
        <p class="text-black text-center text-xs m-0 p-0 hidden md:block">
          {{ element.atomicMass }}
        </p>
        <p
          class="text-black text-center text-xs m-0 p-0 hidden md:block truncate"
        >
          {{ element.electronicConfiguration }}
        </p>
      </div>
    </div>

    <div
      v-if="numberString"
      class="flex justify-center items-center md:space-x-4 flex-col lg:flex-row"
    >
      <p
        class="text-white text-center font-bold"
        :class="[numberString.length < 18 ? 'text-lg' : 'text-sm md:text-lg']"
      >
        {{ numberString }}
      </p>
      <input id="number-string" v-model="numberString" type="hidden" />
      <button
        type="button"
        class="bg-black text-white rounded p-1 m-1 hover:bg-gray-700 text-xs md:text-base"
        @click="copyNumberString"
      >
        Copy Numbers
      </button>
    </div>

    <!-- Make image to download -->
    <canvas
      ref="wordCanvas"
      :width="canvasWidth"
      :height="canvasHeight"
      class="rounded mx-auto"
    />

    <!-- Convert Atomic Numbers to Symbols -->
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

    <!-- Examples of words made with symbols -->
    <div class="py-6 mt-8 border-t flex flex-col space-y-3">
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
    </div>

    <!-- Play Periodic Table Song -->
    <div class="mt-4 border-t">
      <song-card />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Elements',
  components: {
    songCard: () => import('~/components/SongCard'),
  },
  data() {
    return {
      selectedElement: '',
      sortBy: 'atomicNumber',
      selectedElements: [],
      elementString: '',
      numberString: '',
      numberInput: '',
      numberResult: '',
      errorMessage: '',
      numberResultArray: [],
      audio: null,
      canvas: null,
      canvasWidth: 75,
      canvasHeight: 75,
    }
  },
  computed: {
    elements() {
      return this.$store.state.elements.all
    },
    examples() {
      return this.$store.state.elements.examples
    },
  },
  watch: {
    numberInput() {
      this.errorMessage = ''
    },
    selectedElement() {
      // Modify canvas
      this.canvas.fillStyle = '#FFFFFF'
      this.canvas.fillRect(0, 0, this.canvasWidth, this.canvasHeight)
      this.canvas.fillStyle = 'black'
      this.canvas.font = '10px Arial'
      this.canvas.fillText(this.selectedElement.atomicNumber, 55, 15)
      this.canvas.font = '30px Arial'
      this.canvas.textAlign = 'center'
      this.canvas.fillText(
        this.selectedElement.symbol,
        this.canvasWidth / 2,
        50
      )
      this.canvas.font = '10px Arial'
      this.canvas.fillText(this.selectedElement.name, this.canvasWidth / 2, 65)
      this.canvas.strokeStyle = `#${this.selectedElement.cpkHexColor}`
      this.canvas.lineWidth = 5
      this.canvas.strokeRect(0, 0, this.canvasWidth, this.canvasHeight)
    },
  },
  mounted() {
    const c = this.$refs.wordCanvas
    this.canvas = c.getContext('2d')
    this.canvas.fillStyle = '#FFFFFF'
    this.canvas.fillRect(0, 0, this.canvasWidth, this.canvasHeight)
  },
  methods: {
    selectElement(element) {
      this.selectedElement = element
      this.selectedElements.push(this.selectedElement)
      this.elementString += this.selectedElement.symbol.toLowerCase()
      if (this.numberString.length > 0) {
        this.numberString += '.'
      }
      this.numberString += this.selectedElement.atomicNumber
    },
    sortElementsBy(key) {
      this.elements.sort((a, b) => (a[key] > b[key] ? 1 : -1))
    },
    shuffle() {
      this.elements.sort(() => 0.5 - Math.random())
    },
    clear() {
      this.selectedElement = null
      this.selectedElements = []
      this.numberString = ''
      this.elementString = ''
    },
    copyElementString() {
      const textToCopy = document.querySelector('#element-string')
      textToCopy.setAttribute('type', 'text')
      textToCopy.select()
      document.execCommand('copy')
      textToCopy.setAttribute('type', 'hidden')
      window.getSelection().removeAllRanges()
    },
    copyNumberString() {
      const textToCopy = document.querySelector('#number-string')
      textToCopy.setAttribute('type', 'text')
      textToCopy.select()
      document.execCommand('copy')
      textToCopy.setAttribute('type', 'hidden')
      window.getSelection().removeAllRanges()
    },
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
    getColor(symbol) {
      const currentElement = this.elements.find(
        (element) => element.symbol === symbol
      )
      return currentElement.cpkHexColor
    },
    playSong() {
      if (this.audio) {
        this.audio.pause()
        this.audio.currentTime = 0
      }
      this.audio = new Audio(
        'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview71/v4/82/1b/14/821b1416-b8dd-1757-470c-719a33f99d4b/mzaf_135016786046637505.plus.aac.p.m4a'
      )
      this.audio.play()
    },
    stopSong() {
      if (this.audio) {
        this.audio.pause()
        this.audio.currentTime = 0
      }
    },
  },
}
</script>
