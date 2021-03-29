<template>
  <div>
    <div
      ref="moveDiv"
      :style="`top: ${topPos}rem; background-image: url(${bgImg}); opacity: 0.9`"
      class="absolute left-0 w-24 h-24 bg-transparent bg-no-repeat bg-cover bg-center rounded-full"
      @mousedown="down('moveDiv')"
      @touchstart="down('moveDiv')"
      @mousemove="move('moveDiv')"
      @touchmove="move('moveDiv')"
      @mouseup="end"
      @touchend="end"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'Mover',
  props: {
    bgImg: {
      type: String,
      default: '/pie.png',
    },
    topPos: {
      type: Number,
      default: 2,
    },
  },
  data() {
    return {
      flags: false,
      position: {
        x: 0,
        y: 0,
      },
      nx: '',
      ny: '',
      dx: '',
      dy: '',
      xPum: '',
      yPum: '',
    }
  },
  mounted() {
    // Prevent page from sliding default events
    document.addEventListener(
      'touchmove',
      function () {
        event.preventDefault()
        event.stopPropagation()
      },
      false
    )
  },
  methods: {
    // Mobile drag
    down(element) {
      this.flags = true
      let touch
      if (event.touches) {
        touch = event.touches[0]
      } else {
        touch = event
      }
      this.position.x = touch.clientX
      this.position.y = touch.clientY
      // this.dx = this.$refs.moveDiv.offsetLeft
      this.dx = this.$refs[element].offsetLeft
      this.dy = this.$refs[element].offsetTop
    },
    move(element) {
      if (this.flags) {
        let touch
        if (event.touches) {
          touch = event.touches[0]
        } else {
          touch = event
        }
        this.nx = touch.clientX - this.position.x
        this.ny = touch.clientY - this.position.y
        this.xPum = this.dx + this.nx
        this.yPum = this.dy + this.ny
        this.$refs[element].style.left = this.xPum + 'px'
        this.$refs[element].style.top = this.yPum + 'px'
      }
    },
    // Function when mouse is released
    end() {
      this.flags = false
    },
  },
}
</script>
