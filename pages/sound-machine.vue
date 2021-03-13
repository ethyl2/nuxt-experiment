/* eslint-disable nuxt/no-globals-in-created */
<template>
  <div class="min-h-screen m-4 text-center md:m-10">
    <h1 class="text-xl pb-2 md:text-3xl">Sound Machine</h1>
    <h2 class="mb-2">
      Click on the buttons below, or press the indicated keys, to play.
    </h2>
    <div
      class="grid grid-cols-3 w-full bg-gray-900 rounded p-2 mb-4 mx-auto md:w-1/2 md:grid-cols-4"
    >
      <button
        v-for="sound in orderedSounds"
        :key="sound.name"
        class="relative border p-1 rounded m-2 text-sm lg:p-2 lg:text-base"
        :class="
          currentButton === sound.name
            ? 'bg-pink-600 hover:bg-pink-800'
            : 'bg-teal-600 hover:bg-teal-800'
        "
        type="button"
        @click="play(sound)"
      >
        {{ sound.name }}
        <span
          class="absolute top-0 left-0 px-1 border-r border-b text-black text-xs bg-green-400 bg-opacity-50 font-bold"
          >{{ sound.press }}</span
        >
      </button>
    </div>

    <button
      type="button"
      class="mb-4 border p-1 rounded m-2 text-sm hover:bg-teal-900 lg:p-2 lg:text-base"
      @click="togglePlayAll"
    >
      {{ !shouldPlayAll ? 'Play All' : 'Cancel Play All' }}
    </button>

    <!-- Sound Sentence Section -->
    <section class="mb-8">
      <h2 class="text-xl pb-2 md:text-2xl">Make a Sound Sentence</h2>
      <p class="text-sm md:text-base">
        Select which sounds you'd like to string together:
      </p>
      <select
        v-model="selectedSound"
        name="sound-sentence"
        class="rounded m-2 text-black"
      >
        <option value="-" class="text-black" disabled>Choose a sound:</option>
        <option
          v-for="sound in orderedSounds"
          :key="sound.name"
          :value="sound"
          class="text-black"
          :disabled="selectedSound === sound"
        >
          {{ sound.name }}
        </option>
      </select>
      <p class="text-xl text-yellow-400 mb-4">
        <span
          v-for="(sound, index) in soundSentence"
          :key="`${sound.name}-${index}`"
          :class="{
            capitalize: index === 0,
            'text-pink-600': currentButton === sound.name,
          }"
          >{{ sound.name }}{{ ' ' }}</span
        >
        <span v-if="soundSentence.length">.</span>
      </p>
      <button
        v-if="soundSentence.length"
        class="mb-8 border p-1 rounded m-2 text-sm hover:bg-teal-900 lg:p-2 lg:text-base"
        type="button"
        @click="playSentence"
      >
        Play Sentence
      </button>
      <button
        v-if="soundSentence.length"
        class="mb-8 border p-1 rounded m-2 text-sm hover:bg-teal-900 lg:p-2 lg:text-base"
        type="button"
        @click="clearSentence"
      >
        Clear Sentence
      </button>
    </section>

    <!-- Sound Sources Section -->
    <footer>
      <h2 class="text-lg py-2 border-t md:text-xl">Sound Sources</h2>
      <div class="text-center">
        <a
          v-for="(sound, index) in orderedSounds"
          :key="sound.name"
          :href="sound.sourceUrl"
          target="_blank"
          class="text-xs md:text-sm"
          >{{ sound.name }}
          <span v-show="index !== orderedSounds.length - 1"> | </span>
        </a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'SoundMachine',
  data() {
    return {
      currentButton: null,
      timeouts: [],
      shouldPlayAll: false,
      selectedSound: null,
      soundSentence: [],
      audio: null,
    }
  },
  computed: {
    orderedSounds() {
      return [...this.$store.state.sounds.sounds].sort((a, b) =>
        a.name > b.name ? 1 : -1
      )
    },
  },
  watch: {
    selectedSound(val) {
      this.soundSentence.push(val)
    },
  },
  mounted() {
    // eslint-disable-next-line nuxt/no-globals-in-created
    window.addEventListener('keypress', this.handleKeyPress)
  },
  destroyed() {
    window.removeEventListener('keypress', this.handleKeyPress)
  },
  methods: {
    handleKeyPress(e) {
      const desiredSound = this.orderedSounds.filter(
        (sound) => sound.press === e.key
      )[0]
      this.play(desiredSound)
    },
    play(sound) {
      this.currentButton = sound.name
      if (this.audio) {
        this.audio.pause()
        this.audio.currentTime = 0
      }
      this.audio = new Audio(sound.soundUrl)
      this.audio.play()
      setTimeout(() => (this.currentButton = null), 1000)
    },
    togglePlayAll() {
      this.shouldPlayAll = !this.shouldPlayAll

      if (this.shouldPlayAll) {
        let time = 0
        this.orderedSounds.forEach((sound) => {
          time += 800
          this.timeouts.push(
            setTimeout(() => {
              if (this.audio) {
                this.audio.pause()
                this.audio.currentTime = 0
              }
              this.currentButton = sound.name
              this.audio = new Audio(sound.soundUrl)
              this.audio.play()
            }, time)
          )
          setTimeout(() => {
            this.currentButton = null
            this.shouldPlayAll = false
          }, 800 * (this.orderedSounds.length + 1))
        })
      } else {
        this.stopAll()
      }
    },
    stopAll() {
      this.timeouts.forEach((timeout) => clearTimeout(timeout))
      this.currentButton = null
    },
    playSentence() {
      let time = 0
      this.soundSentence.forEach((sound) => {
        time += 1000
        this.timeouts.push(
          setTimeout(() => {
            if (this.audio) {
              this.audio.pause()
              this.audio.currentTime = 0
            }
            this.currentButton = sound.name
            this.audio = new Audio(sound.soundUrl)
            this.audio.play()
          }, time)
        )
        setTimeout(() => {
          this.currentButton = null
        }, 1000 * (this.soundSentence.length + 1))
      })
    },
    clearSentence() {
      this.soundSentence = []
      if (!this.shouldPlayAll) {
        this.timeouts.forEach((timeout) => clearTimeout(timeout))
        this.currentButton = null
      }
    },
  },
}
</script>
