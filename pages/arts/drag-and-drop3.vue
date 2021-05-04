<template>
  <div class="relative min-h-screen">
    <h1 class="text-2xl text-center my-2">Make a Flower Arrangement</h1>
    <img
      class="mx-auto w-20 rounded"
      src="/flowers/flowers.png"
      alt="flower arrangement example"
    />
    <div class="mt-4 py-2">
      <h2 class="text-xl text-center">Flower and Leaf Selection</h2>
      <p class="text-green-500 text-center mb-2">
        Click on flowers and leaves here to get more:
      </p>
      <div class="flex items-center justify-center flex-wrap">
        <div
          v-for="(option, index) in optionsArray"
          :key="`button-${index}`"
          class="w-12 h-12 bg-transparent bg-no-repeat bg-cover bg-center rounded-full"
          :style="`background-image: url(${option});`"
          @click="handleClick(option)"
        ></div>
      </div>
    </div>
    <div class="relative bg-white min-h-screen">
      <p class="my-2 text-center text-black">
        Move the flowers and leaves below around -- until it's just perfect!
      </p>
      <mover
        v-for="(mover, index) in moverArray"
        :key="index"
        :bg-img="mover"
        :top-pos="index + 0.1"
      />
      <img src="/flowers/vase.png" alt="vase" class="mx-auto w-64 mt-64" />
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
      moverArray: [],
      optionsArray: [
        '/flowers/rose2.png',
        '/flowers/rose3.png',
        '/flowers/daisy.png',
        '/flowers/flower1.png',
        '/flowers/flower2.png',
        '/flowers/flower3.png',
        '/flowers/flower4.png',
        '/flowers/flower5.png',
        '/flowers/flower6.png',
        '/flowers/flower7.png',
        '/flowers/flower8.png',
        '/flowers/flower9.png',
        '/flowers/flower10.png',
        '/flowers/flower11.png',
        '/flowers/flower12.png',
        '/flowers/flower13.png',
        '/flowers/flower14.png',
        '/flowers/flower15.png',
        '/flowers/lily.png',
        '/flowers/rose1.png',
        '/flowers/tulip1.png',
        '/flowers/tulip2.png',
        '/flowers/tulip3.png',
        '/flowers/leaf1.png',
        '/flowers/leaf2.png',
        '/flowers/leaf3.png',
        '/flowers/leaf4.png',
        '/flowers/leaf5.png',
        '/flowers/leaf6.png',
      ],
    }
  },
  methods: {
    handleClick(option) {
      this.moverArray.push(option)
    },
  },
  head() {
    return {
      title: 'Flower Arranging 🌼🌸🌻',
    }
  },
}
</script>
