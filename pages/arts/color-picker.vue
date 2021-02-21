<template>
  <div
    class="flex flex-col items-center justify-center text-center mx-4 md:mx-10"
  >
    <h1 class="text-2xl mb-4">Color Picker</h1>
    <p class="mb-2">
      Either click on the small box, enter a hex code, or click on a pill.
    </p>
    <form class="flex flex-col" @submit.prevent="getColorName">
      <div class="flex flex-col justify-around items-center md:flex-row">
        <div class="flex justify-center items-stretch">
          <input
            v-model="hexColor"
            class="rounded-l h-10 w-10 outline-none"
            type="color"
            @input="handleInputChange"
          />
          <input
            ref="hexInput"
            v-model="hexColor"
            type="text"
            minlength="6"
            maxlength="7"
            class="text-black text-lg rounded-r p-1"
            @input="handleInputChange"
          />
        </div>
        <button
          type="button"
          class="ml-2 p-1 bg-black text-white rounded my-2 hover:bg-gray-800"
          @click="selectText"
        >
          Copy hex to clipboard
        </button>
      </div>
      <button
        v-if="!nameColor && hexColor"
        type="submit"
        class="p-1 bg-black text-white rounded my-2 hover:bg-gray-800"
      >
        Check to see if it has a name
      </button>
    </form>
    <div
      v-if="hexColor"
      class="flex justify-center items-center rounded mx-auto text-xl p-2 m-2"
      :style="backgroundStyles"
    >
      {{ nameColor && !needsName ? nameColor : 'Name me, please!' }}
    </div>
    <p v-if="needsName && nameColor" class="py-2">{{ nameColor }}</p>
    <form v-if="needsName" class="py-2 rounded" @submit.prevent="addPill">
      <input
        v-model="newName"
        type="text"
        class="text-black text-lg rounded p-1"
      />
      <button
        v-if="newName && needsName"
        type="submit"
        class="p-1 bg-black text-white rounded my-2 hover:bg-gray-800"
      >
        Submit Name
      </button>
    </form>
    <p v-if="nameColor && !needsName" class="hidden md:block">
      Try out {{ nameColor }} below:
    </p>
    <div class="invisible bg-white rounded md:visible md:m-2">
      <canvas
        id="myCanvas"
        ref="myCanvas"
        width="300"
        height="100"
        @mousedown="beginDrawing"
        @mousemove="keepDrawing"
        @mouseup="stopDrawing"
      />
    </div>
    <div class="hidden items-center justify-center md:flex">
      <a
        ref="buttonForDownload"
        :download="downloadName"
        href=""
        class="text-white bg-black p-1 m-2 rounded hover:bg-gray-800"
        @click="downloadImage"
        >Download Image</a
      >
      <button
        type="button"
        class="p-1 bg-black text-white rounded my-2 hover:bg-gray-800"
        @click="clearCanvas"
      >
        Clear Drawing
      </button>
    </div>

    <h2 class="text-lg md:mt-4">Color Pills</h2>
    <div class="flex justify-center items-center flex-wrap">
      <div
        v-for="color in colorNames"
        :key="color[0]"
        class="py-1 px-2 rounded-full m-2 cursor-pointer hover:text-black"
        :style="boxStyle(color[0])"
        @click="changeColor(color)"
      >
        {{ color[1] }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColorPicker',
  data() {
    return {
      nameColor: 'Black',
      hexColor: '#000000',
      needsName: false,
      newName: '',
      newColors: [],
      x: 0,
      y: 0,
      isDrawing: false,
      canvas: null,
    }
  },
  computed: {
    colorNames() {
      return this.newColors.concat(this.$store.state.colors.colorNames)
    },
    backgroundStyles() {
      return {
        'background-color': this.hexColor,
      }
    },
    downloadName() {
      return (
        'awesome_drawing_with_' +
        this.nameColor.toLowerCase().replace(/\s+/g, '_') +
        '.png'
      )
    },
  },
  mounted() {
    this.canvas = this.$refs.myCanvas.getContext('2d')
  },
  methods: {
    getColorName() {
      this.hexColor = this.hexColor.toUpperCase()
      if (this.hexColor[0] !== '#') {
        this.hexColor = '#' + this.hexColor
      }
      const colorName = this.colorNames.find(
        (e) => e[0] === this.hexColor.slice(1)
      )
      if (colorName) {
        this.nameColor = colorName[1]
        this.needsName = false
      } else {
        this.nameColor = `Sorry, no name found for ${this.hexColor}. What would you like to call it?`
        this.needsName = true
      }
    },
    boxStyle(hexColor) {
      return {
        'background-color': `#${hexColor}`,
      }
    },
    changeColor(color) {
      this.hexColor = `#${color[0]}`
      this.nameColor = color[1]
    },
    addPill() {
      this.newColors.push([this.hexColor.slice(1), this.newName])
      this.needsName = false
      this.nameColor = this.newName
    },
    handleInputChange() {
      this.nameColor = ''
      this.newName = ''
    },
    clearCanvas() {
      this.canvas.clearRect(0, 0, 300, 100)
    },
    drawLine(x1, y1, x2, y2) {
      const ctx = this.canvas
      ctx.beginPath()
      ctx.strokeStyle = this.hexColor
      ctx.lineWidth = 1
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
      ctx.stroke()
      ctx.closePath()
    },
    beginDrawing(e) {
      this.x = e.offsetX
      this.y = e.offsetY
      this.isDrawing = true
    },
    keepDrawing(e) {
      if (this.isDrawing === true) {
        this.drawLine(this.x, this.y, e.offsetX, e.offsetY)
        this.x = e.offsetX
        this.y = e.offsetY
      }
    },
    stopDrawing(e) {
      if (this.isDrawing === true) {
        this.drawLine(this.x, this.y, e.offsetX, e.offsetY)
        this.x = 0
        this.y = 0
        this.isDrawing = false
      }
    },
    downloadImage() {
      const c = this.$refs.myCanvas
      const button = this.$refs.buttonForDownload
      // get image URI from canvas object
      const imageUri = c.toDataURL('image/png')
      button.href = imageUri
    },
    selectText() {
      const input = this.$refs.hexInput
      input.select()
      document.execCommand('copy')
    },
  },
}
</script>
