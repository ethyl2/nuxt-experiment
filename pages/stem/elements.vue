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

    <element-buttons @select-element="selectElement" />

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
      <input ref="elementString" v-model="elementString" type="hidden" />
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

    <div v-if="selectedElements" class="flex flex-wrap justify-center my-2">
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
      class="flex justify-center items-center flex-col border-t pt-4 md:space-x-4 lg:flex-row"
    >
      <p
        class="text-white text-center font-bold"
        :class="[numberString.length < 18 ? 'text-lg' : 'text-sm md:text-lg']"
      >
        {{ numberString }}
      </p>
      <input ref="numberString" v-model="numberString" type="hidden" />
      <button
        type="button"
        class="bg-black text-white rounded p-1 m-1 hover:bg-gray-700 text-xs md:text-base"
        @click="copyNumberString"
      >
        Copy Numbers
      </button>
    </div>

    <!-- Make image to download -->
    <div
      class="flex flex-col items-center justify-center space-y-2 mt-4 pt-4 border-t"
      :class="[selectedElements.length > 0 ? 'visible' : 'invisible']"
    >
      <button
        v-if="showRevealButton"
        class="bg-black text-white rounded p-1 m-1 text-xs hover:bg-gray-700 md:text-base"
        @click.prevent="redrawCanvas"
      >
        Reveal Downloadable Image
      </button>
      <a
        v-if="!showRevealButton"
        ref="buttonForDownload"
        download="canvas_image.png"
        href=""
        class="rounded p-1 bg-black text-xs text-white text-center hover:bg-gray-700 md:text-base"
        @click="downloadImage"
        >Download Image</a
      >
      <canvas
        ref="wordCanvas"
        :width="canvasWidth"
        :height="canvasHeight"
        class="mx-auto rounded"
      />
    </div>

    <!-- Convert Atomic Numbers to Symbols -->
    <numbers-to-elements />

    <!-- Examples of words made with symbols -->
    <word-examples />

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
    ElementButtons: () => import('~/components/elements/ElementButtons'),
    SongCard: () => import('~/components/SongCard'),
    NumbersToElements: () => import('~/components/elements/NumbersToElements'),
    WordExamples: () => import('~/components/elements/WordExamples'),
  },
  data() {
    return {
      selectedElement: '',
      sortBy: 'atomicNumber',
      selectedElements: [],
      elementString: '',
      numberString: '',
      canvas: null,
      canvasWidth: 75,
      canvasHeight: 75,
      tileSize: 75,
      spaceWidth: 10,
      showRevealButton: true,
    }
  },
  computed: {
    elements() {
      return this.$store.state.elements.all
    },
  },
  watch: {
    selectedElement() {
      // Modify canvas
      if (this.selectedElement) {
        this.canvasWidth =
          (this.tileSize + this.spaceWidth) * this.selectedElements.length -
          this.spaceWidth
        const c = this.$refs.wordCanvas
        c.width = this.canvasWidth
      }
    },
  },
  mounted() {
    const c = this.$refs.wordCanvas
    this.canvas = c.getContext('2d')
    this.canvas.fillStyle = '#FFFFFF'
    this.canvas.fillRect(0, 0, this.canvasWidth, this.canvasHeight)
  },
  methods: {
    redrawCanvas() {
      const c = this.$refs.wordCanvas
      this.canvas = c.getContext('2d')
      let pos = 0
      const xOffSet = this.tileSize / 2
      this.selectedElements.forEach((element) => {
        // Tile background
        this.canvas.fillStyle = '#FFFFFF'
        // this.canvas.fillRect(pos, 0, this.tileSize, this.tileSize)
        this.drawRoundedRect(
          pos + 1.5,
          1,
          this.tileSize - 2.5,
          this.tileSize - 2,
          5,
          true
        )
        // Border
        this.canvas.strokeStyle = `#${element.cpkHexColor}`
        if (
          this.canvas.strokeStyle === '#ffffff' ||
          this.canvas.strokeStyle === '#FFFFFF'
        ) {
          this.canvas.strokeStyle = '#D3D3D3'
        }
        this.canvas.lineWidth = 5
        // this.canvas.strokeRect(pos, 0, this.tileSize, this.tileSize)
        this.drawRoundedRect(
          pos + 1.5,
          1,
          this.tileSize - 2.5,
          this.tileSize - 2
        )
        // Atomic num
        this.canvas.fillStyle = '#000000'
        this.canvas.font = '10px Arial'
        this.canvas.fillText(element.atomicNumber, 58 + pos, 15)
        // Symbol
        this.canvas.font = '30px Arial'
        this.canvas.textAlign = 'center'
        this.canvas.fillText(element.symbol, pos + xOffSet, 50)
        // Name
        this.canvas.font = '10px Arial'
        this.canvas.fillText(element.name, pos + xOffSet, 65)
        pos += this.tileSize + this.spaceWidth - 0.5
      })
      this.showRevealButton = false
    },
    drawRoundedRect(x, y, width, height, radius, fill, stroke) {
      if (typeof stroke === 'undefined') {
        stroke = true
      }
      if (typeof radius === 'undefined') {
        radius = 5
      }
      if (typeof radius === 'number') {
        radius = { tl: radius, tr: radius, br: radius, bl: radius }
      } else {
        const defaultRadius = { tl: 0, tr: 0, br: 0, bl: 0 }
        for (const side in defaultRadius) {
          radius[side] = radius[side] || defaultRadius[side]
        }
      }
      this.canvas.beginPath()
      this.canvas.moveTo(x + radius.tl, y)
      this.canvas.lineTo(x + width - radius.tr, y)
      this.canvas.quadraticCurveTo(x + width, y, x + width, y + radius.tr)
      this.canvas.lineTo(x + width, y + height - radius.br)
      this.canvas.quadraticCurveTo(
        x + width,
        y + height,
        x + width - radius.br,
        y + height
      )
      this.canvas.lineTo(x + radius.bl, y + height)
      this.canvas.quadraticCurveTo(x, y + height, x, y + height - radius.bl)
      this.canvas.lineTo(x, y + radius.tl)
      this.canvas.quadraticCurveTo(x, y, x + radius.tl, y)
      this.canvas.closePath()
      if (fill) {
        this.canvas.fill()
      }
      if (stroke) {
        this.canvas.stroke()
      }
    },
    selectElement(element) {
      this.selectedElement = element
      this.selectedElements.push(this.selectedElement)
      this.elementString += this.selectedElement.symbol.toLowerCase()
      if (this.numberString.length > 0) {
        this.numberString += '.'
      }
      this.numberString += this.selectedElement.atomicNumber
      this.showRevealButton = true
    },
    clear() {
      this.selectedElement = null
      this.selectedElements = []
      this.numberString = ''
      this.elementString = ''
    },
    copyElementString() {
      const textToCopy = this.$refs.elementString
      textToCopy.setAttribute('type', 'text')
      textToCopy.select()
      document.execCommand('copy')
      textToCopy.setAttribute('type', 'hidden')
      window.getSelection().removeAllRanges()
    },
    copyNumberString() {
      const textToCopy = this.$refs.numberString
      textToCopy.setAttribute('type', 'text')
      textToCopy.select()
      document.execCommand('copy')
      textToCopy.setAttribute('type', 'hidden')
      window.getSelection().removeAllRanges()
    },
    downloadImage() {
      const c = this.$refs.wordCanvas
      const button = this.$refs.buttonForDownload
      // get image URI from canvas object
      const imageUri = c.toDataURL('image/png')
      button.href = imageUri
    },
  },
}
</script>
