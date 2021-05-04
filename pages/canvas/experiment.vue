<template>
  <div id="page-body" ref="page-body" class="container"></div>
</template>

<script>
export default {
  name: 'Experiment',
  mounted() {
    const tempImg = document.createElement('img')
    tempImg.id = 'new-img'
    tempImg.addEventListener('load', this.onTempImageLoad)
    tempImg.src =
      'data:image/svg+xml,' +
      encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="500" height="500">
            <foreignObject width="100%" height="100%">
                <div xmlns="http://www.w3.org/1999/xhtml" style="color: white; text-align: center; font-family: sans-serif; background-image: linear-gradient(#770391, #331675, #150a54, black); padding: 1em;">
                    <p style="font-size: 2em;">
                     “Space is for everybody. 
                     It’s not just for a few people in science or math, or for a select group of astronauts. 
                     That’s our new frontier out there, and it’s everybody’s business to know about space.”
                     </p>
                     <p>– Christa McAuliffe</p>  
                </div>
            </foreignObject>
        </svg>`
      )

    const targetImg = document.createElement('img')
    // targetImg.classList.add('w-full')
    targetImg.id = 'target-img'
    const pageBody = document.getElementById('page-body')
    pageBody.appendChild(targetImg)
  },
  methods: {
    onTempImageLoad(e) {
      const canvas = document.createElement('canvas')
      canvas.width = canvas.height = 500
      const ctx = canvas.getContext('2d')
      ctx.drawImage(e.target, 0, 0)
      const targetImg = document.getElementById('target-img')
      targetImg.src = canvas.toDataURL()
    },
  },
  head() {
    return {
      title: 'Canvas Experiment',
    }
  },
}
</script>
