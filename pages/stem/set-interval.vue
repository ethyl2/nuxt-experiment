<template>
  <div class="min-h-screen">
    <div
      id="playground"
      class="min-h-screen relative bg-cover bg-center w-full pb-6"
      style="
        background: url('/stem/big-blob.png');
        background-repeat: no-repeat;
        background-position: center;
      "
    ></div>
    <div class="text-center">
      <h1 class="mx-auto text-xl font-bold md:text-lg">
        Using <code>setInterval</code>
      </h1>
      <p>
        <code>setInterval()</code> is handy when you want something to happen
        regularly at a certain interval of time.
      </p>
      <p>
        In this example, my function addEyeball() is called every 2 seconds
        (2000 milliseconds), which adds an eyeball at the mouse's position.
      </p>
      <code>setInterval(this.addEyeball, 2000)</code>
      <p>
        The first parameter is the name of the function, and the second is the
        time interval.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SetInterval',
  data() {
    return {
      mousePos: null,
    }
  },
  mounted() {
    document.addEventListener('mousemove', this.handleMouseMove)
    setInterval(this.addEyeball, 2000)
  },
  methods: {
    handleMouseMove(event) {
      event = event || window.event
      if (event.pageX == null && event.clientX != null) {
        const eventDoc =
          (event.target && event.target.ownerDocument) || document
        const doc = eventDoc.documentElement
        const body = eventDoc.body

        event.pageX =
          event.clientX +
          ((doc && doc.scrollLeft) || (body && body.scrollLeft) || 0) -
          ((doc && doc.clientLeft) || (body && body.clientLeft) || 0)
        event.pageY =
          event.clientY +
          ((doc && doc.scrollTop) || (body && body.scrollTop) || 0) -
          ((doc && doc.clientTop) || (body && body.clientTop) || 0)
      }

      this.mousePos = {
        x: event.pageX,
        y: event.pageY,
      }
    },
    addEyeball() {
      const divEl = document.getElementById('playground')
      const eyeballEl = document.createElement('img')
      eyeballEl.src = '/stem/eyeball.png'
      eyeballEl.alt = 'eyeball'
      eyeballEl.style.position = 'absolute'
      eyeballEl.style.left = this.mousePos.x - 20 + 'px'
      eyeballEl.style.top = this.mousePos.y - 50 + 'px'
      eyeballEl.classList.add('w-10', 'h-10')
      divEl.appendChild(eyeballEl)
    },
  },
}
</script>
