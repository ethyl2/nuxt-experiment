<template>
  <div
    class="flex flex-col items-center justify-center text-center mx-4 md:mx-10"
  >
    <h1 class="text-2xl mb-4">Color Picker</h1>
    <p class="mb-2">
      Either enter a hex code (# with 6 digits), click on the small box, or
      click on a pill, to select a color.
    </p>
    <form class="flex flex-col" @submit.prevent="getColorName">
      <div class="flex justify-center items-stretch">
        <input
          v-model="hexColor"
          type="text"
          minlength="7"
          maxlength="7"
          class="text-black text-lg rounded p-1"
          @input="handleInputChange"
        />
        <input
          v-model="hexColor"
          class="rounded h-10 w-10 ml-2 outline-none"
          type="color"
          @input="handleInputChange"
        />
      </div>
      <button
        v-if="!nameColor && hexColor"
        type="submit"
        class="p-1 border bg-black text-white rounded my-2"
      >
        Does it have a name?
      </button>
    </form>
    <p v-if="nameColor" class="py-2">{{ nameColor }}</p>
    <form v-if="needsName" class="py-2 rounded" @submit.prevent="addPill">
      <input
        v-model="newName"
        type="text"
        class="text-black text-lg rounded p-1"
      />
      <button
        v-if="newName && needsName"
        type="submit"
        class="p-1 border bg-black text-white rounded my-2"
      >
        Submit Name
      </button>
    </form>
    <div
      v-if="hexColor"
      class="flex justify-center items-center w-20 h-20 rounded mx-auto text-xl mb-2"
      :style="backgroundStyles"
    >
      😁
    </div>

    <h2 class="text-lg">Color Pills</h2>
    <div class="flex justify-center items-center flex-wrap">
      <div
        v-for="color in colorNames"
        :key="color[0]"
        class="py-1 px-2 rounded-full m-2 cursor-pointer hover:text-black"
        :style="boxStyle(color[0])"
        @click="changeColor(color)"
      >
        {{ color[1] }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColorPicker',
  data() {
    return {
      nameColor: '',
      hexColor: '',
      needsName: false,
      newName: '',
      newColors: [],
    }
  },
  computed: {
    colorNames() {
      return this.newColors.concat(this.$store.state.colors.colorNames)
    },
    backgroundStyles() {
      return {
        'background-color': this.hexColor,
      }
    },
  },
  methods: {
    getColorName() {
      this.hexColor = this.hexColor.toUpperCase()
      const colorName = this.colorNames.find(
        (e) => e[0] === this.hexColor.slice(1)
      )
      if (colorName) {
        this.nameColor = colorName[1]
      } else {
        this.nameColor = `Sorry, no name found for ${this.hexColor}. What would you call it?`
        this.needsName = true
      }
    },
    boxStyle(hexColor) {
      return {
        'background-color': `#${hexColor}`,
      }
    },
    changeColor(color) {
      this.hexColor = `#${color[0]}`
      this.nameColor = color[1]
    },
    addPill() {
      this.newColors.push([this.hexColor.slice(1), this.newName])
      this.needsName = false
      this.nameColor = this.newName
    },
    handleInputChange() {
      this.nameColor = ''
    },
  },
}
</script>
