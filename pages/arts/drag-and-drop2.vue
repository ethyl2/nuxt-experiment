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
    class="min-h-screen bg-contain bg-repeat bg-center relative md:bg-no-repeat"
    style="background-image: url('/notebook.jpg')"
  >
    <p
      class="m-4 bg-white p-1 rounded w-auto text-black inline text-sm font-bold"
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

    <div
      ref="moveDiv9"
      class="mover"
      style="bottom: 18.2rem; right: 5rem"
      @mousedown="down('moveDiv9')"
      @touchstart="down('moveDiv9')"
      @mousemove="move('moveDiv9')"
      @touchmove="move('moveDiv9')"
      @mouseup="end"
      @touchend="end"
    >
      <div
        class="innerCircle bg-white bg-no-repeat bg-cover bg-center overflow-hidden rounded-full"
        style="background-image: url('/song_images/virus.png')"
      ></div>
    </div>

    <div
      ref="moveDiv10"
      class="mover"
      style="bottom: 1.2rem; right: 1rem"
      @mousedown="down('moveDiv10')"
      @touchstart="down('moveDiv10')"
      @mousemove="move('moveDiv10')"
      @touchmove="move('moveDiv10')"
      @mouseup="end"
      @touchend="end"
    >
      <div
        class="innerCircle bg-white bg-no-repeat bg-cover bg-center overflow-hidden rounded-full"
        style="background-image: url('/song_images/spaceship.png')"
      ></div>
    </div>

    <div
      ref="moveDiv11"
      class="mover"
      style="bottom: 2.2rem; right: 2rem"
      @mousedown="down('moveDiv11')"
      @touchstart="down('moveDiv11')"
      @mousemove="move('moveDiv11')"
      @touchmove="move('moveDiv11')"
      @mouseup="end"
      @touchend="end"
    >
      <div
        class="innerCircle bg-white bg-no-repeat bg-cover bg-center overflow-hidden rounded-full"
        style="background-image: url('/song_images/dragon.png')"
      ></div>
    </div>

    <div
      ref="moveDiv12"
      class="mover"
      style="bottom: 2.2rem; left: 2rem"
      @mousedown="down('moveDiv12')"
      @touchstart="down('moveDiv12')"
      @mousemove="move('moveDiv12')"
      @touchmove="move('moveDiv12')"
      @mouseup="end"
      @touchend="end"
    >
      <div
        class="innerCircle bg-white bg-no-repeat bg-cover bg-center overflow-hidden rounded-full"
        style="background-image: url('/binaryShield.png')"
      ></div>
    </div>

    <div
      ref="moveDiv13"
      class="mover"
      style="bottom: 3.2rem; left: 1.5rem"
      @mousedown="down('moveDiv13')"
      @touchstart="down('moveDiv13')"
      @mousemove="move('moveDiv13')"
      @touchmove="move('moveDiv13')"
      @mouseup="end"
      @touchend="end"
    >
      <div
        class="innerCircle bg-white bg-no-repeat bg-cover bg-center overflow-hidden rounded-full"
        style="background-image: url('/cat2.gif')"
      ></div>
    </div>

    <div
      ref="moveDiv14"
      class="mover"
      style="bottom: 6rem; left: 4rem"
      @mousedown="down('moveDiv14')"
      @touchstart="down('moveDiv14')"
      @mousemove="move('moveDiv14')"
      @touchmove="move('moveDiv14')"
      @mouseup="end"
      @touchend="end"
    >
      <div
        class="innerCircle bg-white bg-no-repeat bg-cover bg-center overflow-hidden rounded-full"
        style="background-image: url('/stickers/erlenmeyer-flask.png')"
      ></div>
    </div>

    <div
      ref="moveDiv15"
      class="mover"
      style="top: 6rem; left: 6rem"
      @mousedown="down('moveDiv15')"
      @touchstart="down('moveDiv15')"
      @mousemove="move('moveDiv15')"
      @touchmove="move('moveDiv15')"
      @mouseup="end"
      @touchend="end"
    >
      <div
        class="innerCircle bg-white bg-no-repeat bg-cover bg-center overflow-hidden rounded-full"
        style="background-image: url('/magic-carpet.png')"
      ></div>
    </div>

    <div
      ref="moveDiv16"
      class="mover"
      style="bottom: 10rem; left: 10rem"
      @mousedown="down('moveDiv16')"
      @touchstart="down('moveDiv16')"
      @mousemove="move('moveDiv16')"
      @touchmove="move('moveDiv16')"
      @mouseup="end"
      @touchend="end"
    >
      <div
        class="innerCircle bg-white bg-no-repeat bg-cover bg-center overflow-hidden rounded-full"
        style="background-image: url('/stickers/sun.gif')"
      ></div>
    </div>

    <div
      ref="moveDiv17"
      class="mover"
      style="bottom: 12rem; left: 12rem"
      @mousedown="down('moveDiv17')"
      @touchstart="down('moveDiv17')"
      @mousemove="move('moveDiv17')"
      @touchmove="move('moveDiv17')"
      @mouseup="end"
      @touchend="end"
    >
      <div
        class="innerCircle bg-white bg-no-repeat bg-cover bg-center overflow-hidden rounded-full"
        style="background-image: url('/stickers/earth.gif')"
      ></div>
    </div>

    <div
      ref="moveDiv18"
      class="mover"
      style="top: 12rem; left: 12rem"
      @mousedown="down('moveDiv18')"
      @touchstart="down('moveDiv18')"
      @mousemove="move('moveDiv18')"
      @touchmove="move('moveDiv18')"
      @mouseup="end"
      @touchend="end"
    >
      <div
        class="innerCircle bg-white bg-no-repeat bg-cover bg-center overflow-hidden rounded-full"
        style="background-image: url('/stickers/bird.gif')"
      ></div>
    </div>

    <div
      ref="moveDiv19"
      class="mover"
      style="top: 11rem; left: 1rem"
      @mousedown="down('moveDiv19')"
      @touchstart="down('moveDiv19')"
      @mousemove="move('moveDiv19')"
      @touchmove="move('moveDiv19')"
      @mouseup="end"
      @touchend="end"
    >
      <div
        class="innerCircle bg-white bg-no-repeat bg-cover bg-center overflow-hidden rounded-full"
        style="background-image: url('/stickers/cheshire-cat.gif')"
      ></div>
    </div>

    <div
      ref="moveDiv20"
      class="mover"
      style="top: 14rem; left: 3rem"
      @mousedown="down('moveDiv20')"
      @touchstart="down('moveDiv20')"
      @mousemove="move('moveDiv20')"
      @touchmove="move('moveDiv20')"
      @mouseup="end"
      @touchend="end"
    >
      <div
        class="innerCircle bg-white bg-no-repeat bg-cover bg-center overflow-hidden rounded-full"
        style="background-image: url('/stickers/angel-cat.gif')"
      ></div>
    </div>

    <div
      ref="moveDiv21"
      class="mover"
      style="top: 16rem; left: 6rem"
      @mousedown="down('moveDiv21')"
      @touchstart="down('moveDiv21')"
      @mousemove="move('moveDiv21')"
      @touchmove="move('moveDiv21')"
      @mouseup="end"
      @touchend="end"
    >
      <div
        class="innerCircle bg-white bg-no-repeat bg-cover bg-center overflow-hidden rounded-full"
        style="background-image: url('/stickers/light-cat.gif')"
      ></div>
    </div>

    <div
      ref="moveDiv22"
      class="mover"
      style="top: 19rem; right: 6rem"
      @mousedown="down('moveDiv22')"
      @touchstart="down('moveDiv22')"
      @mousemove="move('moveDiv22')"
      @touchmove="move('moveDiv22')"
      @mouseup="end"
      @touchend="end"
    >
      <div
        class="innerCircle bg-white bg-no-repeat bg-cover bg-center overflow-hidden rounded-full"
        style="background-image: url('/stickers/sleepy-cat.gif')"
      ></div>
    </div>

    <div
      ref="moveDiv23"
      class="mover"
      style="top: 23rem; left: 6.5rem"
      @mousedown="down('moveDiv23')"
      @touchstart="down('moveDiv23')"
      @mousemove="move('moveDiv23')"
      @touchmove="move('moveDiv23')"
      @mouseup="end"
      @touchend="end"
    >
      <div
        class="innerCircle bg-white bg-no-repeat bg-cover bg-center overflow-hidden rounded-full"
        style="background-image: url('/stickers/happy-cat.gif')"
      ></div>
    </div>

    <div
      ref="moveDiv24"
      class="mover"
      style="top: 26.25rem; left: 9.25rem"
      @mousedown="down('moveDiv24')"
      @touchstart="down('moveDiv24')"
      @mousemove="move('moveDiv24')"
      @touchmove="move('moveDiv24')"
      @mouseup="end"
      @touchend="end"
    >
      <div
        class="innerCircle bg-white bg-no-repeat bg-cover bg-center overflow-hidden rounded-full"
        style="background-image: url('/stickers/box-cat.png')"
      ></div>
    </div>

    <div
      ref="moveDiv25"
      class="mover"
      style="bottom: 0; left: 0"
      @mousedown="down('moveDiv25')"
      @touchstart="down('moveDiv25')"
      @mousemove="move('moveDiv25')"
      @touchmove="move('moveDiv25')"
      @mouseup="end"
      @touchend="end"
    >
      <div
        class="innerCircle bg-white bg-no-repeat bg-cover bg-center overflow-hidden rounded-full"
        style="background-image: url('/stickers/flexible-cat.png')"
      ></div>
    </div>

    <div
      ref="moveDiv26"
      class="mover"
      style="bottom: 5rem; right: 2.75rem"
      @mousedown="down('moveDiv26')"
      @touchstart="down('moveDiv26')"
      @mousemove="move('moveDiv26')"
      @touchmove="move('moveDiv26')"
      @mouseup="end"
      @touchend="end"
    >
      <div
        class="innerCircle bg-white bg-no-repeat bg-cover bg-center overflow-hidden rounded-full"
        style="background-image: url('/stickers/bat-cat.gif')"
      ></div>
    </div>

    <div
      ref="moveDiv27"
      class="mover"
      style="bottom: 1.75rem; right: 5.75rem"
      @mousedown="down('moveDiv27')"
      @touchstart="down('moveDiv27')"
      @mousemove="move('moveDiv27')"
      @touchmove="move('moveDiv27')"
      @mouseup="end"
      @touchend="end"
    >
      <div
        class="innerCircle bg-white bg-no-repeat bg-cover bg-center overflow-hidden rounded-full"
        style="background-image: url('/stickers/halloween-cat.png')"
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
  mounted() {
    // Prevent page from sliding default events
    document.addEventListener(
      'touchmove',
      function () {
        event.preventDefault()
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
  head() {
    return {
      title: '😃 Sticker Drag and Drop',
      meta: [
        {
          name: 'description',
          content: 'Drag and drop virtual stickers',
        },
        {
          name: 'twitter:title',
          content: 'Sticker Drag and Drop | Nuxt Experiments',
        },
        {
          name: 'twitter:description ',
          content: 'Drag and drop virtual stickers',
        },
        { name: 'twitter:image', content: '/banana.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
    }
  },
}
</script>
