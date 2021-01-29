<template>
  <div>
    <h2 class="font-bold text-2xl py-4">Cat Sounds</h2>
    <p class="pb-2">
      Is everything too quiet around you? Click on these buttons to fix that.
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
  name: 'CatSounds',
  data() {
    return {
      currentButton: null,
      sounds: [
        {
          name: 'meow',
          soundUrl: '/sounds/meow.wav',
          sourceUrl: 'https://freesound.org/people/tuberatanka/sounds/110011/',
        },
        {
          name: 'hiss',
          soundUrl: '/sounds/hiss.wav',
          sourceUrl: 'https://freesound.org/people/Zabuhailo/sounds/146960/',
        },
        {
          name: 'meow2',
          soundUrl: '/sounds/meow2.wav',
          sourceUrl: 'https://freesound.org/people/TRNGLE/sounds/362652/',
        },
        {
          name: 'purr',
          soundUrl: '/sounds/purr.mp3',
          sourceUrl:
            'https://www.zapsplat.com/page/3/?s=cat&post_type=music&sound-effect-category-id',
        },
        {
          name: 'lick',
          soundUrl: '/sounds/lick.wav',
          sourceUrl: 'https://freesound.org/people/Nakhas/sounds/341547/',
        },
        {
          name: 'scream',
          soundUrl: '/sounds/scream.wav',
          sourceUrl: 'https://freesound.org/people/InspectorJ/sounds/415209/',
        },
        {
          name: 'mew',
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
