<template>
  <div class="mx-4 md:mx-20">
    <h2 class="font-bold text-2xl py-4">Cat Piano</h2>
    <p>
      My goal is to find meows that, put in sequence, resemble a musical scale.
      Here goes nothing!
    </p>
    <button
      v-for="sound in sounds"
      :key="sound.name"
      class="border p-1 rounded m-2 text-sm lg:p-2 lg:text-base"
      :class="
        currentButton === sound.name
          ? 'bg-pink-600 hover:bg-pink-800'
          : 'bg-teal-600 hover:bg-teal-800'
      "
      type="button"
      @click="play(sound)"
    >
      {{ sound.name }}
    </button>

    <footer class="mt-2">
      <h3 class="text-sm py-2 md:text-base">Sound Sources</h3>
      <div class="text-center">
        <a
          v-for="(sound, index) in sounds"
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
  name: 'CatPiano',
  data() {
    return {
      currentButton: null,
      sounds: [
        {
          name: 'low C',
          soundUrl: '/sounds/meow2.wav',
          sourceUrl: 'https://freesound.org/people/TRNGLE/sounds/362652/',
        },
        {
          name: 'low C 2nd',
          soundUrl: '/sounds/meows/meow15.mp3',
          sourceUrl: 'https://www.zapsplat.com/music/cat-meowing-3-versions/',
        },
        {
          name: 'Eb?',
          soundUrl: '/sounds/meow.wav',
          sourceUrl: 'https://freesound.org/people/tuberatanka/sounds/110011/',
        },
        {
          name: '3rd note - F# ?',
          soundUrl: '/sounds/meows/meow10.mp3',
          sourceUrl:
            'https://www.zapsplat.com/music/cat-meow-hungry-begging-for-food/',
        },
        {
          name: 'low G!',
          soundUrl: '/sounds/meows/meow11.mp3',
          sourceUrl:
            'https://www.zapsplat.com/music/cat-meow-hungry-begging-for-food/',
        },
        {
          name: 'high G!',
          soundUrl: '/sounds/meows/meow12.mp3',
          sourceUrl: 'https://www.zapsplat.com/music/cat-meowing/',
        },
        {
          name: 'high G! 2nd',
          soundUrl: '/sounds/meows/meow01.mp3',
          sourceUrl: 'https://www.zapsplat.com/music/cat-meow-1/',
        },
        {
          name: 'G#! 1st',
          soundUrl: '/sounds/meows/meow14.mp3',
          sourceUrl: 'https://www.zapsplat.com/music/cat-meowing-3-versions/',
        },
        {
          name: 'G#! 2nd',
          soundUrl: '/sounds/meows/meow08.mp3',
          sourceUrl:
            'https://www.zapsplat.com/music/cat-meow-hungry-begging-for-food/',
        },
        {
          name: 'almost A',
          soundUrl: '/sounds/meows/meow16.mp3',
          sourceUrl: 'https://www.zapsplat.com/music/cat-kitten-meow-1/',
        },
        {
          name: 'Bb!',
          soundUrl: '/sounds/meows/meow17.mp3',
          sourceUrl: 'https://www.zapsplat.com/music/cat-kitten-meow-3/',
        },
        {
          name: 'low B?',
          soundUrl: '/sounds/meows/meow05.wav',
          sourceUrl: 'https://freesound.org/people/freemaster2/sounds/66515/',
        },
        {
          name: 'B!',
          soundUrl: '/sounds/meows/meow18.mp3',
          sourceUrl: 'https://www.zapsplat.com/music/cat-kitten-meow-4/',
        },
        {
          name: 'high C',
          soundUrl: '/sounds/mew.wav',
          sourceUrl: 'https://freesound.org/people/Breviceps/sounds/448084/',
        },
      ],
    }
  },
  methods: {
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
  },
}
</script>
