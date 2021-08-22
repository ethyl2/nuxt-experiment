<template>
  <div class="bg-black">
    <div class="flex flex-col items-center justify-center space-y-2 py-4">
      <h1 class="text-white text-lg font-bold">Lite Brite on Your Computer!</h1>
      <h2 class="text-white text-base">
        Click on a 'hole' once to place a 'peg'; click again to take the 'peg'
        out.
      </h2>
      <div class="flex items-start justify-center space-x-4 divide-x">
        <div class="flex flex-col items-center justify-center">
          <label for="favcolor">Select your color:</label>
          <input
            id="favcolor"
            v-model="currentColor"
            type="color"
            name="favcolor"
            class="rounded"
          />
          <p class="text-white">{{ currentColor }}</p>
        </div>
        <div class="px-4">
          <p>Or use one of these colors:</p>
          <div class="flex items-center justify-center space-x-2">
            <button
              class="w-5 h-5 rounded"
              style="background: #07f2e3"
              @click="currentColor = '#07f2e3'"
            ></button>
            <button
              class="w-5 h-5 rounded"
              style="background: #fc1c03"
              @click="currentColor = '#fc1c03'"
            ></button>
            <button
              class="w-5 h-5 rounded"
              style="background: #3ff91a"
              @click="currentColor = '#3ff91a'"
            ></button>
            <button
              class="w-5 h-5 rounded"
              style="background: #f90bdd"
              @click="currentColor = '#f90bdd'"
            ></button>
            <button
              class="w-5 h-5 rounded"
              style="background: #ff5f1f"
              @click="currentColor = '#ff5f1f'"
            ></button>
            <button
              class="w-5 h-5 rounded"
              style="background: #fff04d"
              @click="currentColor = '#fff04d'"
            ></button>
            <button
              class="w-5 h-5 rounded"
              style="background: #0d4eff"
              @click="currentColor = '#0d4eff'"
            ></button>
          </div>
        </div>
        <div class="pl-4">
          <button
            type="button"
            class="bg-gray-900 rounded px-2 py-1 hover:bg-gray-700"
            @click="clearScreen"
          >
            Clear All Pegs
          </button>
        </div>
      </div>
    </div>
    <div
      class="w-full min-h-screen bg-black mx-auto overflow-auto flex-shrink-0"
    >
      <div
        v-for="index in 35"
        :key="index"
        class="flex justify-center items-center flex-shrink-0"
      >
        <div
          v-for="secondIndex in 75"
          :key="secondIndex"
          class="hole border border-gray-200 border-opacity-25 rounded-full w-4 h-4 m-px flex-shrink-0 cursor-pointer bg-transparent"
          @click="handleClick"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LiteBrite',
  data() {
    return {
      currentColor: '#d228b6',
    }
  },
  methods: {
    handleClick(event) {
      let bgColor = event.target.style.background
      const bgColorArray = bgColor.replace(/[^\d,]/g, '').split(',')
      if (bgColorArray.length > 1) {
        bgColor = this.rgbToHex(bgColorArray)
      }
      if (bgColor !== this.currentColor) {
        event.target.style.background = this.currentColor
        event.target.style.boxShadow = `0px 0px 10px 5px ${this.currentColor}`
      } else {
        event.target.style.background = 'transparent'
        event.target.style.boxShadow = `none`
      }
    },
    clearScreen() {
      const holes = document.querySelectorAll('.hole')
      holes.forEach((hole) => {
        hole.style.background = 'transparent'
        hole.style.boxShadow = 'none'
      })
    },
    componentToHex(c) {
      const hex = Number(c).toString(16)
      return hex.length === 1 ? '0' + hex : hex
    },
    rgbToHex(colorArray) {
      return (
        '#' +
        this.componentToHex(colorArray[0]) +
        this.componentToHex(colorArray[1]) +
        this.componentToHex(colorArray[2])
      )
    },
  },
}
</script>
