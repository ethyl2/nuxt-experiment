<template>
  <div class="bg-black" @mouseup="isDragging = false">
    <div class="flex flex-col items-center justify-center py-4 space-y-2">
      <h1 class="text-lg font-bold text-white">
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
              @click="toggleAudioPermission"
            />
            <!-- line -->
            <div
              class="w-10 h-4 bg-gray-400 rounded-full shadow-inner toggle__line"
            ></div>
            <!-- dot -->
            <div
              id="toggle-dot"
              class="absolute inset-y-0 left-0 w-6 h-6 bg-white rounded-full shadow toggle__dot"
            ></div>
          </div>
          <!-- label -->
          <div class="ml-3 text-sm text-white">Allow Audio</div>
        </label>
      </div>

      <!-- INSTRUCTIONS -->
      <h2 class="text-sm text-base text-center text-white">
        <span class="hidden md:inline">Click</span
        ><span class="md:hidden">Tap</span> on a 'hole' once to place a 'peg';
        <span class="hidden md:inline">click</span
        ><span class="md:hidden"><br />tap</span> again to take the 'peg' out.
        <span class="hidden md:inline">Press 'F' for fullscreen.</span>
      </h2>

      <!-- CONTROL PANEL -->
      <div class="flex items-stretch justify-center divide-x">
        <div class="flex flex-col items-center justify-center px-4">
          <label for="favcolor" class="pb-1 text-sm text-center md:text-base"
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
          <p class="text-sm text-center text-white md:text-base">
            {{ currentColor }}
          </p>
        </div>
        <div class="px-4">
          <p class="pb-2 text-sm text-center md:text-base">
            Or use one of these:
          </p>
          <div
            class="grid grid-cols-4 mx-auto gap-y-1 md:flex md:items-center md:justify-center md:space-x-2 md:gap-y-0"
          >
            <button
              v-for="color in colors"
              :key="color"
              class="w-6 h-6 mx-auto transition duration-500 ease-in-out transform rounded hover:-translate-y-1 hover:scale-110 md:w-5 md:h-5"
              :style="{ background: `${color}` }"
              @click="changeColor(color)"
            ></button>
          </div>
        </div>
        <div class="flex flex-col items-center justify-center px-4 space-y-2">
          <button
            v-if="countPegsPlaced > 0"
            type="button"
            class="px-2 py-1 text-sm bg-gray-900 rounded md:text-base hover:bg-gray-700"
            @click="clearScreen"
          >
            Clear All Pegs
          </button>
          <button
            type="button"
            class="px-2 py-1 text-sm bg-gray-900 rounded md:text-base hover:bg-gray-700"
            @click="getRandomColor"
          >
            Random Color
          </button>
        </div>
      </div>
    </div>

    <div
      class="flex-shrink-0 w-full min-h-screen py-4 mx-auto overflow-auto bg-black"
    >
      <!-- PEG GRID -->
      <grid
        :originally-spaced-grid="originallySpacedGrid"
        @handle-click="handleClick"
        @handle-mouse-down="handleMouseDown"
        @handle-mouse-move="handleMouseMove"
        @handle-mouse-up="handleMouseUp"
      />

      <!-- BOTTOM SECTION -->
      <div
        class="flex flex-col items-center justify-center pb-4 space-y-3 md:grid md:grid-cols-3 md:space-y-0 md:pt-4 md:items-start md:pb-0"
      >
        <p class="pt-2 text-center text-white md:pt-0">
          Number of pegs placed: {{ countPegsPlaced }}
        </p>

        <!-- GRID LAYOUT TOGGLE -->
        <div class="flex items-center justify-center w-full mt-3">
          <div
            class="mr-3 text-sm text-white cursor-pointer"
            tabindex="0"
            @click="originallySpacedGrid = !originallySpacedGrid"
          >
            Stacked Holes
          </div>
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
                @click="toggleGridSpacing"
              />
              <!-- line -->
              <div
                class="w-10 h-4 bg-gray-400 rounded-full shadow-inner toggle__line"
              ></div>
              <!-- dot -->
              <div
                class="absolute inset-y-0 left-0 w-6 h-6 bg-white rounded-full shadow toggle__dot"
                :style="`background: ${currentColor}; box-shadow: 0px 0px 10px 5px ${currentColor}`"
              ></div>
            </div>
            <!-- label -->
            <div class="ml-3 text-sm text-white">Staggered Holes</div>
          </label>
        </div>

        <!-- TOOLS THAT USE RANDOM -->
        <div class="flex flex-col" :class="{ 'space-y-3': showSaveButton }">
          <div class="flex items-center justify-center space-x-3">
            <button
              type="button"
              class="max-w-sm px-2 py-1 text-sm bg-gray-900 rounded md:text-base hover:bg-gray-700"
              title="Add a random sprinkle of the current color"
              @click="sprinkleWithColor"
            >
              Sprinkle
            </button>
            <button
              type="button"
              class="max-w-sm px-2 py-1 text-sm bg-gray-900 rounded md:text-base hover:bg-gray-700"
              title="Create a random display of random colors"
              @click="addRandom"
            >
              Let the <span class="hidden md:inline">Computer</span
              ><span class="md:hidden">Device</span> Be the Artist
            </button>
          </div>
          <div class="flex items-center justify-center space-x-3">
            <button
              v-if="showSaveButton"
              type="button"
              class="max-w-sm px-2 py-1 text-sm bg-gray-900 rounded md:text-base hover:bg-gray-700"
              @click="saveGrid"
            >
              Save Design
            </button>
            <button
              v-if="savedGrid.length && !isShowingRestoredGrid"
              type="button"
              class="max-w-sm px-2 py-1 text-sm bg-gray-900 rounded md:text-base hover:bg-gray-700"
              @click="restoreGrid"
            >
              Restore Saved Design
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col py-4 space-y-2 text-center bg-gray-800 md:py-4">
      <p class="px-4 text-xs italic">
        I have fond memories of Lite Brite. My parents found our old Lite Brite
        and sent it to me. So fun! If you enjoy with this virtual Lite Brite,
        you might want to get a
        <a
          href="https://shop.hasbro.com/en-us/product/lite-brite-ultimate-classic:A0579FDA-BDE1-4888-840A-1862576A318E"
          target="_blank"
          >real one</a
        >?!
      </p>
      <p class="px-4 text-xs italic">
        Check out my Lite-Brite-inspired
        <a href="https://litebrite-game-of-life.netlify.app/" target="_blank"
          >implementation of Conway's Game of Life</a
        >, too!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LiteBrite',
  components: {
    Grid: () => import('~/components/liteBrite/Grid'),
  },
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
      savedGrid: [],
      showSaveButton: false,
      isShowingRestoredGrid: false,
      shouldFlashDisplay: false,
      currentInterval: null,
      sounds: {
        click: 'click.wav',
        windchimes: 'windchimes.wav',
        rolling: 'rolling.mp3',
        tap: 'tap.wav',
        shake: 'shake.wav',
        harp: 'harp.wav',
        harp2: 'harp2.wav',
        slide: 'slide.wav',
        'slide-up': 'slide-up.wav',
        'slide-down': 'slide-down.wav',
        fanfare: 'fanfare.mp3',
      },
    }
  },
  mounted() {
    document.addEventListener(
      'keypress',
      function (e) {
        const gridEl = document.getElementById('grid')
        if (e.key === 'F' || e.key === 'f') {
          if (!document.fullscreenElement) {
            gridEl.classList.add('pt-24')
            gridEl.requestFullscreen()
          } else if (document.exitFullscreen) {
            document.exitFullscreen()
            gridEl.classList.remove('pt-24')
          }
        }
      },
      false
    )
  },
  methods: {
    updateToggleColor() {
      const toggleDot = document.getElementById('toggle-dot')
      if (this.allowAudio) {
        this.updatePeg(toggleDot)
      } else {
        this.takeOutPeg(toggleDot, '#ffffff')
      }
    },
    handleClick(event) {
      this.playSound('click')
      const currentHole = event.target
      let bgColor = currentHole.style.background
      const bgColorArray = bgColor.replace(/[^\d,]/g, '').split(',')
      if (bgColorArray.length > 1) {
        bgColor = this.rgbToHex(bgColorArray)
      }
      if (bgColor !== this.currentColor) {
        if (!bgColor || bgColor === 'transparent') {
          this.countPegsPlaced++
        }
        this.updatePeg(currentHole)
      } else {
        this.takeOutPeg(currentHole)
        this.countPegsPlaced--
      }
      if (this.countPegsPlaced > 0) {
        this.showSaveButton = true
      }
      this.isShowingRestoredGrid = false
    },
    changeColor(color) {
      this.currentColor = color
      this.playSound('tap')
      this.updateToggleColor()
    },
    clearScreen() {
      if (this.countPegsPlaced > 0) {
        this.playSound('rolling')
      }
      const holes = document.querySelectorAll('.hole')
      holes.forEach((hole) => {
        this.takeOutPeg(hole)
      })
      this.countPegsPlaced = 0
      this.isShowingRestoredGrid = false
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
      if (this.countPegsPlaced > 0) {
        this.playSound('rolling')
      }
      const holes = document.querySelectorAll('.hole')
      this.countPegsPlaced = 0
      holes.forEach((hole) => {
        this.takeOutPeg(hole)
        const randomColor =
          '#' + Math.floor(Math.random() * 16777215).toString(16)
        if (this.rollDice(4)) {
          setTimeout(() => {
            this.updatePeg(hole, randomColor)
            this.countPegsPlaced++
          }, 1000)
        }
      })
      this.isShowingRestoredGrid = false
      this.showSaveButton = true
      setTimeout(() => {
        this.playSound('windchimes')
      }, 500)
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
            this.updatePeg(hole)
          }, 500)
        }
      })
      this.isShowingRestoredGrid = false
      this.showSaveButton = true
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
        const currentAudioFile = this.sounds[sound] ?? 'tap.wav'
        this.audio = new Audio(`/sounds/${currentAudioFile}`)
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
      this.showSaveButton = true
      this.isShowingRestoredGrid = false
    },
    handleMouseMove() {
      if (this.isDragging) {
        event.preventDefault()
        const currentPeg = event.target
        if (!currentPeg.style.backgroundColor) {
          this.countPegsPlaced++
        }
        this.updatePeg(currentPeg)
      }
    },
    handleMouseUp() {
      event.preventDefault()
      this.isDragging = false
    },
    saveGrid() {
      this.playSound('tap')
      this.savedGrid = []
      const holes = document.querySelectorAll('.hole')
      holes.forEach((hole) => {
        if (!hole.style.backgroundColor) {
          this.savedGrid.push('0')
        } else {
          this.savedGrid.push(hole.style.backgroundColor)
        }
      })
      this.showSaveButton = false
      this.isShowingRestoredGrid = true
    },
    restoreGrid() {
      this.playSound('tap')
      this.countPegsPlaced = 0
      const holes = document.querySelectorAll('.hole')
      holes.forEach((hole, index) => {
        if (this.savedGrid[index] !== '0') {
          this.updatePeg(hole, this.savedGrid[index])
          this.countPegsPlaced++
        } else {
          this.takeOutPeg(hole)
        }
      })
      this.showSaveButton = false
      this.isShowingRestoredGrid = true
    },
    flash() {
      this.shouldFlashDisplay = !this.shouldFlashDisplay
      if (this.shouldFlashDisplay) {
        const holes = document.querySelectorAll('.hole')
        const bgColors = []
        holes.forEach((hole) => {
          if (!hole.style.backgroundColor) {
            bgColors.push('transparent')
          } else {
            bgColors.push(hole.style.backgroundColor)
          }
        })
        // For future use to toggle all at once:
        // let show = true
        // setInterval(() => {
        //   if (show) {
        //     holes.forEach((hole, index) => {
        //       hole.style.background = bgColors[index]
        //       hole.style.boxShadow = `0px 0px 10px 5px ${bgColors[index]}`
        //     })
        //   } else {
        //     holes.forEach((hole) => {
        //       hole.style.background = 'transparent'
        //       hole.style.boxShadow = 'none'
        //     })
        //   }
        //   show = !show
        // }, 500)
        let showEvens = true
        this.currentInterval = setInterval(() => {
          holes.forEach((hole, index) => {
            if (
              (showEvens && index % 2 === 0) ||
              (!showEvens && index % 2 !== 0)
            ) {
              hole.style.background = bgColors[index]
              hole.style.boxShadow = `0px 0px 10px 5px ${bgColors[index]}`
            } else {
              hole.style.background = 'transparent'
              hole.style.boxShadow = 'none'
            }
          })
          showEvens = !showEvens
        }, 500)
      } else {
        clearInterval(this.currentInterval)
        this.currentInterval = null
      }
    },
    updatePeg(element, color = this.currentColor) {
      element.style.background = color
      element.style.boxShadow = `0px 0px 10px 5px ${color}`
    },
    takeOutPeg(element, color = 'transparent') {
      element.style.background = color
      element.style.boxShadow = 'none'
    },
    toggleGridSpacing() {
      if (this.originallySpacedGrid) {
        this.playSound('slide-down')
      } else {
        this.playSound('slide-up')
      }
      this.originallySpacedGrid = !this.originallySpacedGrid
    },
    toggleAudioPermission() {
      if (this.allowAudio) {
        this.playSound('slide-down')
        this.allowAudio = false
      } else {
        this.allowAudio = true
        this.playSound('slide-up')
      }
      this.updateToggleColor()
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
