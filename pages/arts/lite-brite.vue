<template>
  <div class="bg-black">
    <div class="flex flex-col items-center justify-center space-y-2 py-4">
      <h1 class="text-white text-lg font-bold">Lite Brite on Your Computer!</h1>
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
              @click="currentColor = '#FF5F1F'"
            ></button>
            <button
              class="w-5 h-5 rounded"
              style="background: #fff04d"
              @click="currentColor = '#FFF04D'"
            ></button>
            <button
              class="w-5 h-5 rounded"
              style="background: #0d4eff"
              @click="currentColor = '#0D4EFF'"
            ></button>
          </div>
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
