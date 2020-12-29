<template>
  <div>
    <h1 class="text-xl">Let's Draw!</h1>
    <div class="flex">
      <div>
        <form class="pb-4 flex flex-col space-y-1">
          <label for="color-picker">Change Color</label>
          <input id="color-picker" v-model="textColor" type="color" />
          <label for="line-width-picker">Change Line Width</label>
          <input
            id="line-width-picker"
            v-model="lineWidth"
            type="range"
            min="1"
            max="10"
            list="tickmarks"
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
        </form>
        <a
          ref="buttonForDownload"
          download="canvas_image.png"
          href=""
          @click="downloadImage()"
          >Download Image</a
        >
      </div>
      <canvas
        id="myCanvas"
        ref="canvasForDrawing"
        :width="canvasWidth"
        :height="canvasHeight"
        class="border border-black rounded mx-auto"
        @mousedown="beginDrawing"
        @mousemove="keepDrawing"
        @mouseup="stopDrawing"
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
      textColor: 'black',
      lineWidth: 1,
      canvasWidth: 1000,
      canvasHeight: 800,
      textColorInput: null,
    }
  },
  mounted() {
    const c = this.$refs.canvasForDrawing
    this.canvas = c.getContext('2d')
    this.canvas.fillStyle = '#FFFFFF'
    this.canvas.fillRect(0, 0, this.canvasWidth, this.canvasHeight)
  },
  methods: {
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
  },
}
</script>
