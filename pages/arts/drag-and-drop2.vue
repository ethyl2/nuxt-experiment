<style>
.mover {
  height: 4.5rem;
  width: 4.5rem;
  z-index: 990;
  position: fixed;
  border-radius: 0.8rem;
  background-color: rgba(0, 0, 0, 0.55);
}

.innerCircle {
  height: 2.7rem;
  width: 2.7rem;
  border: 0.3rem solid white;
  margin: 0.65rem auto;
  color: #000000;
  font-size: 1.6rem;
  line-height: 2.7rem;
  text-align: center;
}
</style>

<template>
  <div
    class="min-h-screen bg-contain bg-repeat bg-center relative md:bg-contain md:bg-no-repeat"
    style="background-image: url('/notebook.jpg')"
  >
    <p
      class="m-4 bg-white p-1 rounded w-auto text-black inline text-sm text-bold"
    >
      Decorate With Stickers
    </p>
    <div
      ref="moveDiv"
      class="mover"
      style="top: 4.2rem; right: 3.2rem"
      @mousedown="down('moveDiv')"
      @touchstart="down('moveDiv')"
      @mousemove="move('moveDiv')"
      @touchmove="move('moveDiv')"
      @mouseup="end"
      @touchend="end"
    >
      <div
        class="innerCircle bg-white bg-no-repeat bg-contain bg-center overflow-hidden rounded-full"
        style="background-image: url('/pie.png')"
      ></div>
    </div>

    <div
      ref="moveDiv2"
      class="mover"
      style="top: 4.2rem; left: 3.2rem"
      @mousedown="down('moveDiv2')"
      @touchstart="down('moveDiv2')"
      @mousemove="move('moveDiv2')"
      @touchmove="move('moveDiv2')"
      @mouseup="end"
      @touchend="end"
    >
      <div
        class="innerCircle bg-white bg-no-repeat bg-contain bg-center overflow-hidden rounded-full"
        style="background-image: url('/donut.gif')"
      ></div>
    </div>

    <div
      ref="moveDiv3"
      class="mover"
      style="top: 4.2rem; left: 10.2rem"
      @mousedown="down('moveDiv3')"
      @touchstart="down('moveDiv3')"
      @mousemove="move('moveDiv3')"
      @touchmove="move('moveDiv3')"
      @mouseup="end"
      @touchend="end"
    >
      <div
        class="innerCircle bg-white bg-no-repeat bg-contain bg-center overflow-hidden rounded-full"
        style="background-image: url('/banana.png')"
      ></div>
    </div>

    <div
      ref="moveDiv4"
      class="mover"
      style="top: 8.2rem; left: 10.2rem"
      @mousedown="down('moveDiv4')"
      @touchstart="down('moveDiv4')"
      @mousemove="move('moveDiv4')"
      @touchmove="move('moveDiv4')"
      @mouseup="end"
      @touchend="end"
    >
      <div
        class="innerCircle bg-white bg-no-repeat bg-contain bg-center overflow-hidden rounded-full"
        style="background-image: url('/nut2.png')"
      ></div>
    </div>

    <div
      ref="moveDiv5"
      class="mover"
      style="top: 11.2rem; right: 3.2rem"
      @mousedown="down('moveDiv5')"
      @touchstart="down('moveDiv5')"
      @mousemove="move('moveDiv5')"
      @touchmove="move('moveDiv5')"
      @mouseup="end"
      @touchend="end"
    >
      <div
        class="innerCircle bg-white bg-no-repeat bg-contain bg-center overflow-hidden rounded-full"
        style="background-image: url('/heart.gif')"
      ></div>
    </div>

    <div
      ref="moveDiv6"
      class="mover"
      style="top: 14.2rem; right: 5.2rem"
      @mousedown="down('moveDiv6')"
      @touchstart="down('moveDiv6')"
      @mousemove="move('moveDiv6')"
      @touchmove="move('moveDiv6')"
      @mouseup="end"
      @touchend="end"
    >
      <div
        class="innerCircle bg-white bg-no-repeat bg-contain bg-center overflow-hidden rounded-full"
        style="background-image: url('/tree2.png')"
      ></div>
    </div>

    <div
      ref="moveDiv7"
      class="mover"
      style="bottom: 14.2rem; left: 5.2rem"
      @mousedown="down('moveDiv7')"
      @touchstart="down('moveDiv7')"
      @mousemove="move('moveDiv7')"
      @touchmove="move('moveDiv7')"
      @mouseup="end"
      @touchend="end"
    >
      <div
        class="innerCircle bg-white bg-no-repeat bg-contain bg-center overflow-hidden rounded-full"
        style="background-image: url('/flowers.gif')"
      ></div>
    </div>

    <div
      ref="moveDiv8"
      class="mover"
      style="bottom: 17.2rem; right: 5.5rem"
      @mousedown="down('moveDiv8')"
      @touchstart="down('moveDiv8')"
      @mousemove="move('moveDiv8')"
      @touchmove="move('moveDiv8')"
      @mouseup="end"
      @touchend="end"
    >
      <div
        class="innerCircle bg-white bg-no-repeat bg-contain bg-center overflow-hidden rounded-full"
        style="background-image: url('/turtle.gif')"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DragAndDrop2',
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
        // Prevent page from sliding default events
        document.addEventListener(
          'touchmove',
          function () {
            event.preventDefault()
          },
          false
        )
      }
    },
    // Function when mouse is released
    end() {
      this.flags = false
    },
  },
}
</script>
