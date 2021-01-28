<template>
  <div class="min-h-screen m-4 text-center md:m-10">
    <h1 class="text-3xl pb-2">Sound Machine</h1>
    <div
      class="grid grid-cols-3 w-full border border-black rounded p-2 mb-12 mx-auto md:w-1/2 md:grid-cols-4"
    >
      <button
        v-for="sound in sounds"
        :key="sound.name"
        class="border p-1 rounded m-2 text-sm hover:bg-teal-700 lg:p-2 lg:text-base"
        :class="currentButton === sound.name ? 'bg-pink-600' : 'bg-teal-600'"
        type="button"
        @click="play(sound.soundUrl)"
      >
        {{ sound.name }}
      </button>
    </div>

    <button type="button" class="mb-12" @click="playAll">Play All</button>

    <h2 class="text-2xl pb-2">Sound Sources</h2>
    <div class="text-center">
      <a
        v-for="(sound, index) in sounds"
        :key="sound.name"
        :href="sound.sourceUrl"
        target="_blank"
        class="text-sm md:text-base"
        >{{ sound.name }}
        <span v-show="index !== sounds.length - 1"> | </span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SoundMachine',
  data() {
    return {
      currentButton: null,
      sounds: [
        {
          name: 'meow',
          soundUrl: 'sounds/meow.wav',
          sourceUrl: 'https://freesound.org/people/tuberatanka/sounds/110011/',
        },
        {
          name: 'gas',
          soundUrl: 'sounds/gas.wav',
          sourceUrl: 'https://freesound.org/people/Narjara/sounds/527519/',
        },
        {
          name: 'piano',
          soundUrl: 'sounds/piano.wav',
          sourceUrl:
            'https://freesound.org/people/thomasjaunism/sounds/218456/',
        },

        {
          name: 'meow2',
          soundUrl: 'sounds/meow2.wav',
          sourceUrl: 'https://freesound.org/people/TRNGLE/sounds/362652/',
        },
        {
          name: 'slide',
          soundUrl: 'sounds/slide.wav',
          sourceUrl: 'https://freesound.org/people/InspectorJ/sounds/410803/',
        },
        {
          name: 'laser',
          soundUrl: 'sounds/laser.mp3',
          sourceUrl: 'https://freesound.org/people/Kastenfrosch/sounds/162470/',
        },
        {
          name: 'drum',
          soundUrl: 'sounds/drum.wav',
          sourceUrl:
            'https://freesound.org/people/thomasjaunism/sounds/218458/',
        },
        {
          name: 'woof',
          soundUrl: 'sounds/woof.mp3',
          sourceUrl: 'https://freesound.org/people/Princess6537/sounds/144885/',
        },
        {
          name: 'cymbol',
          soundUrl: 'sounds/cymbol.wav.wav',
          sourceUrl: 'https://freesound.org/people/Karma-Ron/sounds/151820/',
        },
        {
          name: 'burp',
          soundUrl: 'sounds/burp.wav',
          sourceUrl:
            'https://freesound.org/people/NoiseCollector/sounds/63477/',
        },
        {
          name: 'clap',
          soundUrl: 'sounds/clap.wav',
          sourceUrl: 'https://freesound.org/people/Joao_Janz/sounds/482548/',
        },
        {
          name: 'tweet',
          soundUrl: 'sounds/tweet.wav',
          sourceUrl: 'https://freesound.org/people/yaplasut1843/sounds/523306/',
        },
        {
          name: 'snap',
          soundUrl: 'sounds/snap.wav',
          sourceUrl: 'https://freesound.org/people/Lynx_5969/sounds/418225/',
        },
        {
          name: 'baby',
          soundUrl: 'sounds/baby.wav',
          sourceUrl: 'https://freesound.org/people/smurd800/sounds/318596/',
        },
        {
          name: 'triangle',
          soundUrl: 'sounds/triangle.wav',
          sourceUrl: 'https://freesound.org/people/InspectorJ/sounds/354140/',
        },

        {
          name: 'cuckoo',
          soundUrl: 'sounds/cuckoo.wav',
          sourceUrl: 'https://freesound.org/people/InspectorJ/sounds/398194/',
        },
        {
          name: 'haha',
          soundUrl: 'sounds/haha.wav',
          sourceUrl: 'https://freesound.org/people/Robinhood76/sounds/108251/',
        },
        {
          name: 'cowbell',
          soundUrl: 'sounds/cowbell.wav',
          sourceUrl: 'https://freesound.org/people/Robinhood76/sounds/70058/',
        },
        {
          name: 'beep',
          soundUrl: 'sounds/beep.wav',
          sourceUrl: 'https://freesound.org/people/AmishRob/sounds/423990/',
        },
        {
          name: 'oink',
          soundUrl: 'sounds/oink.wav',
          sourceUrl: 'https://freesound.org/people/qubodup/sounds/442906/',
        },
        {
          name: 'squeak',
          soundUrl: 'sounds/squeak.wav',
          sourceUrl: 'https://freesound.org/people/AGFX/sounds/42941/',
        },
        {
          name: 'ah',
          soundUrl: 'sounds/ah.wav',
          sourceUrl: 'https://freesound.org/people/Gemesil/sounds/523216/',
        },
        {
          name: 'tamborine',
          soundUrl: 'sounds/tamborine.wav',
          sourceUrl:
            'https://freesound.org/people/NoiseCollector/sounds/107475/',
        },
        {
          name: 'honk',
          soundUrl: 'sounds/honk.wav',
          sourceUrl: 'https://freesound.org/people/Stickinthemud/sounds/27880/',
        },
      ],
      audio: null,
    }
  },
  methods: {
    play(soundUrl) {
      if (this.audio) {
        this.audio.pause()
        this.audio.currentTime = 0
      }
      this.audio = new Audio(soundUrl)

      this.audio.play()
      setTimeout(() => console.log(this.audio.duration), 1000)
    },
    playAll() {
      let time = 0
      this.sounds.forEach((sound) => {
        time += 800
        setTimeout(() => {
          if (this.audio) {
            this.audio.pause()
            this.audio.currentTime = 0
          }
          this.currentButton = sound.name
          this.audio = new Audio(sound.soundUrl)
          this.audio.play()
        }, time)
        setTimeout(() => (this.currentButton = null), time + 800)
      })
    },
  },
}
</script>
