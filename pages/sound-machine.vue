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
          <span v-show="index !== sounds.length - 1"> | </span>
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
      sounds: [
        {
          name: 'meow',
          soundUrl: 'sounds/meow.wav',
          sourceUrl: 'https://freesound.org/people/tuberatanka/sounds/110011/',
          press: 'v',
        },
        {
          name: 'gas',
          soundUrl: 'sounds/gas.wav',
          sourceUrl: 'https://freesound.org/people/Narjara/sounds/527519/',
          press: 'd',
        },
        {
          name: 'piano',
          soundUrl: 'sounds/piano.wav',
          sourceUrl:
            'https://freesound.org/people/thomasjaunism/sounds/218456/',
          press: '7',
        },
        {
          name: 'meow2',
          soundUrl: 'sounds/meow2.wav',
          sourceUrl: 'https://freesound.org/people/TRNGLE/sounds/362652/',
          press: '5',
        },
        {
          name: 'sneeze',
          soundUrl: 'sounds/sneeze.mp3',
          sourceUrl:
            'https://www.zapsplat.com/page/2/?s=sneeze&post_type=music&sound-effect-category-id',
          press: 'y',
        },
        {
          name: 'slide',
          soundUrl: 'sounds/slide.wav',
          sourceUrl: 'https://freesound.org/people/InspectorJ/sounds/410803/',
          press: '8',
        },
        {
          name: 'laser',
          soundUrl: 'sounds/laser.mp3',
          sourceUrl: 'https://freesound.org/people/Kastenfrosch/sounds/162470/',
          press: 'c',
        },
        {
          name: 'drum',
          soundUrl: 'sounds/drum.wav',
          sourceUrl:
            'https://freesound.org/people/thomasjaunism/sounds/218458/',
          press: 's',
        },
        {
          name: 'woof',
          soundUrl: 'sounds/woof.mp3',
          sourceUrl: 'https://freesound.org/people/Princess6537/sounds/144885/',
          press: 'k',
        },
        {
          name: 'cymbol',
          soundUrl: 'sounds/cymbol.wav.wav',
          sourceUrl: 'https://freesound.org/people/Karma-Ron/sounds/151820/',
          press: 'r',
        },
        {
          name: 'burp',
          soundUrl: 'sounds/burp.wav',
          sourceUrl:
            'https://freesound.org/people/NoiseCollector/sounds/63477/',
          press: '4',
        },
        {
          name: 'thunder',
          soundUrl: 'sounds/thunder.mp3',
          sourceUrl:
            'https://www.zapsplat.com/page/2/?s=thunder&post_type=music&sound-effect-category-id',
          press: 'g',
        },
        {
          name: 'clap',
          soundUrl: 'sounds/clap.wav',
          sourceUrl: 'https://freesound.org/people/Joao_Janz/sounds/482548/',
          press: 'q',
        },
        {
          name: 'tweet',
          soundUrl: 'sounds/tweet.wav',
          sourceUrl: 'https://freesound.org/people/yaplasut1843/sounds/523306/',
          press: 'j',
        },
        {
          name: 'snap',
          soundUrl: 'sounds/snap.wav',
          sourceUrl: 'https://freesound.org/people/Lynx_5969/sounds/418225/',
          press: 't',
        },
        {
          name: 'baby',
          soundUrl: 'sounds/baby.wav',
          sourceUrl: 'https://freesound.org/people/smurd800/sounds/318596/',
          press: '2',
        },
        {
          name: 'triangle',
          soundUrl: 'sounds/triangle.wav',
          sourceUrl: 'https://freesound.org/people/InspectorJ/sounds/354140/',
          press: 'h',
        },

        {
          name: 'cuckoo',
          soundUrl: 'sounds/cuckoo.wav',
          sourceUrl: 'https://freesound.org/people/InspectorJ/sounds/398194/',
          press: 'e',
        },
        {
          name: 'haha',
          soundUrl: 'sounds/haha.wav',
          sourceUrl: 'https://freesound.org/people/Robinhood76/sounds/108251/',
          press: 'f',
        },
        {
          name: 'cowbell',
          soundUrl: 'sounds/cowbell.wav',
          sourceUrl: 'https://freesound.org/people/Robinhood76/sounds/70058/',
          press: 'w',
        },
        {
          name: 'beep',
          soundUrl: 'sounds/beep.wav',
          sourceUrl: 'https://freesound.org/people/AmishRob/sounds/423990/',
          press: '3',
        },
        {
          name: 'oink',
          soundUrl: 'sounds/oink.wav',
          sourceUrl: 'https://freesound.org/people/qubodup/sounds/442906/',
          press: '6',
        },
        {
          name: 'squeak',
          soundUrl: 'sounds/squeak.wav',
          sourceUrl: 'https://freesound.org/people/AGFX/sounds/42941/',
          press: 'u',
        },
        {
          name: 'ah',
          soundUrl: 'sounds/ah.wav',
          sourceUrl: 'https://freesound.org/people/Gemesil/sounds/523216/',
          press: '1',
        },
        {
          name: 'tamborine',
          soundUrl: 'sounds/tamborine.wav',
          sourceUrl:
            'https://freesound.org/people/NoiseCollector/sounds/107475/',
          press: 'i',
        },
        {
          name: 'honk',
          soundUrl: 'sounds/honk.wav',
          sourceUrl: 'https://freesound.org/people/Stickinthemud/sounds/27880/',
          press: 'z',
        },
        {
          name: 'doorbell',
          soundUrl: 'sounds/doorbell.wav',
          sourceUrl: 'https://freesound.org/people/bennstir/sounds/81072/',
          press: 'a',
        },
        {
          name: 'kiss',
          soundUrl: 'sounds/kiss.mp3',
          sourceUrl: 'https://www.zapsplat.com/sound-effect-category/kiss/',
          press: 'x',
        },
      ],
      audio: null,
    }
  },
  computed: {
    orderedSounds() {
      return [...this.sounds].sort((a, b) => (a.name > b.name ? 1 : -1))
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
      const desiredSound = this.sounds.filter(
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
          }, 800 * (this.sounds.length + 1))
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
