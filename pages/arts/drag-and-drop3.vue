<template>
  <div class="relative min-h-screen">
    <h1 class="text-2xl text-center my-2">Make a Flower Arrangement</h1>
    <div class="mt-4 py-2">
      <h2 class="text-xl text-center">Flower Selection</h2>
      <p class="text-green-500 text-center mb-2">
        Click on flowers here to get more
      </p>
      <div class="flex items-center justify-center">
        <div
          v-for="(option, index) in optionsArray"
          :key="`button-${index}`"
          class="w-16 h-16 bg-transparent bg-no-repeat bg-cover bg-center rounded-full"
          :style="`background-image: url(${option});`"
          @click="handleClick(option)"
        ></div>
      </div>
    </div>
    <div class="relative bg-white min-h-screen">
      <p class="my-2 text-center text-black">
        Move the flowers around until it's just perfect!
      </p>
      <mover
        v-for="(mover, index) in moverArray"
        :key="index"
        :bg-img="mover"
        :top-pos="index + 0.1"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DragAndDrop3',
  components: {
    Mover: () => import('~/components/dragAndDrop/Mover'),
  },
  data() {
    return {
      moverArray: ['/flowers/rose2.png', '/flowers/rose3.png'],
      optionsArray: ['/flowers/rose2.png', '/flowers/rose3.png'],
    }
  },
  methods: {
    handleClick(option) {
      this.moverArray.push(option)
    },
  },
}
</script>
