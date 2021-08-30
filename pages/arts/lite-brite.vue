<template>
  <div class="bg-black" @mouseup="isDragging = false">
    <div class="flex flex-col items-center justify-center space-y-2 py-4">
      <h1 class="text-white text-lg font-bold">
        Lite Brite on Your <span class="hidden md:inline">Computer</span
        ><span class="md:hidden">Device</span>!
      </h1>

      <!-- AUDIO PERMISSIONS TOGGLE -->
      <div class="flex items-center justify-center w-full mt-3">
        <!-- Toggle Button -->
        <label for="audioToggle" class="flex items-center cursor-pointer">
          <!-- toggle -->
          <div class="relative">
            <!-- input -->
            <input
              id="audioToggle"
              v-model="allowAudio"
              type="checkbox"
              class="hidden"
              @click="
                allowAudio = !allowAudio
                updateToggleColor()
              "
            />
            <!-- line -->
            <div
              class="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"
            ></div>
            <!-- dot -->
            <div
              id="toggle-dot"
              class="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"
            ></div>
          </div>
          <!-- label -->
          <div class="ml-3 text-white text-sm">Allow Audio</div>
        </label>
      </div>

      <!-- INSTRUCTIONS -->
      <h2 class="text-white text-sm text-center text-base">
        <span class="hidden md:inline">Click</span
        ><span class="md:hidden">Tap</span> on a 'hole' once to place a 'peg';
        <span class="hidden md:inline">click</span
        ><span class="md:hidden"><br />tap</span> again to take the 'peg' out.
      </h2>

      <!-- CONTROL PANEL -->
      <div class="flex items-stretch justify-center divide-x">
        <div class="flex flex-col items-center justify-center px-4">
          <label for="favcolor" class="text-center text-sm md:text-base pb-1"
            >Select your color:</label
          >
          <input
            id="favcolor"
            v-model="currentColor"
            type="color"
            name="favcolor"
            class="rounded"
            @click="playSound('tap')"
            @change="updateToggleColor"
          />
          <p class="text-white text-sm md:text-base text-center">
            {{ currentColor }}
          </p>
        </div>
        <div class="px-4">
          <p class="text-center text-sm pb-2 md:text-base">
            Or use one of these:
          </p>
          <div
            class="grid grid-cols-4 gap-y-1 mx-auto md:flex md:items-center md:justify-center md:space-x-2 md:gap-y-0"
          >
            <button
              v-for="color in colors"
              :key="color"
              class="w-6 h-6 rounded mx-auto transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:w-5 md:h-5"
              :style="{ background: `${color}` }"
              @click="changeColor(color)"
            ></button>
          </div>
        </div>
        <div class="px-4 flex flex-col items-center justify-center space-y-2">
          <button
            v-if="countPegsPlaced > 0"
            type="button"
            class="bg-gray-900 rounded px-2 py-1 text-sm md:text-base hover:bg-gray-700"
            @click="clearScreen"
          >
            Clear All Pegs
          </button>
          <button
            type="button"
            class="bg-gray-900 rounded px-2 py-1 text-sm md:text-base hover:bg-gray-700"
            @click="getRandomColor"
          >
            Random Color
          </button>
        </div>
      </div>
    </div>

    <!-- PEG GRID -->
    <div
      class="w-full min-h-screen bg-black mx-auto overflow-auto flex-shrink-0 p-4"
    >
      <div
        v-for="index in 35"
        :key="index"
        class="flex justify-center items-center flex-shrink-0"
        :class="{ 'pl-4': originallySpacedGrid && index % 2 === 0 }"
      >
        <div
          v-for="secondIndex in 75"
          :key="secondIndex"
          class="hole border border-gray-200 border-opacity-25 rounded-full w-4 h-4 m-px flex-shrink-0 cursor-pointer bg-transparent"
          tabindex="0"
          @click="handleClick"
          @keyup.enter="handleClick"
          @mousedown="handleMouseDown"
          @mousemove="handleMouseMove"
          @mouseup="handleMouseUp"
        ></div>
      </div>

      <!-- BOTTOM SECTION -->
      <div
        class="flex flex-col space-y-3 justify-center items-center md:grid md:grid-cols-3 md:space-y-0 md:pt-4"
      >
        <p class="text-center text-white pt-2 w-full">
          Number of pegs placed: {{ countPegsPlaced }}
        </p>
        <!-- GRID LAYOUT TOGGLE -->
        <div class="flex items-center justify-center w-full mt-3">
          <div class="mr-3 text-white text-sm">Stacked Holes</div>
          <!-- Toggle Button -->
          <label for="gridToggle" class="flex items-center cursor-pointer">
            <!-- toggle -->
            <div class="relative">
              <!-- input -->
              <input
                id="gridToggle"
                v-model="originallySpacedGrid"
                type="checkbox"
                class="hidden"
                @click="originallySpacedGrid = !originallySpacedGrid"
              />
              <!-- line -->
              <div
                class="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"
              ></div>
              <!-- dot -->
              <div
                class="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"
                :style="`background: ${currentColor}; box-shadow: 0px 0px 10px 5px ${currentColor}`"
              ></div>
            </div>
            <!-- label -->
            <div class="ml-3 text-white text-sm">Staggered Holes</div>
          </label>
        </div>
        <div class="flex flex-col space-y-3">
          <button
            type="button"
            class="bg-gray-900 rounded px-2 py-1 text-sm max-w-sm mx-auto md:text-base hover:bg-gray-700"
            title="Add a random sprinkle of the current color"
            @click="sprinkleWithColor"
          >
            Sprinkle
          </button>
          <button
            type="button"
            class="bg-gray-900 rounded px-2 py-1 text-sm max-w-sm mx-auto md:text-base hover:bg-gray-700"
            title="Create a random display of random colors"
            @click="addRandom"
          >
            Let the <span class="hidden md:inline">Computer</span
            ><span class="md:hidden">Device</span> Be the Artist
          </button>
        </div>
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
      countPegsPlaced: 0,
      colors: [
        '#fc1c03',
        '#07f2e3',
        '#ffffff',
        '#3ff91a',
        '#f90bdd',
        '#ff5f1f',
        '#fff04d',
        '#0d4eff',
      ],
      audio: null,
      allowAudio: false,
      originallySpacedGrid: false,
      isDragging: false,
    }
  },
  methods: {
    updateToggleColor() {
      const toggleDot = document.getElementById('toggle-dot')
      if (this.allowAudio) {
        toggleDot.style.background = this.currentColor
        toggleDot.style.boxShadow = `0px 0px 10px 5px ${this.currentColor}`
      } else {
        toggleDot.style.background = '#ffffff'
        toggleDot.style.boxShadow = 'none'
      }
    },
    handleClick(event) {
      this.playSound('click')
      let bgColor = event.target.style.background
      const bgColorArray = bgColor.replace(/[^\d,]/g, '').split(',')
      if (bgColorArray.length > 1) {
        bgColor = this.rgbToHex(bgColorArray)
      }
      if (bgColor !== this.currentColor) {
        if (!bgColor || bgColor === 'transparent') {
          this.countPegsPlaced++
        }
        event.target.style.background = this.currentColor
        event.target.style.boxShadow = `0px 0px 10px 5px ${this.currentColor}`
      } else {
        event.target.style.background = 'transparent'
        event.target.style.boxShadow = `none`
        this.countPegsPlaced--
      }
    },
    changeColor(color) {
      this.currentColor = `${color}`
      this.playSound('tap')
      this.updateToggleColor()
    },
    clearScreen() {
      if (this.countPegsPlaced > 0) {
        this.playSound('rolling')
      }
      const holes = document.querySelectorAll('.hole')
      holes.forEach((hole) => {
        hole.style.background = 'transparent'
        hole.style.boxShadow = 'none'
      })
      this.countPegsPlaced = 0
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
    getRandomColor() {
      this.playSound('fanfare')
      this.currentColor =
        '#' + Math.floor(Math.random() * 16777215).toString(16)
      this.updateToggleColor()
    },
    addRandom() {
      this.playSound('windchimes')
      const holes = document.querySelectorAll('.hole')
      this.countPegsPlaced = 0
      holes.forEach((hole) => {
        hole.style.background = 'transparent'
        hole.style.boxShadow = 'none'
        const randomColor =
          '#' + Math.floor(Math.random() * 16777215).toString(16)
        if (this.rollDice(4)) {
          setTimeout(() => {
            hole.style.background = randomColor
            hole.style.boxShadow = `0px 0px 10px 5px ${randomColor}`
            this.countPegsPlaced++
          }, 1000)
        }
      })
    },
    sprinkleWithColor() {
      this.playSound('shake')
      const holes = document.querySelectorAll('.hole')
      holes.forEach((hole) => {
        if (this.rollDice()) {
          setTimeout(() => {
            if (!hole.style.backgroundColor) {
              this.countPegsPlaced++
            }
            hole.style.background = this.currentColor
            hole.style.boxShadow = `0px 0px 10px 5px ${this.currentColor}`
          }, 500)
        }
      })
    },
    rollDice(num = 50) {
      const diceRoll = Math.round(Math.random() * num)
      return diceRoll === 1
    },
    playSound(sound) {
      if (this.audio) {
        this.audio.pause()
        this.audio.currentTime = 0
      }
      if (this.allowAudio) {
        let soundFileName = ''
        switch (sound) {
          case 'click':
            soundFileName = 'click.wav'
            break
          case 'windchimes':
            soundFileName = 'windchimes.wav'
            break
          case 'rolling':
            soundFileName = 'rolling.mp3'
            break
          case 'tap':
            soundFileName = 'tap.wav'
            break
          case 'shake':
            soundFileName = 'shake.wav'
            break
          case 'harp':
            soundFileName = 'harp.wav'
            break
          case 'harp2':
            soundFileName = 'harp2.wav'
            break
          default:
            soundFileName = 'fanfare.mp3'
        }
        this.audio = new Audio(`/sounds/${soundFileName}`)
        this.audio.play()
      }
    },
    handleMouseDown() {
      event.preventDefault()
      this.isDragging = true
      setTimeout(() => {
        if (this.isDragging) {
          if (this.rollDice(2)) {
            this.playSound('harp')
          } else {
            this.playSound('harp2')
          }
        }
      }, 500)
    },
    handleMouseMove() {
      if (this.isDragging) {
        event.preventDefault()
        const currentPeg = event.target
        if (!currentPeg.style.backgroundColor) {
          this.countPegsPlaced++
        }
        currentPeg.style.background = this.currentColor
        currentPeg.style.boxShadow = `0px 0px 10px 5px ${this.currentColor}`
      }
    },
    handleMouseUp() {
      event.preventDefault()
      this.isDragging = false
    },
  },
}
</script>

<style>
.toggle__dot {
  top: -0.25rem;
  left: -0.25rem;
  transition: all 0.3s ease-in-out;
}

input:checked ~ .toggle__dot {
  transform: translateX(100%);
}
</style>
