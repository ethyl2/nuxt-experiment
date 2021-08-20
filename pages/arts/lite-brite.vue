<template>
  <div class="bg-black">
    <div class="flex flex-col items-center justify-center space-y-2 py-4">
      <h1 class="text-white">Lite Brite on Your Computer!</h1>
      <label for="favcolor">Select your color:</label>
      <input
        id="favcolor"
        v-model="currentColor"
        type="color"
        name="favcolor"
      />
      <p class="text-white">{{ currentColor }}</p>
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
          class="border border-gray-200 border-opacity-25 rounded-full w-4 h-4 m-px flex-shrink-0 cursor-pointer"
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
      console.log('clicked')
      console.log(event)
      event.target.style.background = this.currentColor
      event.target.style.boxShadow = `0px 0px 10px 5px ${this.currentColor}`
    },
  },
}
</script>
