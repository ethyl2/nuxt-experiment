<template>
  <div>
    <div class="flex flex-col pb-4 justify-center lg:flex-row lg:space-x-4">
      <!-- Controls -->
      <div class="flex flex-col items-center justify-start pb-4">
        <form class="pb-4 flex flex-col space-y-1 w-full">
          <h1 class="text-lg text-center">Let's Draw!</h1>
          <div class="flex justify-center space-x-2">
            <button
              type="button"
              class="rounded p-1 bg-black text-xs text-center hover:bg-gray-700 md:text-sm"
              @click.prevent="clear"
            >
              White Background
            </button>
            <button
              type="button"
              class="rounded p-1 bg-black text-xs text-center hover:bg-gray-700 md:text-sm"
              @click.prevent="clear"
            >
              Clear
            </button>
            <a
              ref="buttonForDownload"
              download="canvas_image.png"
              href=""
              class="rounded p-1 bg-black text-xs text-white text-center hover:bg-gray-700 md:text-sm lg:hidden"
              @click="downloadImage"
              >Download Image</a
            >
          </div>

          <div class="flex space-x-1 justify-center sm:space-x-2">
            <div class="flex flex-col items-center">
              <label for="color-picker" class="text-sm">Color</label>
              <input
                id="color-picker"
                v-model="textColor"
                type="color"
                class="w-10 rounded"
              />
            </div>
            <div class="flex flex-col items-center">
              <label for="line-width-picker" class="text-sm">Line Width</label>
              <input
                id="line-width-picker"
                v-model="lineWidth"
                type="range"
                min="1"
                max="10"
                list="tickmarks"
                class="w-32"
              />
              <datalist id="tickmarks">
                <option value="1"></option>
                <option value="2"></option>
                <option value="3"></option>
                <option value="4"></option>
                <option value="5"></option>
                <option value="6"></option>
                <option value="7"></option>
                <option value="8"></option>
                <option value="9"></option>
                <option value="10"></option>
              </datalist>
            </div>
          </div>
        </form>
        <a
          ref="buttonForDownload"
          download="canvas_image.png"
          href=""
          class="hidden rounded p-1 bg-black text-sm text-white hover:bg-gray-700 lg:block"
          @click="downloadImage"
          >Download Image</a
        >
      </div>

      <!-- Canvas -->
      <canvas
        id="myCanvas"
        ref="canvasForDrawing"
        :width="canvasWidth"
        :height="canvasHeight"
        class="border border-black rounded m-0 p-0"
        @mousedown="beginDrawing"
        @mousemove="keepDrawing"
        @mouseup="stopDrawing"
        @touchstart.prevent="beginDrawingWithTouch"
        @touchend.prevent="stopDrawingWithTouch"
        @touchmove.prevent="keepDrawingWithTouch"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Canvas',
  data() {
    return {
      x: 0,
      y: 0,
      isDrawing: false,
      canvas: null,
      textColor: '#000000',
      lineWidth: 1,
      canvasWidth: 1200,
      canvasHeight: 600,
      textColorInput: null,
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
    const c = this.$refs.canvasForDrawing
    this.canvas = c.getContext('2d')
    this.canvas.fillStyle = '#FFFFFF'
    this.canvas.fillRect(0, 0, this.canvasWidth, this.canvasHeight)
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      const w = window.innerWidth
      switch (true) {
        case w <= 450:
          // small mobile
          this.canvasWidth = 325
          this.canvasHeight = 800
          break
        case w <= 600:
          // larger mobile
          this.canvasWidth = 400
          this.canvasHeight = 800
          break
        case w <= 768:
          // tablet
          this.canvasWidth = 550
          this.canvasHeight = 600
          break
        case w <= 825:
          // small desktop
          this.canvasWidth = 700
          this.canvasHeight = 600
          break
        case w <= 1075:
          // md desktop
          this.canvasWidth = 800
          this.canvasHeight = 600
          break
        case w <= 1200:
          // lg desktop
          this.canvasWidth = 900
          this.canvasHeight = 600
          break
        default:
          // xl desktop
          this.canvasWidth = 1000
          this.canvasHeight = 600
      }
      const c = this.$refs.canvasForDrawing
      c.width = this.canvasWidth
      c.height = this.canvasHeight
      this.canvas = c.getContext('2d')
      this.canvas.fillStyle = '#FFFFFF'
      this.canvas.fillRect(0, 0, this.canvasWidth, this.canvasHeight)
    },
    drawLine(x1, y1, x2, y2) {
      const ctx = this.canvas
      ctx.beginPath()
      ctx.strokeStyle = this.textColor
      ctx.lineWidth = this.lineWidth
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
    beginDrawingWithTouch(e) {
      const rect = this.$refs.canvasForDrawing.getBoundingClientRect()
      const touch = e.touches[0]
      this.x = touch.clientX - rect.left
      this.y = touch.clientY - rect.top
      this.isDrawing = true
    },
    keepDrawing(e) {
      if (this.isDrawing === true) {
        this.drawLine(this.x, this.y, e.offsetX, e.offsetY)
        this.x = e.offsetX
        this.y = e.offsetY
      }
    },
    keepDrawingWithTouch(e) {
      if (this.isDrawing === true) {
        const rect = this.$refs.canvasForDrawing.getBoundingClientRect()
        const touch = e.touches[0]
        this.drawLine(
          this.x,
          this.y,
          touch.clientX - rect.left,
          touch.clientY - rect.top
        )
        this.x = touch.clientX - rect.left
        this.y = touch.clientY - rect.top
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
    stopDrawingWithTouch(e) {
      if (this.isDrawing === true) {
        this.x = 0
        this.y = 0
        this.isDrawing = false
      }
    },
    handleColorChange() {
      this.textColor = this.textColorInput
    },
    downloadImage() {
      const c = this.$refs.canvasForDrawing
      const button = this.$refs.buttonForDownload
      // get image URI from canvas object
      const imageUri = c.toDataURL('image/png')
      button.href = imageUri
    },
    clear() {
      this.canvas.fillStyle = '#FFFFFF'
      this.canvas.fillRect(0, 0, this.canvasWidth, this.canvasHeight)
    },
  },
  head() {
    return {
      title: '✏️ Drawing on Canvas',
      meta: [
        {
          name: 'description',
          content: 'Draw and save your creation.',
        },
        {
          name: 'twitter:title',
          content: 'Canvas Drawing | Nuxt Experiments',
        },
        {
          name: 'twitter:description ',
          content: 'Draw and save your creation.',
        },
        { name: 'twitter:image', content: '/colors.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
    }
  },
}
</script>
